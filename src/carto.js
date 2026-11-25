// Convenciones cartográficas y de red: leyenda automática, escala gráfica, norte, localizador y nivel de zoom.
import * as THREE from 'three';
import gsap from 'gsap';
import { W, COL_P, NOM_P, CAPAS_POT, TENSION } from './mundo.js';

/* ---------- leyenda: una entrada por capa visible ---------- */
const LEY = {
  losa: [['borde', '#C7FF27', 'Límite de la localidad 8 · Kennedy']],
  edif: [['area', '#d9dbd2', 'Edificaciones (huella y altura reales)']],
  vias: [['linea', '#b9bcb3', 'Malla vial']],
  'vias-prin': [['linea', '#A99BCB', 'Vías arteriales']],
  flujos: [['trazo', '#E36C4B', 'Flujos de carga hacia Corabastos']],
  agua: [['area', '#6FA3AF', 'Cuerpos de agua y humedales']],
  upz: [['grad', 'linear-gradient(90deg,#A99BCB,#E36C4B)', 'UPZ · altura ∝ habitantes por hectárea']],
  iso: [['trazo', '#C7FF27', 'Isócronas a mercados']],
  metro: [['trazo', '#A99BCB', 'Primera línea del metro (en obra)']],
  mercados: [['anillo', '#C7FF27', 'Mercado barrial · radio 15 min (esquema)']],
  corabastos: [['anillo', '#f1f2f5', 'Corabastos · central mayorista']],
  estaciones: [['anillo', '#C7FF27', 'Estación Circular (esquema)']],
  corredores: [['linea', '#9be15d', 'Corredor ecológico (esquema)']],
  agentes: [['punto', '#F5F3EB', 'Agentes del simulador']],
  especies: [['punto', '#9be15d', 'Fauna: mirla, tingua, colibrí, abeja']],
  capas18: [['borde', '#A99BCB', 'Capa de información satelital']],
  bavaria: [['anillo', '#C7FF27', 'Bavaria Común · marcadores NBIC']],
};
[...'ABCDEF'].forEach((k) => (LEY['p' + k] = [['punto', COL_P[k], NOM_P[k]]]));
LEY['red-pot'] = [
  ...CAPAS_POT.map(([n, c]) => ['anillo', c, n]),
  ['nota', '', 'Nodo = lugar real (anillo + haz) · tamaño ∝ grado · lima con halo = 5 de mayor grado · arco = relación'],
  ...Object.entries(TENSION).map(([n, [c]]) => [n === 'Media' ? 'linea' : 'gruesa', c, 'Relación · tensión ' + n.toLowerCase()]),
];
LEY.red6 = [
  ...[...'FABCDE'].map((k) => ['anillo', COL_P[k], NOM_P[k]]),
  ['flecha', '#C7FF27', 'Arco causal · origen → efecto'], ['nota', '', 'Nodo = lugar real del problema · tamaño ∝ grado (entrada + salida)'],
];
const ORDEN = ['red-pot', 'red6', 'losa', 'edif', 'vias', 'vias-prin', 'agua', 'upz', 'flujos', 'iso', 'metro', 'pA', 'pB', 'pC', 'pD', 'pE', 'pF', 'corabastos', 'mercados', 'estaciones', 'corredores', 'bavaria', 'agentes', 'especies', 'capas18'];

const sim = (t, c) => {
  if (t === 'area') return `<i class="s" style="background:${c}"></i>`;
  if (t === 'grad') return `<i class="s" style="background:${c}"></i>`;
  if (t === 'borde') return `<i class="s" style="border:2px solid ${c}"></i>`;
  if (t === 'linea') return `<i class="s l" style="background:${c}"></i>`;
  if (t === 'gruesa') return `<i class="s l g" style="background:${c}"></i>`;
  if (t === 'trazo') return `<i class="s l" style="background:repeating-linear-gradient(90deg,${c} 0 6px,transparent 6px 10px)"></i>`;
  if (t === 'punto') return `<i class="s p" style="background:${c};box-shadow:0 0 6px ${c}"></i>`;
  if (t === 'anillo') return `<i class="s p" style="border:2px solid ${c}"></i>`;
  if (t === 'nodo') return `<i class="s p n" style="background:radial-gradient(circle at 35% 30%,#fff,${c} 45%,#111 100%)"></i>`;
  if (t === 'flecha') return `<i class="s f" style="color:${c}">→</i>`;
  return '<i class="s"></i>';
};
let firma = '';
function leyenda() {
  const vis = ORDEN.filter((n) => { const o = W.capas[n]; return o && o.visible && (o.userData.v ?? 1) > 0.3; });
  const red = vis.includes('red-pot') ? ['red-pot'] : vis.includes('red6') ? ['red6', ...vis.filter((n) => /^p[A-F]$/.test(n))] : vis;
  const f = red.join('|') + (W.google ? 'g' : ''); if (f === firma) return; firma = f;
  const ul = document.querySelector('#conv ul'); const items = red.flatMap((n) => (n === 'edif' && W.google ? [['area', '#8d8a83', 'Ciudad real · fotogrametría 3D (Google)']] : LEY[n] || []));
  document.querySelector('#conv .k').textContent = red[0] === 'red-pot' ? 'Convenciones · red multicapa del POT' : red[0] === 'red6' ? 'Convenciones · red dirigida de problemas' : 'Convenciones';
  ul.innerHTML = items.map(([t, c, x]) => `<li class="${t === 'nota' ? 'nota' : ''}">${t === 'nota' ? '' : sim(t, c)}<span>${x}</span></li>`).join('');
  gsap.fromTo(ul.children, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.025, ease: 'steps(4)' });
}

/* ---------- localizador (minimapa) ---------- */
let mini, mx, B, lim;
function prepararMini() {
  mini = document.getElementById('mini'); mx = mini.getContext('2d');
  lim = W.datos.lim.pts; const xs = lim.map((p) => p[0]), zs = lim.map((p) => p[1]);
  B = { x0: Math.min(...xs), x1: Math.max(...xs), z0: Math.min(...zs), z1: Math.max(...zs) };
}
const aMini = (x, z) => { const s = (mini.width - 24) / Math.max(B.x1 - B.x0, B.z1 - B.z0); return [12 + (x - B.x0) * s, 12 + (z - B.z0) * s]; };
const ray = new THREE.Raycaster(), suelo = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
function huella() {
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => {
    ray.setFromCamera(new THREE.Vector2(x, y), W.cam);
    if (ray.ray.intersectPlane(suelo, hit) && hit.distanceTo(W.cam.position) < 40000) return [hit.x, hit.z];
    const p = ray.ray.at(40000, new THREE.Vector3()); return [p.x, p.z];
  });
}
function dibujarMini(obj) {
  const w = mini.width, h = mini.height; mx.clearRect(0, 0, w, h);
  mx.fillStyle = 'rgba(8,9,12,.82)'; mx.fillRect(0, 0, w, h);
  mx.beginPath(); lim.forEach(([x, z], i) => { const [a, b] = aMini(x, z); i ? mx.lineTo(a, b) : mx.moveTo(a, b); }); mx.closePath();
  mx.fillStyle = 'rgba(245,243,235,.08)'; mx.fill(); mx.strokeStyle = '#C7FF27'; mx.lineWidth = 1.5; mx.stroke();
  mx.save(); mx.clip();
  W.datos.upz.upz.forEach((u) => { mx.beginPath(); u.poly.forEach(([x, z], i) => { const [a, b] = aMini(x, z); i ? mx.lineTo(a, b) : mx.moveTo(a, b); }); mx.closePath(); mx.strokeStyle = 'rgba(245,243,235,.18)'; mx.lineWidth = 0.7; mx.stroke(); });
  mx.restore();
  const hu = huella(); mx.beginPath(); hu.forEach(([x, z], i) => { const [a, b] = aMini(x, z); i ? mx.lineTo(a, b) : mx.moveTo(a, b); }); mx.closePath();
  mx.fillStyle = 'rgba(199,255,39,.13)'; mx.fill(); mx.strokeStyle = 'rgba(199,255,39,.9)'; mx.lineWidth = 1; mx.stroke();
  const [cx, cy] = aMini(obj.x, obj.z); mx.fillStyle = '#C7FF27'; mx.fillRect(cx - 3, cy - 3, 6, 6);
  mx.strokeStyle = '#C7FF27'; mx.beginPath(); mx.moveTo(cx - 9, cy); mx.lineTo(cx + 9, cy); mx.moveTo(cx, cy - 9); mx.lineTo(cx, cy + 9); mx.stroke();
}

/* ---------- escala gráfica, norte y nivel de zoom ---------- */
const NICE = [10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000];
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
function nivel(d) { return d > 14000 ? 'Ciudad' : d > 6500 ? 'Localidad' : d > 3200 ? 'Localidad · UPZ' : d > 1600 ? 'UPZ' : d > 800 ? 'Sector' : 'Manzana'; }
export function nivelZoom(d) { return nivel(d); }
let cuenta = 0;
export function actualizarCarto(obj) {
  if (!mini) prepararMini();
  const dist = W.cam.position.distanceTo(obj);
  const mpp = (2 * dist * Math.tan(THREE.MathUtils.degToRad(W.cam.fov / 2))) / innerHeight;
  let L = NICE[0]; for (const n of NICE) if (n / mpp <= 170) L = n;
  const px = L / mpp;
  const esc = document.getElementById('escala');
  esc.querySelector('.barra').style.width = px + 'px';
  esc.querySelector('.fin').textContent = L >= 1000 ? (L / 1000).toLocaleString('es-CO') + ' km' : L + ' m';
  esc.querySelector('.mitad').textContent = L / 2 >= 1000 ? (L / 2000).toLocaleString('es-CO') + ' km' : L / 2 + ' m';
  const r = mpp / 0.000264583, pot = Math.pow(10, Math.floor(Math.log10(r)) - 1);
  document.getElementById('razon').textContent = '≈ 1:' + (Math.round(r / pot) * pot).toLocaleString('es-CO') + ' en pantalla';
  // norte: proyección de un punto 800 m al norte (−z) del objetivo
  v1.copy(obj).project(W.cam); v2.set(obj.x, obj.y, obj.z - 800).project(W.cam);
  const ang = Math.atan2(v2.x - v1.x, v2.y - v1.y) * 180 / Math.PI * (innerWidth / innerHeight > 1 ? 1 : 1);
  document.getElementById('norte').style.transform = `rotate(${ang}deg)`;
  document.getElementById('zoomnivel').textContent = 'Zoom · ' + nivel(dist);
  if (++cuenta % 2 === 0) dibujarMini(obj);
  leyenda();
}

/* ---------- aviso de zoom (convención: zoom out → desplazamiento → zoom in) ---------- */
export function avisoZoom(tipo, nombre = '') {
  const e = document.getElementById('zoomaviso'); if (!e) return;
  e.innerHTML = `<b>${tipo === 'in' ? '⊕ ZOOM IN' : '⊖ ZOOM OUT'}</b>${nombre ? `<span>${nombre}</span>` : ''}`;
  gsap.killTweensOf(e);
  gsap.fromTo(e, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'steps(4)' });
  gsap.to(e, { opacity: 0, duration: 0.4, delay: 1.6, ease: 'steps(4)' });
}
