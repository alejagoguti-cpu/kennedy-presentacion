// Kennedy fotográfico: Google Photorealistic 3D Tiles (igual que el simulador), alineado con el marco local.
// La foto es el mundo; los datos, redes y conectografías van encima. Si falla (sin red o llave), queda la ciudad procedural.
import * as THREE from 'three';
import { TilesRenderer, WGS84_ELLIPSOID } from '3d-tiles-renderer';
import { GoogleCloudAuthPlugin, GLTFExtensionsPlugin } from '3d-tiles-renderer/plugins';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GKEY } from './clave.js';

const MXg = 111320 * Math.cos(4.63 * Math.PI / 180), MYg = 110540, D2R = Math.PI / 180;
const LNG0 = -74.17 + (7188 - 5193.24) / MXg, LAT0 = 4.63 + (2045.46 - 2090.06) / MYg; // origen del marco local

export function crearGoogle(W, U) {
  if (new URLSearchParams(location.search).get('google') === '0') return null;
  const G = { ok: false, dy: 0, calib: 0, t: 0, meta: 7, mats: new Set(), atrib: 0 };
  U.uLuz = U.uLuz || { value: 0.92 };
  const tiles = new TilesRenderer();
  tiles.registerPlugin(new GoogleCloudAuthPlugin({ apiToken: GKEY, autoRefreshToken: true }));
  tiles.registerPlugin(new GLTFExtensionsPlugin({ dracoLoader: new DRACOLoader().setDecoderPath('./draco/') }));
  tiles.setCamera(W.cam); tiles.setResolutionFromRenderer(W.cam, W.r);
  tiles.errorTarget = 40;
  const frame = new THREE.Matrix4(); WGS84_ELLIPSOID.getEastNorthUpFrame(LAT0 * D2R, LNG0 * D2R, frame);
  frame.multiply(new THREE.Matrix4().makeTranslation(0, 0, 2564)); // altura elipsoidal aproximada del suelo de Kennedy; luego se calibra
  const M = new THREE.Matrix4().makeRotationX(-Math.PI / 2).multiply(frame.invert());
  tiles.group.matrixAutoUpdate = false;
  const aplicar = () => { tiles.group.matrix.makeTranslation(0, G.dy, 0).multiply(M); tiles.group.matrixWorldNeedsUpdate = true; tiles.group.updateMatrixWorld(true); };
  aplicar();

  tiles.addEventListener('load-model', ({ scene: s }) => {
    if (!G.ok) activar();
    s.traverse((c) => {
      const m = c.isMesh && c.material; if (!m || !m.map) return;
      m.map.anisotropy = W.r.capabilities.getMaxAnisotropy();
      if (!m.isMeshBasicMaterial) { m.emissiveMap = m.map; m.emissive.setScalar(1); m.color.setScalar(0); m.roughness = 1; m.metalness = 0; }
      m.toneMapped = false;
      m.onBeforeCompile = (sh) => {
        Object.assign(sh.uniforms, U);
        sh.vertexShader = 'varying vec3 vWPg;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n vWPg = (modelMatrix * vec4(transformed, 1.0)).xyz;');
        sh.fragmentShader = 'varying vec3 vWPg; uniform float uSube, uR, uFR, uGris, uLuz; uniform vec2 uOri, uFoco; uniform vec3 uFC;\n' + sh.fragmentShader.replace('#include <opaque_fragment>', `
          if (distance(vWPg.xz, uOri) > uSube * uR) discard;           // la ciudad aparece en ola
          vec3 c = max(outgoingLight - vec3(0.025, 0.03, 0.04), 0.0) / 0.96;
          float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = max(mix(vec3(l), c, 1.14), 0.0);
          c = pow(c, vec3(1.1)) * vec3(1.04, 0.93, 0.84) * uLuz;          // gradación de atardecer (como el simulador)
          float f = uFR > 0.0 ? 1.0 - smoothstep(uFR * 0.55, uFR, distance(vWPg.xz, uFoco)) : 0.0;
          float borde = smoothstep(0.0, 0.25, f) * (1.0 - smoothstep(0.25, 0.6, f));
          c = mix(c, c * 0.8 + uFC * 0.25, f * 0.45) + uFC * borde * 0.35;   // foco sutil: tinte leve + aro de luz
          float g = dot(c, vec3(0.299, 0.587, 0.114));
          c = mix(c, vec3(g) * 0.75, uGris * 0.65 * (1.0 - f));             // contexto en gris para que resalten los datos
          outgoingLight = c;
          #include <opaque_fragment>`);
      };
      m.customProgramCacheKey = () => 'kennedyFoto'; m.needsUpdate = true;
      G.mats.add(m);
    });
  });
  tiles.addEventListener('dispose-model', ({ scene: s }) => s.traverse((c) => { if (c.isMesh) G.mats.delete(c.material); }));
  tiles.addEventListener('load-error', (e) => { if (!G.ok) console.warn('fotogrametría no disponible: se usa la ciudad procedural', e?.error?.message || ''); });

  // cuando llega la primera tesela, la foto reemplaza a la ciudad procedural
  function activar() {
    G.ok = true; W.google = G;
    const ed = W.capas.edif; ed.children.forEach((m) => (m.visible = false)); ed.add(tiles.group);
    ['arboles', 'parques', 'calles', 'baseSuelo'].forEach((k) => { const o = W[k]?.grp || W[k]; if (o) o.visible = false; });
    W.cerrosMallas?.forEach((m) => (m.visible = false));
    const losa = W.capas.losa; losa.children.forEach((c) => { if (c.isMesh) c.visible = false; });
    W.sol.castShadow = false; W.r.shadowMap.enabled = false;
    // los datos se leen por encima de la foto
    ['pA', 'pB', 'pC', 'pD', 'pE', 'pF', 'agentes', 'flujos', 'iso', 'metro', 'vias-prin'].forEach((n) => W.capas[n]?.traverse((o) => { if (o.material) { o.material.depthTest = false; o.renderOrder = 5; } }));
    document.getElementById('atrib')?.classList.add('on');
  }
  // el suelo de la foto se pone en y = 0 midiendo cruces de calles reales (percentil bajo: no techos ni copas)
  const rc = new THREE.Raycaster(), abajo = new THREE.Vector3(0, -1, 0);
  const muestras = W.datos.vias.vias.filter((v) => v[0] >= 4).slice(0, 400).filter((_, i) => i % 8 === 0).map((v) => [v[1], v[2]]);
  function calibrar() {
    const st = tiles.stats; if (st.downloading + st.parsing > 4) return false;
    const h = []; for (const [x, z] of muestras) { rc.set(new THREE.Vector3(x, 3000, z), abajo); const r = rc.intersectObject(tiles.group, true)[0]; if (r) h.push(r.point.y); }
    if (h.length < 10) return false; h.sort((a, b) => a - b); G.dy -= h[Math.floor(h.length * 0.25)]; aplicar(); return true;
  }
  G.update = (dt) => {
    try {
      tiles.setResolutionFromRenderer(W.cam, W.r); W.cam.updateMatrixWorld(); tiles.update();
      const st = tiles.stats;
      if (tiles.errorTarget > G.meta && st.downloading === 0 && st.parsing === 0 && st.visible > 3) tiles.errorTarget = Math.max(G.meta, Math.round(tiles.errorTarget * 0.7));
      G.t += dt; if (G.ok && G.calib < 2 && G.t > [3, 10][G.calib]) { if (calibrar()) G.calib++; else G.t = 0; }
      if ((G.atrib -= dt) <= 0) { G.atrib = 3; const a = tiles.getAttributions?.() || []; const txt = a.filter((x) => x.type === 'string').map((x) => x.value).join(' · '); const el = document.getElementById('atrib'); if (el && txt) el.textContent = 'Fotogrametría: Google · ' + txt; }
    } catch (err) { if (!G.fallo) { G.fallo = true; console.warn('fotogrametría', err); } }
  };
  G.tiles = tiles;
  W.scene.add(tiles.group); // provisional hasta activar()
  return G;
}
