// Prepara los recursos realistas en versión liviana (mismo marco que edif.bin: x − cx, −(y − cy)).
//   node tools/realismo_build.mjs
// Fuentes: simulador (anasoficasca-code/simulador) data3d/trees.json y parques.json; centro de red-de-problemas/nube.bin.
import fs from 'fs';
import path from 'path';
const DOC = path.resolve('..');
const SIM = path.join(DOC, 'simulador-kennedy-src', 'data3d');
const nube = fs.readFileSync(path.join(DOC, 'red-de-problemas', 'nube.bin'));
const cx = nube.readFloatLE(8), cy = nube.readFloatLE(12);
const rel = (x, y) => [x - cx, -(y - cy)];

// árboles: 'ARB1' + n + registros de 6 bytes (x*2 int16, z*2 int16, altura*10 uint8, especie uint8)
const T = JSON.parse(fs.readFileSync(path.join(SIM, 'trees.json'), 'utf8')).t;
const buf = Buffer.alloc(8 + T.length * 6); buf.write('ARB1', 0); let n = 0;
for (const [x, y, h, sp] of T) {
  const [a, b] = rel(x, y); if (Math.abs(a) > 16000 || Math.abs(b) > 16000) continue;
  const o = 8 + n * 6; buf.writeInt16LE(Math.round(a * 2), o); buf.writeInt16LE(Math.round(b * 2), o + 2);
  buf.writeUInt8(Math.min(255, Math.round((h || 4) * 10)), o + 4); buf.writeUInt8((sp || 0) % 256, o + 5); n++;
}
buf.writeUInt32LE(n, 4); fs.writeFileSync('public/datos/arboles.bin', buf.subarray(0, 8 + n * 6));
console.log('árboles', n);

// parques: polígonos con 1 m de precisión, sin vértices a menos de 3 m
const Pq = JSON.parse(fs.readFileSync(path.join(SIM, 'parques.json'), 'utf8'));
const out = Pq.map((p) => {
  const pts = []; for (const [x, y] of p.pts) { const q = rel(x, y).map(Math.round); const u = pts[pts.length - 1]; if (!u || Math.hypot(u[0] - q[0], u[1] - q[1]) >= 3) pts.push(q); }
  return pts.length >= 3 ? { t: p.tipo, p: pts } : null;
}).filter(Boolean);
fs.writeFileSync('public/datos/parques.json', JSON.stringify({ fuente: 'Parques de Bogotá (IDRD) vía simulador de Kennedy', parques: out }));
console.log('parques', out.length);
