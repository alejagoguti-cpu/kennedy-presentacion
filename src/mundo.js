// Kennedy en 3D con datos reales (red-de-problemas, macromodelos-kennedy, simulador, humedal El Burro).
// Marco: metros desde el centro de la nube del simulador; x = este, z = sur.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

export const W = { capas: {}, et: new Map(), t: 0, stop: true };
const BASE = './';
const C = { lima: '#C7FF27', marfil: '#F5F3EB', lavanda: '#A99BCB', agua: '#6FA3AF', arcilla: '#B58C78', coral: '#E36C4B', gris: '#898D84', petroleo: '#294E59' };
export const COL_P = { A: C.arcilla, B: C.lavanda, C: C.agua, D: C.coral, E: C.marfil, F: C.lima };
export const NOM_P = { A: 'Dependencia de alimentos externos', B: 'Crecimiento poblacional', C: 'Valorización del suelo', D: 'Especulación inmobiliaria', E: 'Gestión de residuos sólidos', F: 'Centralización de servicios' };
export const LUG = {
  corabastos: [-715, -168], kennedy: [-926, 1118], flores: [-451, -469], bavaria: [2119, -1067], mariapaz: [-533, -385],
  patio: [-2033, -1239], tintal: [-126, -3059], centro: [0, 0],
};

const j = (u) => fetch(BASE + u).then((r) => r.json());

/* ------------------------------------------------------------------ utilidades de capa */
function registrar(nombre, obj, { visible = false } = {}) {
  obj.visible = visible; obj.userData.v = visible ? 1 : 0;
  obj.traverse((o) => { const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; ms.forEach((m) => { if (m.userData.op0 === undefined) m.userData.op0 = m.opacity ?? 1; m.transparent = true; }); });
  W.scene.add(obj); W.capas[nombre] = obj; return obj;
}
function aplicarOp(obj, v) {
  obj.userData.v = v; obj.visible = v > 0.002;
  obj.traverse((o) => {
    const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    ms.forEach((m) => { if (m.uniforms?.uOp) m.uniforms.uOp.value = v; else m.opacity = m.userData.op0 * v; });
  });
}
/** muestra u oculta una capa con fundido escalonado */
export function capa(nombre, on = true, d = 0.8) {
  const o = W.capas[nombre]; if (!o) return;
  const p = { v: o.userData.v ?? 0 };
  gsap.killTweensOf(o.userData);
  if (d <= 0) return aplicarOp(o, on ? 1 : 0);
  gsap.to(p, { v: on ? 1 : 0, duration: d, ease: on ? 'expo.out' : 'expo.in', onUpdate: () => aplicarOp(o, p.v) });
}
export const uni = (nombre) => W.capas[nombre]?.userData.u;

/* ------------------------------------------------------------------ entorno cromado */
function entorno(r) {
  const s = new THREE.Scene(); s.background = new THREE.Color('#08090C');
  const panel = (c, k, pos, rot, esc) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), side: THREE.DoubleSide })); m.position.set(...pos); m.rotation.set(...rot); m.scale.set(esc[0], esc[1], 1); s.add(m); };
  panel(C.marfil, 6, [0, 6, -9], [0, 0, 0], [12, 2]); panel(C.marfil, 3, [0, 9, 0], [Math.PI / 2, 0, 0], [10, 10]);
  panel(C.lavanda, 2.4, [-8, 1, 3], [0, Math.PI / 2, 0], [10, 3]); panel(C.lima, 1.8, [8, -2, 2], [0, -Math.PI / 2, 0], [8, 1.5]);
  panel(C.marfil, 2.6, [0, 0, 10], [0, Math.PI, 0], [20, 1]); panel(C.coral, 1.2, [0, -6, 6], [Math.PI / 2, 0, 0], [5, 5]);
  const pm = new THREE.PMREMGenerator(r); const t = pm.fromScene(s, 0.02).texture; pm.dispose(); return t;
}
export const cromo = (color = '#f1f2f5') => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness: 0.12, iridescence: 0.55, iridescenceIOR: 1.4, iridescenceThicknessRange: [180, 520], clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 2 });
export const cromoLima = () => { const m = cromo(C.lima); m.metalness = 0.75; m.emissive = new THREE.Color(C.lima); m.emissiveIntensity = 0.3; return m; };

/* ------------------------------------------------------------------ materiales de puntos y líneas animadas */
function matPuntos(color, size = 28) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uOp: { value: 0 }, uAp: { value: 0 }, uT: { value: 0 }, uC: { value: new THREE.Color(color) }, uS: { value: size }, uPix: { value: 1 } },
    vertexShader: `attribute float aR; attribute float aK; uniform float uAp, uT, uS, uPix; varying float vA; varying float vK;
      void main(){ float a = clamp((uAp*1.25 - aR)*6.0, 0.0, 1.0); vA = a; vK = aK;
        vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        float pul = 1.0 + 0.25*sin(uT*2.0 + aR*40.0);
        gl_PointSize = uS * aK * a * pul * uPix * (900.0 / -mv.z); }`,
    fragmentShader: `uniform vec3 uC; uniform float uOp; varying float vA; varying float vK;
      void main(){ vec2 p = gl_PointCoord - .5; float d = length(p); if(d>.5) discard;
        float nucleo = smoothstep(.5, .12, d); float aro = smoothstep(.5,.42,d) - smoothstep(.42,.34,d);
        gl_FragColor = vec4(uC * (nucleo*0.9 + aro*0.8) + vec3(nucleo*nucleo*0.4), (nucleo*0.85 + aro) * uOp * vA); }`,
  });
}
function matFlujo(color, vel = 260, largo = 140, hueco = 520) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uOp: { value: 0 }, uT: { value: 0 }, uDib: { value: 1 }, uC: { value: new THREE.Color(color) }, uV: { value: vel }, uL: { value: largo }, uH: { value: hueco }, uBase: { value: 0.18 } },
    vertexShader: `attribute float aD; attribute float aDT; varying float vD; varying float vDT; void main(){ vD = aD; vDT = aDT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform float uOp, uT, uDib, uV, uL, uH, uBase; uniform vec3 uC; varying float vD; varying float vDT;
      void main(){ if (vD > uDib * vDT) discard; float ph = mod(vD - uT*uV, uL + uH); float dash = ph < uL ? 1.0 : 0.0;
        gl_FragColor = vec4(uC, (uBase + dash*0.95) * uOp); }`,
  });
}
/** polilíneas [[x,z,x,z,...]] → LineSegments con distancia acumulada (aD) y total (aDT) */
function lineas(polis, y = 3) {
  const pos = [], d = [], dt = [];
  polis.forEach((pl) => {
    let acc = 0; const segs = []; for (let i = 0; i + 3 < pl.length; i += 2) { const L = Math.hypot(pl[i + 2] - pl[i], pl[i + 3] - pl[i + 1]); segs.push([pl[i], pl[i + 1], pl[i + 2], pl[i + 3], acc, acc + L]); acc += L; }
    segs.forEach(([x1, z1, x2, z2, a, b]) => { pos.push(x1, y, z1, x2, y, z2); d.push(a, b); dt.push(acc, acc); });
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aD', new THREE.Float32BufferAttribute(d, 1)); g.setAttribute('aDT', new THREE.Float32BufferAttribute(dt, 1));
  return g;
}
function puntos(pts, color, size, y = 8) {
  const pos = [], r = [], k = [];
  pts.forEach((p) => { pos.push(p[0], y + (p[2] || 1) * 4, p[1]); r.push(Math.random()); k.push(Math.min(3.5, Math.sqrt(p[2] || 1))); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aR', new THREE.Float32BufferAttribute(r, 1)); g.setAttribute('aK', new THREE.Float32BufferAttribute(k, 1));
  const m = new THREE.Points(g, matPuntos(color, size)); m.frustumCulled = false; return m;
}

/* ------------------------------------------------------------------ construcción */
export async function crearMundo(canvas) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  r.setPixelRatio(Math.min(1.5, devicePixelRatio)); r.setSize(innerWidth, innerHeight, false);
  // el centro de la escena 3D se corre a la derecha: el texto vive a la izquierda
  const desplazar = () => { cam.setViewOffset(innerWidth, innerHeight, -innerWidth * 0.11, 0, innerWidth, innerHeight); };
  r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.1;
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#08090C'); scene.fog = new THREE.FogExp2('#08090C', 0.000085);
  scene.environment = entorno(r);
  const cam = new THREE.PerspectiveCamera(36, innerWidth / innerHeight, 5, 60000);
  Object.assign(W, { r, scene, cam, obj: new THREE.Vector3(), pos: new THREE.Vector3(0, 9000, 9000) });
  scene.add(new THREE.HemisphereLight('#F5F3EB', '#2a2c27', 1.1));
  const sol = new THREE.DirectionalLight('#F5F3EB', 1.6); sol.position.set(-3000, 6000, 2500); scene.add(sol);
  const rim = new THREE.DirectionalLight(C.lavanda, 0.9); rim.position.set(4000, 1500, -4000); scene.add(rim);
  addEventListener('resize', () => { r.setSize(innerWidth, innerHeight, false); cam.aspect = innerWidth / innerHeight; desplazar(); });
  desplazar();

  // arco de luz del mundo (borde de planeta) — siempre vivo
  const arco = new THREE.Mesh(new THREE.TorusGeometry(26000, 60, 8, 200), new THREE.MeshBasicMaterial({ color: C.lima, transparent: true, opacity: 0.35, fog: false }));
  arco.rotation.x = Math.PI / 2.2; arco.position.set(0, -9000, -24000); scene.add(arco); W.arco = arco;
  const polvo = new THREE.BufferGeometry(); const pp = []; for (let i = 0; i < 1500; i++) pp.push((Math.random() - .5) * 16000, Math.random() * 5000, (Math.random() - .5) * 16000);
  polvo.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3));
  W.polvo = new THREE.Points(polvo, new THREE.PointsMaterial({ color: C.marfil, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.35, depthWrite: false })); scene.add(W.polvo);

  const [lim, vias, agua, upz, lug, ctx, pot] = await Promise.all(['datos/limite.json', 'datos/vias.json', 'datos/agua.json', 'datos/upz.json', 'datos/lugares.json', 'datos/contexto.json', 'datos/pot.json'].map(j));
  W.datos = { lim, vias, agua, upz, lug, ctx, pot };

  /* losa recortada por el límite de la localidad */
  const sh = new THREE.Shape(lim.pts.map(([x, z]) => new THREE.Vector2(x, -z)));
  const gl = new THREE.ExtrudeGeometry(sh, { depth: 60, bevelEnabled: false }); gl.rotateX(-Math.PI / 2); gl.translate(0, -60, 0);
  const losa = new THREE.Group();
  losa.add(new THREE.Mesh(gl, new THREE.MeshStandardMaterial({ color: '#141613', roughness: 0.9, metalness: 0.1 })));
  const borde = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(lim.pts.map(([x, z]) => new THREE.Vector3(x, 2, z))), new THREE.LineBasicMaterial({ color: C.lima, transparent: true, opacity: 0.9 }));
  losa.add(borde); registrar('losa', losa);

  /* vías */
  const vg = lineas(vias.vias.map((v) => v.slice(1)), 2.5);
  const vm = matFlujo(C.marfil, 0, 0, 1); vm.uniforms.uBase.value = 0.16; vm.blending = THREE.NormalBlending;
  registrar('vias', new THREE.LineSegments(vg, vm));
  const prin = vias.vias.filter((v) => v[0] >= 4).map((v) => v.slice(1));
  const vpm = matFlujo(C.lavanda, 420, 90, 700); vpm.uniforms.uBase.value = 0.35;
  registrar('vias-prin', new THREE.LineSegments(lineas(prin, 4), vpm)); uniRef('vias-prin', vpm);
  /* flujos de carga hacia Corabastos */
  const fl = Object.values(vias.flujos || {}).flat();
  const fm = matFlujo(C.coral, 520, 160, 420); fm.uniforms.uBase.value = 0.12;
  registrar('flujos', new THREE.LineSegments(lineas(fl, 9), fm)); uniRef('flujos', fm);

  /* agua */
  const ag = new THREE.Group();
  agua.agua.forEach((a) => {
    if (!a.poly || a.poly.length < 3) return;
    const s = new THREE.Shape(a.poly.map(([x, z]) => new THREE.Vector2(x, -z)));
    const g = new THREE.ShapeGeometry(s); g.rotateX(-Math.PI / 2); g.translate(0, 3, 0);
    ag.add(new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: C.agua, roughness: 0.15, metalness: 0.6, emissive: C.petroleo, emissiveIntensity: 0.6, transparent: true, opacity: 0.85 })));
  });
  registrar('agua', ag);

  /* UPZ: prismas con altura = habitantes por hectárea */
  const ug = new THREE.Group(); W.upz = {};
  upz.upz.forEach((u) => {
    const s = new THREE.Shape(u.poly.map(([x, z]) => new THREE.Vector2(x, -z)));
    const g = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false }); g.rotateX(-Math.PI / 2);
    const col = new THREE.Color(C.lavanda).lerp(new THREE.Color(C.coral), Math.min(1, u.dens / 440));
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: col, transparent: true, opacity: 0.55, roughness: 0.4, metalness: 0.3, emissive: col, emissiveIntensity: 0.25 }));
    m.scale.y = 0.001; m.userData.h = u.dens * 1.5; ug.add(m);
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(g, 30), new THREE.LineBasicMaterial({ color: C.marfil, transparent: true, opacity: 0.5 }));
    m.add(e); W.upz[u.n] = { m, u };
  });
  registrar('upz', ug);

  /* puntos de cada problema (conectografía) */
  [...'ABCDEF'].forEach((k) => {
    const pts = lug[k].pts; const p = puntos(pts, COL_P[k], k === 'F' ? 90 : k === 'B' ? 10 : 22, 10);
    registrar('p' + k, p); uniRef('p' + k, p.material);
  });

  /* isócronas a mercados (contexto.iso) */
  const iso = (ctx.iso || []).map((a) => a.slice(1));
  const im = matFlujo(C.lima, 300, 60, 120); im.uniforms.uBase.value = 0.45;
  registrar('iso', new THREE.LineSegments(lineas(iso, 12), im)); uniRef('iso', im);

  /* metro línea 1 */
  if (ctx.metro) { const mm = matFlujo(C.lavanda, 600, 300, 300); mm.uniforms.uBase.value = 0.5; registrar('metro', new THREE.LineSegments(lineas([ctx.metro.flat()], 30), mm)); uniRef('metro', mm); }

  /* edificios reales (edif.bin) con crecimiento en ola y tinte por foco */
  await edificios();
  redPOT(pot); red6(); propuesta(); agentes(); await especies(); capas18(); bavaria();
  return W;
}
function uniRef(nombre, mat) { W.capas[nombre].userData.u = mat.uniforms; }

async function edificios() {
  const buf = await fetch(BASE + 'datos/edif.bin').then((r) => r.arrayBuffer());
  const dv = new DataView(buf), n = dv.getUint32(4, true);
  const g = new THREE.BoxGeometry(1, 1, 1); g.translate(0, 0.5, 0);
  const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.55, metalness: 0.35, envMapIntensity: 0.6 });
  const U = { uSube: { value: 0 }, uOri: { value: new THREE.Vector2(-715, -168) }, uR: { value: 9000 }, uFoco: { value: new THREE.Vector2(-715, -168) }, uFR: { value: 0 }, uFC: { value: new THREE.Color(C.lima) }, uGris: { value: 0 }, uOp: { value: 1 } };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = 'uniform float uSube, uR, uFR; uniform vec2 uOri, uFoco; varying float vF;\n' + sh.vertexShader.replace('#include <begin_vertex>', `
      vec2 cen = (instanceMatrix * vec4(0.,0.,0.,1.)).xz;
      float ola = clamp((uSube * uR - distance(cen, uOri)) / 380.0, 0.0, 1.0);
      vec3 transformed = vec3(position.x, position.y * ola, position.z);
      vF = uFR > 0. ? 1.0 - smoothstep(uFR*0.55, uFR, distance(cen, uFoco)) : 0.0;`);
    sh.fragmentShader = 'uniform vec3 uFC; uniform float uGris; varying float vF;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uFC, vF*0.85); diffuseColor.rgb *= mix(1.0, 0.35, uGris*(1.0-vF));`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += uFC * vF * 0.35;');
  };
  const m = new THREE.InstancedMesh(g, mat, n), o = new THREE.Object3D(), c = new THREE.Color(), cB = new THREE.Color('#3a3c38'), cA = new THREE.Color('#d9dbd2');
  for (let i = 0; i < n; i++) {
    const b = 8 + i * 12; const hh = dv.getInt16(b + 10, true) / 2;
    o.position.set(dv.getInt16(b, true) / 2, 0, dv.getInt16(b + 2, true) / 2); o.rotation.set(0, dv.getInt16(b + 8, true) / 10000, 0);
    o.scale.set(dv.getInt16(b + 4, true) / 2, Math.max(3, hh * 2.2), dv.getInt16(b + 6, true) / 2); o.updateMatrix(); m.setMatrixAt(i, o.matrix);
    m.setColorAt(i, c.copy(cB).lerp(cA, Math.min(1, Math.pow(hh / 40, 0.7))));
  }
  m.frustumCulled = false;
  const grp = new THREE.Group(); grp.add(m); registrar('edif', grp); W.capas.edif.userData.u = U;
  mat.transparent = false; // los edificios no se funden: crecen (uSube)
}

/* ------------------------------------------------------------------ red del POT (58 nodos reales del macromodelo) */
function redPOT(pot) {
  const ids = Object.keys(pot.nodos), idx = Object.fromEntries(ids.map((k, i) => [k, i]));
  const ar = Object.values(pot.aristas).filter((e) => idx[e.a] !== undefined && idx[e.b] !== undefined);
  const gr = new Array(ids.length).fill(0); ar.forEach((e) => { gr[idx[e.a]]++; gr[idx[e.b]]++; });
  // disposición por fuerzas en 3D (determinista)
  let s = 7; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const P = ids.map(() => new THREE.Vector3((rnd() - .5) * 3000, (rnd() - .5) * 1600, (rnd() - .5) * 3000));
  for (let it = 0; it < 260; it++) {
    const F = P.map(() => new THREE.Vector3());
    for (let a = 0; a < P.length; a++) for (let b = a + 1; b < P.length; b++) { const d = P[a].clone().sub(P[b]); const L = Math.max(60, d.length()); d.multiplyScalar(2.6e6 / (L * L * L)); F[a].add(d); F[b].sub(d); }
    ar.forEach((e) => { const a = idx[e.a], b = idx[e.b]; const d = P[b].clone().sub(P[a]); const L = d.length(); d.multiplyScalar((L - 560) * 0.02 / Math.max(L, 1)); F[a].add(d); F[b].sub(d); });
    P.forEach((p, i) => { F[i].add(p.clone().multiplyScalar(-0.004)); p.add(F[i].clampLength(0, 120)); });
  }
  const grp = new THREE.Group(); grp.position.set(0, 1500, 0);
  const max = Math.max(...gr); const top5 = [...gr].sort((a, b) => b - a)[4];
  const esf = new THREE.SphereGeometry(1, 32, 20);
  const nodos = ids.map((k, i) => {
    const hub = gr[i] >= top5;
    const m = new THREE.Mesh(esf, hub ? cromoLima() : cromo()); m.position.copy(P[i]);
    m.userData = { r: 22 + Math.sqrt(gr[i]) * 16, hub, grado: gr[i], nombre: pot.nodos[k].nombre, capa: pot.nodos[k].capa };
    m.scale.setScalar(m.userData.r); grp.add(m); return m;
  });
  const pos = [], d = [], dt = [];
  ar.forEach((e) => { const a = P[idx[e.a]], b = P[idx[e.b]]; const L = a.distanceTo(b); pos.push(a.x, a.y, a.z, b.x, b.y, b.z); d.push(0, L); dt.push(L, L); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aD', new THREE.Float32BufferAttribute(d, 1)); g.setAttribute('aDT', new THREE.Float32BufferAttribute(dt, 1));
  const lm = matFlujo(C.marfil, 380, 50, 300); lm.uniforms.uBase.value = 0.3;
  const lineasRed = new THREE.LineSegments(g, lm); grp.add(lineasRed);
  registrar('red-pot', grp); W.capas['red-pot'].userData.u = lm.uniforms;
  W.pot = { grp, nodos, aristas: ar.length, max };
}

/* ------------------------------------------------------------------ red de los seis problemas */
export const RED6 = { aristas: [['B', 'A'], ['B', 'F'], ['F', 'C'], ['F', 'D'], ['C', 'D'], ['A', 'F'], ['A', 'E'], ['F', 'E']] };
function red6() {
  const grp = new THREE.Group(); grp.position.set(0, 900, 0);
  const orden = ['F', 'A', 'E', 'D', 'C', 'B'];
  const P = {}; orden.forEach((k, i) => { if (k === 'F') P[k] = new THREE.Vector3(0, 120, 0); else { const a = ((i - 1) / 5) * Math.PI * 2 - Math.PI / 2; P[k] = new THREE.Vector3(Math.cos(a) * 1500, 0, Math.sin(a) * 1500); } });
  // centro real de cada problema en el mapa (para la conectografía)
  const L = W.datos.lug; W.red6Suelo = {};
  [...'ABCDEF'].forEach((k) => { const h = L[k].hitos?.[0]?.p; let x = 0, z = 0; if (h) [x, z] = h; else { L[k].pts.forEach((p) => { x += p[0]; z += p[1]; }); x /= L[k].pts.length; z /= L[k].pts.length; } W.red6Suelo[k] = new THREE.Vector3(x, -900 + 40, z); });
  const nod = {};
  orden.forEach((k) => { const m = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 24), k === 'F' ? cromoLima() : cromo(COL_P[k])); m.position.copy(P[k]); m.scale.setScalar(k === 'F' ? 210 : 140); m.userData.k = k; grp.add(m); nod[k] = m; });
  // aristas como tubos que se dibujan
  const tubos = RED6.aristas.map(([a, b]) => {
    const A = P[a], B = P[b]; const mid = A.clone().add(B).multiplyScalar(0.5).add(new THREE.Vector3(0, 380, 0));
    const curva = new THREE.QuadraticBezierCurve3(A, mid, B);
    const t = new THREE.Mesh(new THREE.TubeGeometry(curva, 60, 14, 8, false), new THREE.MeshBasicMaterial({ color: a === 'F' || b === 'F' ? C.lima : C.marfil, transparent: true, opacity: 0.85 }));
    t.geometry.setDrawRange(0, 0); t.userData = { a, b, curva, total: t.geometry.index.count }; grp.add(t); return t;
  });
  registrar('red6', grp);
  W.red6 = { grp, nod, tubos, P };
}

/* ------------------------------------------------------------------ propuesta: mercados, estaciones, corredores */
function anillo(color, r = 1) { return new THREE.Mesh(new THREE.RingGeometry(r * 0.96, r, 96), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false })); }
function propuesta() {
  const L = W.datos.lug, U = W.datos.upz.upz;
  // mercados barriales distribuidos (esquema): un nodo por UPZ + coberturas de 15 min (~1.000 m a pie)
  const mg = new THREE.Group(); W.mercados = [];
  U.forEach((u) => {
    const g = new THREE.Group(); g.position.set(u.c[0], 14, u.c[1]);
    const ar = anillo(C.lima, 1000); ar.rotation.x = -Math.PI / 2; ar.scale.setScalar(0.001); g.add(ar);
    const disco = new THREE.Mesh(new THREE.CircleGeometry(1000, 64), new THREE.MeshBasicMaterial({ color: C.lima, transparent: true, opacity: 0.07, depthWrite: false })); disco.rotation.x = -Math.PI / 2; disco.scale.setScalar(0.001); g.add(disco);
    const n = new THREE.Mesh(new THREE.OctahedronGeometry(60), cromoLima()); n.position.y = 120; g.add(n);
    g.userData = { ar, disco, n }; mg.add(g); W.mercados.push(g);
  });
  registrar('mercados', mg);
  // Corabastos como nodo central (concentración actual)
  const cg = new THREE.Group(); cg.position.set(L.F.hitos[0].p[0], 20, L.F.hitos[0].p[1]);
  const t = new THREE.Mesh(new THREE.TorusGeometry(420, 26, 16, 120), cromo()); t.rotation.x = Math.PI / 2; cg.add(t);
  const t2 = new THREE.Mesh(new THREE.TorusGeometry(620, 10, 12, 120), cromoLima()); t2.rotation.x = Math.PI / 2; cg.add(t2);
  registrar('corabastos', cg); W.coraAros = [t, t2];
  // estaciones circulares: cerca de las mayores acumulaciones de residuos (puntos E reales)
  const E = L.E.pts; const sel = [[-533, -385]];
  for (let i = 0; i < 5; i++) { let mejor = null, md = -1; for (let k = 0; k < E.length; k += 7) { const p = E[k]; const d = Math.min(...sel.map((s) => Math.hypot(s[0] - p[0], s[1] - p[1]))); if (d > md && Math.abs(p[0]) < 3200 && Math.abs(p[1]) < 3200) { md = d; mejor = [p[0], p[1]]; } } sel.push(mejor); }
  const eg = new THREE.Group(); W.estaciones = [];
  sel.forEach((p) => {
    const g = new THREE.Group(); g.position.set(p[0], 60, p[1]);
    const a = new THREE.Mesh(new THREE.TorusGeometry(150, 30, 16, 64), cromoLima()); a.rotation.x = Math.PI / 2; g.add(a);
    const b = new THREE.Mesh(new THREE.TorusGeometry(100, 16, 12, 64), cromo()); g.add(b);
    g.userData = { a, b }; eg.add(g); W.estaciones.push(g);
  });
  registrar('estaciones', eg);
  // corredores ecológicos: cadena entre cuerpos de agua (centroides reales), tubos que se dibujan
  const cen = W.datos.agua.agua.filter((a) => a.poly?.length > 2).map((a) => { let x = 0, z = 0; a.poly.forEach((p) => { x += p[0]; z += p[1]; }); return new THREE.Vector3(x / a.poly.length, 30, z / a.poly.length); }).filter((v) => Math.abs(v.x) < 4200 && Math.abs(v.z) < 4200);
  const usados = new Set([0]); const cad = [cen[0]]; let act = 0;
  while (usados.size < Math.min(cen.length, 14)) { let mj = -1, md = 1e9; cen.forEach((c, i) => { if (!usados.has(i)) { const d = c.distanceTo(cen[act]); if (d < md) { md = d; mj = i; } } }); usados.add(mj); cad.push(cen[mj]); act = mj; }
  const curva = new THREE.CatmullRomCurve3(cad);
  const tubo = new THREE.Mesh(new THREE.TubeGeometry(curva, 600, 16, 10, false), new THREE.MeshBasicMaterial({ color: '#9be15d', transparent: true, opacity: 0.75 }));
  tubo.geometry.setDrawRange(0, 0); tubo.userData.total = tubo.geometry.index.count;
  const cg2 = new THREE.Group(); cg2.add(tubo); registrar('corredores', cg2); W.corredor = tubo; W.parches = cad;
}

/* ------------------------------------------------------------------ agentes del simulador (vehículos/personas sobre vías reales) */
function agentes() {
  const vias = W.datos.vias.vias.filter((v) => v.length > 8 && v[0] >= 3).slice(0, 2600);
  const N = 2600, pos = new Float32Array(N * 3), rnd = new Float32Array(N);
  const ag = []; for (let i = 0; i < N; i++) { const v = vias[i % vias.length].slice(1); ag.push({ v, t: Math.random() * (v.length / 2 - 1), s: (0.4 + Math.random()) * (Math.random() < .5 ? 1 : -1) }); rnd[i] = Math.random(); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aR', new THREE.BufferAttribute(rnd, 1)); g.setAttribute('aK', new THREE.BufferAttribute(new Float32Array(N).fill(1), 1));
  const m = new THREE.Points(g, matPuntos(C.marfil, 9)); m.material.uniforms.uAp.value = 1; m.frustumCulled = false;
  registrar('agentes', m); uniRef('agentes', m.material);
  W.agentes = { ag, pos, g, vel: 1 };
}
export function moverAgentes(dt) {
  const A = W.agentes; if (!A || !W.capas.agentes.visible) return;
  A.ag.forEach((a, i) => {
    const n = a.v.length / 2 - 1; a.t += a.s * dt * 1.6 * A.vel; if (a.t < 0) { a.t = 0; a.s *= -1; } if (a.t > n) { a.t = n; a.s *= -1; }
    const k = Math.floor(Math.min(a.t, n - 0.001)), f = a.t - k;
    A.pos[i * 3] = a.v[k * 2] + (a.v[k * 2 + 2] - a.v[k * 2]) * f; A.pos[i * 3 + 1] = 14; A.pos[i * 3 + 2] = a.v[k * 2 + 1] + (a.v[k * 2 + 3] - a.v[k * 2 + 1]) * f;
  });
  A.g.attributes.position.needsUpdate = true;
}

/* ------------------------------------------------------------------ especies: recortes reales del humedal + abeja 3D */
async function especies() {
  const grp = new THREE.Group(); W.esp = {};
  const tl = new THREE.TextureLoader();
  const sprite = (src, s) => { const t = tl.load(BASE + 'esp/' + src + '.png'); t.colorSpace = THREE.SRGBColorSpace; const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false })); sp.scale.set(s, s * 0.9, 1); return sp; };
  const parche = W.parches || [new THREE.Vector3()];
  const crear = (src, n, s, alt) => { const arr = []; for (let i = 0; i < n; i++) { const sp = sprite(src, s); const p = parche[(i * 3 + src.length) % parche.length]; sp.position.set(p.x + (Math.random() - .5) * 600, alt + Math.random() * 120, p.z + (Math.random() - .5) * 600); sp.userData = { base: sp.position.clone(), f: Math.random() * 6 }; grp.add(sp); arr.push(sp); } return arr; };
  W.esp.mirla = crear('mirla', 10, 150, 160); W.esp.tingua = crear('tingua_bogotana', 8, 140, 50); W.esp.colibri = crear('colibri', 6, 110, 200);
  try {
    const gltf = await new GLTFLoader().loadAsync(BASE + 'esp/abeja.glb');
    W.esp.abeja = [];
    for (let i = 0; i < 14; i++) { const a = gltf.scene.clone(); const b = new THREE.Box3().setFromObject(a); const k = 70 / Math.max(1e-3, b.getSize(new THREE.Vector3()).length()); a.scale.setScalar(k); const p = parche[i % parche.length]; a.position.set(p.x + (Math.random() - .5) * 500, 120 + Math.random() * 80, p.z + (Math.random() - .5) * 500); a.userData = { base: a.position.clone(), f: Math.random() * 6 }; grp.add(a); W.esp.abeja.push(a); }
  } catch (e) { W.esp.abeja = []; }
  registrar('especies', grp);
}
export function moverEspecies(t) {
  if (!W.capas.especies?.visible) return;
  Object.entries(W.esp).forEach(([k, arr]) => arr.forEach((s) => {
    const u = s.userData, r = k === 'tingua' ? 60 : 220;
    s.position.set(u.base.x + Math.cos(t * 0.6 + u.f) * r, u.base.y + Math.sin(t * 2.4 + u.f) * (k === 'tingua' ? 6 : 30), u.base.z + Math.sin(t * 0.6 + u.f) * r);
    if (k === 'abeja') s.rotation.y = -t * 0.6 - u.f;
  }));
}

/* ------------------------------------------------------------------ 18 capas satelitales → 9 índices */
function capas18() {
  const grp = new THREE.Group(); const lim = W.datos.lim.pts;
  const s = new THREE.Shape(lim.map(([x, z]) => new THREE.Vector2(x, -z)));
  const g = new THREE.ShapeGeometry(s); g.rotateX(-Math.PI / 2);
  const cols = [C.lavanda, C.agua, C.arcilla, C.coral, C.marfil, C.lima];
  W.capasPl = [];
  for (let i = 0; i < 18; i++) {
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: cols[i % cols.length], transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false }));
    const e = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(lim.map(([x, z]) => new THREE.Vector3(x, 0, z))), new THREE.LineBasicMaterial({ color: cols[i % cols.length], transparent: true, opacity: 0.7 }));
    m.add(e); m.position.y = 200 + i * 120; m.userData.y0 = m.position.y; grp.add(m); W.capasPl.push(m);
  }
  registrar('capas18', grp);
}

/* ------------------------------------------------------------------ Bavaria Común */
function bavaria() {
  const p = LUG.bavaria; const grp = new THREE.Group(); grp.position.set(p[0], 0, p[1]);
  const a = anillo(C.lima, 700); a.rotation.x = -Math.PI / 2; a.position.y = 16; grp.add(a);
  const b = anillo(C.lavanda, 900); b.rotation.x = -Math.PI / 2; b.position.y = 16; grp.add(b);
  // NBIC: cuatro esferas cromadas en órbita
  W.nbic = ['N', 'B', 'I', 'C'].map((k, i) => { const m = new THREE.Mesh(new THREE.SphereGeometry(48, 32, 20), i === 1 ? cromoLima() : cromo()); m.userData = { k, a: (i / 4) * Math.PI * 2 }; grp.add(m); return m; });
  registrar('bavaria', grp); W.bavAros = [a, b];
}
export function moverBavaria(t) {
  if (!W.capas.bavaria?.visible) return;
  W.nbic.forEach((m) => { const a = m.userData.a + t * 0.35; m.position.set(Math.cos(a) * 520, 380 + Math.sin(t + m.userData.a) * 40, Math.sin(a) * 520); });
  W.bavAros[0].rotation.z = t * 0.2; W.bavAros[1].rotation.z = -t * 0.12;
}
