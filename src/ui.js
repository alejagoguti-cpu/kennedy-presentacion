// Capa DOM sobre el 3D: todo entra en 3D, nada queda quieto (flota, hierve en stop-motion).
import gsap from 'gsap';
import * as THREE from 'three';
import { W } from './mundo.js';

export const R = { rapido: false };
export const D = (s) => (R.rapido ? 0 : s);
const IN = 'expo.out', OUT = 'expo.in';
const capa = () => document.getElementById('capa');
const els = new Map();

/** gsap.to que en modo rápido (saltos hacia atrás) aplica el estado final de inmediato */
export function tw(t, v) { if (R.rapido) { const { duration, delay, stagger, ease, repeat, yoyo, ...rest } = v; return gsap.set(t, rest); } return gsap.to(t, v); }
export function twf(t, a, b) { if (R.rapido) { const { duration, delay, stagger, ease, repeat, yoyo, ...rest } = b; return gsap.set(t, rest); } return gsap.fromTo(t, a, b); }

function poner(id, el) {
  if (els.has(id)) quitar(id, true);
  el.dataset.id = id; capa().appendChild(el); els.set(id, el);
  flotar(el);
  return el;
}
function flotar(el) {
  const a = 4 + Math.random() * 5, d = 3.6 + Math.random() * 1.6;
  el._flota = gsap.to(el, { '--fy': a + 'px', duration: d, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1 });
}
export function quitar(id, inmediato = false) {
  const el = els.get(id); if (!el) return; els.delete(id);
  el._flota?.kill(); gsap.killTweensOf(el); gsap.killTweensOf(el.querySelectorAll('*'));
  if (inmediato || R.rapido) return el.remove();
  gsap.to(el, { opacity: 0, y: '-=30', rotationX: 25, filter: 'blur(10px)', duration: 0.4, ease: OUT, onComplete: () => el.remove() });
}
export function limpiar(excepto = []) { [...els.keys()].forEach((k) => { if (!excepto.includes(k)) quitar(k); }); }
export function limpiarTodo() { [...els.keys()].forEach((k) => quitar(k, true)); document.getElementById('etiquetas').innerHTML = ''; W.et.clear(); }
export const el = (id) => els.get(id);

const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const pos = (e, o) => { ['left', 'top', 'right', 'bottom', 'width', 'height'].forEach((k) => { if (o[k] !== undefined) e.style[k] = typeof o[k] === 'number' ? o[k] + 'vw' : o[k]; }); };
const entra3D = (t, d = 0.9, extra = {}) => twf(t, { opacity: 0, rotationX: -70, z: -400, y: 80, filter: 'blur(14px)' }, { opacity: 1, rotationX: 0, z: 0, y: 0, filter: 'blur(0px)', duration: D(d), ease: IN, ...extra });

/* ---------- titular cinético: *clave* en lima, ~tachado~ ---------- */
export function titulo(texto, o = {}) {
  const id = o.id || 'tit';
  const e = h('div', 'tit ' + (o.cls || ''));
  const partes = texto.split(/(\*[^*]+\*|~[^~]+~)/).filter(Boolean);
  partes.forEach((p) => {
    const kw = p.startsWith('*'), ta = p.startsWith('~'); const txt = kw || ta ? p.slice(1, -1) : p;
    txt.split(/(\s+)/).forEach((w) => {
      if (!w) return; if (/^\s+$/.test(w)) { e.appendChild(document.createTextNode(' ')); return; }
      const s = h(ta ? 's' : 'span', 'w' + (kw ? ' kw' : '') + (ta ? ' tach' : ''), w); e.appendChild(s);
    });
  });
  pos(e, o); poner(id, e);
  if (o.kick) { const k = h('div', 'kick', o.kick); pos(k, o); if (o.top !== undefined) k.style.top = `calc(${typeof o.top === 'number' ? o.top + 'vw' : o.top} - 44px)`; poner(id + '-k', k); twf(k, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: D(0.6), ease: IN }); }
  const ws = e.querySelectorAll('.w');
  twf(ws, { opacity: 0, y: 60, rotationX: -80, filter: 'blur(12px)' }, { opacity: 1, y: 0, rotationX: 0, filter: 'blur(0px)', duration: D(0.75), ease: IN, stagger: D(0.07), delay: D(o.delay || 0) });
  // tachado diferido: la línea lima tacha después de leerse
  const tachs = e.querySelectorAll('s.tach');
  if (tachs.length) twf(tachs, { '--r': '102%' }, { '--r': '-2%', duration: D(0.5), ease: IN, delay: D(1.0 + (o.delay || 0)), stagger: D(0.2) });
  return e;
}
export function sub(html, o = {}) {
  const e = h('div', 'sub', html); pos(e, o); poner(o.id || 'sub', e);
  twf(e, { opacity: 0, y: 30, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: D(0.7), ease: IN, delay: D(o.delay ?? 0.3) });
  return e;
}

/* ---------- cifra que se decodifica ---------- */
const CH = '0123456789#%/<>';
export function dato(id, o) {
  const e = h('div', 'dato' + (o.chico ? ' chico' : ''), `<div class="v"><span class="num"></span>${o.suf ? `<em>${o.suf}</em>` : ''}</div><div class="l">${o.l || ''}</div>`);
  pos(e, o); poner(id, e);
  const num = e.querySelector('.num'); const desde = o.desde ?? 0, hasta = o.v, dec = o.dec ?? 0;
  const fmt = (x) => (o.pre || '') + x.toLocaleString('es-CO', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  if (R.rapido) { num.textContent = fmt(hasta); return e; }
  entra3D(e, 0.8);
  const p = { v: desde }, final = fmt(hasta);
  gsap.to(p, { v: hasta, duration: o.dur ?? 1.4, ease: 'expo.out', delay: o.delay || 0.1, onUpdate: () => {
    const s = fmt(p.v); const fij = Math.floor((p.v - desde) / ((hasta - desde) || 1) * s.length);
    num.textContent = s.split('').map((c, i) => (i < fij || /[.,\s%]/.test(c) ? c : CH[(Math.random() * CH.length) | 0])).join('');
  }, onComplete: () => { num.textContent = final; } });
  return e;
}

/* ---------- tarjeta de vidrio ---------- */
export function tarjeta(id, o) {
  const e = h('div', 'vid tarjeta' + (o.cls ? ' ' + o.cls : ''), `${o.img ? `<img class="ico" src="${o.img}" alt="">` : ''}${o.k ? `<div class="k">${o.k}</div>` : ''}<div class="t">${o.t || ''}</div>${o.d ? `<div class="d">${o.d}</div>` : ''}`);
  pos(e, o); if (o.rz) e.style.rotate = o.rz + 'deg'; poner(id, e); entra3D(e, 0.85, { delay: D(o.delay || 0) });
  return e;
}
export function marcar(id, cls, on = true) { const e = els.get(id); if (e) e.classList.toggle(cls, on); }

/* ---------- lista numerada ---------- */
export function lista(id, o) {
  const e = h('div', 'lista'); pos(e, o); poner(id, e);
  o.items.forEach((t, i) => agregarItem(id, t, i, o.n ? o.n[i] : String(i + 1).padStart(2, '0'), (o.delay || 0) + i * 0.12));
  return e;
}
export function agregarItem(id, t, i, n, delay = 0) {
  const e = els.get(id); if (!e) return;
  const it = h('div', 'it', `<span class="n">${n ?? String(i + 1).padStart(2, '0')}</span><span class="x">${t}</span>`); e.appendChild(it);
  twf(it, { opacity: 0, x: -60, rotationY: 50, filter: 'blur(10px)' }, { opacity: 1, x: 0, rotationY: 0, filter: 'blur(0px)', duration: D(0.7), ease: IN, delay: D(delay) });
}

/* ---------- foto / video con marco técnico y entrada 3D ---------- */
export function foto(id, o) {
  const media = o.video ? `<video src="${o.src}" muted loop autoplay playsinline></video>` : `<img src="${o.src}" alt="">`;
  const e = h('figure', 'foto', media + (o.cap ? `<figcaption>${o.cap}</figcaption>` : '')); e.style.margin = '0';
  pos(e, o); poner(id, e);
  twf(e, { opacity: 0, rotationY: o.desde === 'izq' ? 75 : -75, rotationX: 20, z: -600, x: o.desde === 'izq' ? -200 : 200 }, { opacity: 1, rotationY: o.ry ?? -8, rotationX: o.rx ?? 4, z: 0, x: 0, duration: D(1.1), ease: IN, delay: D(o.delay || 0) });
  gsap.to(e, { rotationY: (o.ry ?? -8) + 6, duration: 5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.2 });
  return e;
}
/** secuencia cuadro a cuadro (stop-motion) dentro de una foto existente */
export function flipbook(id, srcs, paso = 0.9, caps = []) {
  const e = els.get(id); if (!e) return; const img = e.querySelector('img'), cap = e.querySelector('figcaption');
  if (R.rapido) { img.src = srcs[srcs.length - 1]; if (cap && caps.length) cap.innerHTML = caps[caps.length - 1]; return; }
  const tl = gsap.timeline();
  srcs.forEach((s, i) => tl.call(() => { img.src = s; if (cap && caps[i]) cap.innerHTML = caps[i]; gsap.fromTo(e, { scale: 1.035, rotationZ: (Math.random() - .5) * 2 }, { scale: 1, rotationZ: 0, duration: 0.25, ease: 'steps(3)' }); }, null, i * paso));
}

/* ---------- comparación sin / con propuesta ---------- */
export function par(id, o) {
  const lado = (k, x) => `<div class="lado ${k}"><div class="cab"><span>${k === 'sin' ? 'Sin propuesta' : 'Con propuesta'}</span><span>${x.t || ''}</span></div><div class="vista">${x.video ? `<video src="${x.src}" muted loop autoplay playsinline></video>` : x.src ? `<img src="${x.src}" alt="">` : ''}${x.html || ''}<span class="mono" style="position:absolute;right:10px;top:10px;font-size:10px;color:#b9bcb3;background:rgba(8,9,12,.7);padding:4px 8px">captura del simulador</span><div class="met"></div></div></div>`;
  const e = h('div', 'par', lado('sin', o.izq) + lado('con', o.der)); poner(id, e);
  const [a, b] = e.querySelectorAll('.lado');
  twf(a, { opacity: 0, rotationY: 70, x: -300, z: -500 }, { opacity: 1, rotationY: 8, x: 0, z: 0, duration: D(1.1), ease: IN });
  twf(b, { opacity: 0, rotationY: -70, x: 300, z: -500 }, { opacity: 1, rotationY: -8, x: 0, z: 0, duration: D(1.1), ease: IN, delay: D(0.15) });
  return e;
}
/** filas de indicadores: se registran (escaneo), sin valores inventados */
export function filas(id, nombres) {
  const e = els.get(id); if (!e) return;
  e.querySelectorAll('.met').forEach((m, lado) => {
    nombres.forEach((n, i) => {
      const f = h('div', 'fila', `<span>${n}</span><span class="barra"><i></i></span>`); m.appendChild(f);
      twf(f, { opacity: 0, x: lado ? 40 : -40 }, { opacity: 1, x: 0, duration: D(0.5), ease: IN, delay: D(i * 0.12) });
      const bar = f.querySelector('i');
      gsap.fromTo(bar, { width: '0%', left: '0%' }, { width: '35%', left: '65%', duration: 1.6, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: i * 0.2 });
    });
  });
}

/* ---------- reloj del simulador ---------- */
export function reloj(id, o = {}) {
  const e = h('div', 'reloj vid', `<div class="k mono" style="color:var(--lima)">tick = 1 semana</div><div class="tick"><span class="sem">0</span><em>semanas</em></div><div class="mono" style="color:#b9bcb3">horizonte · 15 años = 780 semanas</div><div class="mono hora" style="color:var(--lavanda)">06:00</div>`);
  pos(e, o); poner(id, e); entra3D(e);
  if (R.rapido) { e.querySelector('.sem').textContent = '780'; return e; }
  const p = { s: 0 }; gsap.to(p, { s: 780, duration: 6, ease: 'power1.inOut', onUpdate: () => { e.querySelector('.sem').textContent = Math.round(p.s); const hh = Math.floor((p.s * 7) % 24); e.querySelector('.hora').textContent = String(hh).padStart(2, '0') + ':00 · ' + (hh < 6 || hh > 18 ? 'noche' : 'día'); } });
  return e;
}

/* ---------- GAME OVER ---------- */
export function gameover(id = 'go') {
  const e = h('div', 'gameover', 'GAME OVER'); poner(id, e);
  if (R.rapido) return e;
  const tl = gsap.timeline();
  tl.fromTo(e, { opacity: 0, scale: 1.6, filter: 'blur(20px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'expo.out' });
  tl.to(e, { x: () => (Math.random() - .5) * 24, skewX: () => (Math.random() - .5) * 14, duration: 0.08, repeat: 9, yoyo: true, ease: 'steps(1)' }, '<0.2');
  tl.to(e, { x: 0, skewX: 0, duration: 0.1 });
  e._flota = gsap.to(e, { textShadow: '8px 0 0 rgba(199,255,39,.7), -8px 0 0 rgba(169,155,203,.7)', duration: 0.3, repeat: -1, yoyo: true, ease: 'steps(2)', delay: 1.2 });
  return e;
}

/* ---------- HTML libre con entrada 3D ---------- */
export function bloque(id, html, o = {}) { const e = h('div', o.cls || '', html); e.style.position = 'absolute'; pos(e, o); poner(id, e); entra3D(e, 0.85, { delay: D(o.delay || 0) }); return e; }

/* ---------- etiquetas ancladas a puntos del mundo ---------- */
export function et(id, o) {
  quitarEt(id, true);
  const e = h('div', 'et ' + (o.cls || ''), `<i class="p"></i><div class="c"><b>${o.t}</b>${o.s ? `<small>${o.s}</small>` : ''}</div>`);
  if (o.c) e.style.setProperty('--c', o.c);
  document.getElementById('etiquetas').appendChild(e);
  W.et.set(id, { e, p: new THREE.Vector3(...o.p), obj: o.obj });
  twf(e.querySelector('.c'), { opacity: 0, x: -30, clipPath: 'inset(0 100% 0 0)' }, { opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)', duration: D(0.6), ease: IN, delay: D(o.delay || 0) });
  twf(e.querySelector('.p'), { scale: 0 }, { scale: 1, duration: D(0.4), ease: 'back.out(3)', delay: D(o.delay || 0) });
  return e;
}
export function quitarEt(id, inm = false) { const x = W.et.get(id); if (!x) return; W.et.delete(id); if (inm || R.rapido) return x.e.remove(); gsap.to(x.e, { opacity: 0, duration: 0.3, onComplete: () => x.e.remove() }); }
export function quitarEts() { [...W.et.keys()].forEach((k) => quitarEt(k)); }
const v3 = new THREE.Vector3();
export function proyectarEts() {
  W.et.forEach(({ e, p, obj }) => {
    v3.copy(p); if (obj) obj.getWorldPosition(v3);
    v3.project(W.cam); const vis = v3.z < 1 && Math.abs(v3.x) < 1.1 && Math.abs(v3.y) < 1.1;
    e.style.display = vis ? '' : 'none';
    e.style.transform = `translate(${(v3.x * 0.5 + 0.5) * innerWidth}px, ${(-v3.y * 0.5 + 0.5) * innerHeight}px)`;
  });
}

/* ---------- matriz de adyacencia (fila = origen, columna = efecto) ---------- */
export function matriz(id, o) {
  const ks = o.nodos, n = ks.length;
  const cab = `<div class="mx-c h"></div>${ks.map((k) => `<div class="mx-c h" style="color:${o.colores[k]}">${k}</div>`).join('')}<div class="mx-c h g">k<sub>out</sub></div>`;
  const filas = ks.map((a) => `<div class="mx-c h" style="color:${o.colores[a]}">${a}</div>${ks.map((b) => `<div class="mx-c" data-c="${a}${b}">${a === b ? '·' : ''}</div>`).join('')}<div class="mx-c g" data-out="${a}">0</div>`).join('');
  const pie = `<div class="mx-c h g">k<sub>in</sub></div>${ks.map((b) => `<div class="mx-c g" data-in="${b}">0</div>`).join('')}<div class="mx-c g"></div>`;
  const e = document.createElement('div'); e.className = 'vid matriz';
  e.innerHTML = `<div class="k mono">Matriz de adyacencia · fila = origen → columna = efecto</div><div class="mx" style="grid-template-columns:repeat(${n + 2},1fr)">${cab}${filas}${pie}</div><div class="mx-ref">${ks.map((k) => `<span><b style="color:${o.colores[k]}">${k}</b> ${o.nombres[k]}</span>`).join('')}</div>`;
  e.style.position = 'absolute'; ['left', 'top', 'right', 'bottom', 'width'].forEach((k) => { if (o[k] !== undefined) e.style[k] = typeof o[k] === 'number' ? o[k] + 'vw' : o[k]; });
  poner(id, e); entra3D(e, 0.8);
  return e;
}
export function matrizMarcar(id, a, b) {
  const e = els.get(id); if (!e) return; const c = e.querySelector(`[data-c="${a}${b}"]`); if (!c || c.classList.contains('on')) return;
  c.classList.add('on'); c.textContent = '1';
  const inc = (sel) => { const x = e.querySelector(sel); x.textContent = String(+x.textContent + 1); twf(x, { scale: 1.6, color: '#C7FF27' }, { scale: 1, duration: D(0.4), ease: 'steps(4)' }); };
  inc(`[data-out="${a}"]`); inc(`[data-in="${b}"]`);
  twf(c, { scale: 0, rotation: 90 }, { scale: 1, rotation: 0, duration: D(0.45), ease: 'back.out(3)', delay: D(0.6) });
}
export function resaltarGrado(id, k) { const e = els.get(id); if (!e) return; e.querySelectorAll(`[data-out="${k}"],[data-in="${k}"],[data-c^="${k}"],[data-c$="${k}"]`).forEach((x) => x.classList.add('hl')); }

/* ---------- tabla de métricas de red ---------- */
export function metricasRed(id, o) {
  const e = document.createElement('div'); e.className = 'vid metr';
  e.innerHTML = `<div class="k mono">${o.titulo}</div>${o.resumen ? `<div class="metr-res">${o.resumen.map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join('')}</div>` : ''}${o.filas ? `<table><thead><tr>${o.cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${o.filas.map((f) => `<tr>${f.map((x, i) => `<td${i ? ' class="n"' : ''}>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}${o.nota ? `<div class="metr-nota">${o.nota}</div>` : ''}`;
  e.style.position = 'absolute'; ['left', 'top', 'right', 'bottom', 'width'].forEach((k) => { if (o[k] !== undefined) e.style[k] = typeof o[k] === 'number' ? o[k] + 'vw' : o[k]; });
  poner(id, e); entra3D(e, 0.8, { delay: D(o.delay || 0) });
  twf(e.querySelectorAll('tbody tr, .metr-res > div'), { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: D(0.4), ease: 'steps(5)', stagger: D(0.1), delay: D(0.4 + (o.delay || 0)) });
  return e;
}
