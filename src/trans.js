// Transiciones 3D entre capítulos. Se fotografía el cuadro actual (canvas + capa DOM ya vaciada),
// se cambia la escena por detrás y la foto se rompe/pliega en 3D para revelar la nueva.
import gsap from 'gsap';
import { W } from './mundo.js';

const T = () => document.getElementById('trans');
function foto() {
  W.r.render(W.scene, W.cam);
  return W.r.domElement.toDataURL('image/jpeg', 0.86);
}
function pieza(url, x, y, w, h) {
  const p = document.createElement('div'); p.className = 'pz';
  Object.assign(p.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px', backgroundImage: `url(${url})`, backgroundSize: `${innerWidth}px ${innerHeight}px`, backgroundPosition: `${-x}px ${-y}px` });
  T().appendChild(p); return p;
}
const limpiar = () => { T().innerHTML = ''; };

export const TIPOS = {
  /** papel que se pliega por la mitad como un libro que se cierra */
  pliegue(url) {
    const W2 = innerWidth / 2, H = innerHeight;
    const a = pieza(url, 0, 0, W2, H), b = pieza(url, W2, 0, W2, H);
    a.style.transformOrigin = '0% 50%'; b.style.transformOrigin = '100% 50%';
    const tl = gsap.timeline();
    tl.to(a, { rotationY: 105, '--sombra': 1, duration: 1.0, ease: 'expo.in' }, 0).to(b, { rotationY: -105, '--sombra': 1, duration: 1.0, ease: 'expo.in' }, 0.08);
    return tl;
  },
  /** persiana: tiras verticales que giran en 3D en cascada */
  persiana(url) {
    const n = 16, w = Math.ceil(innerWidth / n), tl = gsap.timeline();
    for (let i = 0; i < n; i++) { const p = pieza(url, i * w, 0, w + 1, innerHeight); p.style.transformOrigin = '0% 50%'; tl.to(p, { rotationY: -92, '--sombra': 1, duration: 0.55, ease: 'power3.in' }, i * 0.04); }
    return tl;
  },
  /** escalera: franjas horizontales que salen alternadas con inclinación */
  escalera(url) {
    const n = 9, h = Math.ceil(innerHeight / n), tl = gsap.timeline();
    for (let i = 0; i < n; i++) { const p = pieza(url, 0, i * h, innerWidth, h + 1); tl.to(p, { x: (i % 2 ? 1 : -1) * innerWidth * 1.1, rotationX: (i % 2 ? 40 : -40), z: -300, duration: 0.8, ease: 'expo.in' }, Math.abs(i - n / 2) * 0.05); }
    return tl;
  },
  /** recorte: la imagen se parte en trozos de papel que caen (stop-motion) */
  recorte(url) {
    const cx = 9, cy = 5, w = Math.ceil(innerWidth / cx), h = Math.ceil(innerHeight / cy), tl = gsap.timeline();
    for (let j = 0; j < cy; j++) for (let i = 0; i < cx; i++) {
      const p = pieza(url, i * w, j * h, w + 1, h + 1);
      tl.to(p, { y: innerHeight * (1.2 + Math.random() * 0.4), x: (Math.random() - .5) * 300, rotationZ: (Math.random() - .5) * 120, rotationX: Math.random() * 160, duration: 0.9 + Math.random() * 0.3, ease: 'power2.in' }, (cy - j) * 0.06 + Math.random() * 0.25);
    }
    return tl;
  },
  /** cubo: el cuadro actual gira como cara de un cubo */
  cubo(url) {
    const p = pieza(url, 0, 0, innerWidth, innerHeight); p.style.transformOrigin = '100% 50%';
    const tl = gsap.timeline();
    tl.to(p, { rotationY: -90, x: -innerWidth * 0.5, z: -innerWidth * 0.5, '--sombra': 1, duration: 1.0, ease: 'expo.inOut' });
    gsap.fromTo('#mundo, #escena', { rotationY: 60, x: innerWidth * 0.4, transformPerspective: 1600 }, { rotationY: 0, x: 0, duration: 1.0, ease: 'expo.inOut', clearProps: 'transform' });
    return tl;
  },
  /** esquina urbia ⌝: crece desde arriba a la derecha y se lleva el cuadro */
  esquina(url) {
    const p = pieza(url, 0, 0, innerWidth, innerHeight);
    const m = document.createElement('div'); m.className = 'marco-esq'; T().appendChild(m);
    const tl = gsap.timeline();
    tl.fromTo(m, { right: '8vw', top: '10vh', width: 40, height: 40 }, { right: '1.5vw', top: '2vh', width: innerWidth * 0.97, height: innerHeight * 0.96, duration: 0.6, ease: 'expo.in' })
      .to(p, { clipPath: 'inset(0% 0% 100% 100%)', duration: 0.7, ease: 'expo.inOut' }, 0.35)
      .to(m, { opacity: 0, duration: 0.3 }, '>-0.1');
    return tl;
  },
  /** vuelo: la cámara atraviesa el cuadro (zoom + desenfoque) */
  vuelo(url) {
    const p = pieza(url, 0, 0, innerWidth, innerHeight);
    const tl = gsap.timeline();
    tl.to(p, { scale: 3.2, opacity: 0, filter: 'blur(18px)', duration: 0.9, ease: 'expo.in' });
    gsap.fromTo('#mundo', { scale: 0.7, filter: 'blur(14px)' }, { scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'expo.out', delay: 0.35, clearProps: 'transform,filter' });
    return tl;
  },
};

/** ejecuta la transición: cambiar() monta la escena nueva por detrás de la foto */
export async function transicion(tipo, cambiar) {
  const url = foto();
  limpiar();
  const tl = gsap.timeline({ paused: true });
  cambiar();
  const fx = (TIPOS[tipo] || TIPOS.pliegue)(url);
  // destello lima de 2 cuadros al cortar
  const f = document.createElement('div'); Object.assign(f.style, { position: 'absolute', inset: 0, background: 'rgba(199,255,39,.18)', pointerEvents: 'none' }); T().appendChild(f);
  gsap.to(f, { opacity: 0, duration: 0.18, ease: 'steps(2)', delay: 0.05 });
  await fx.then?.();
  limpiar();
}
