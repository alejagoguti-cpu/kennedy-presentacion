// Guion de la sustentación: cada frase (beat) = un clic = una animación sincronizada con lo que se dice.
// X = API (ui.js + mundo.js + main.js). Todas las cifras son las del guion de las autoras.
const I = (n) => './img/' + n;
const E = (n) => './esp/' + n + '.png';
const V = (n) => './vid/' + n;
const P = (k, X, extra = {}) => X.et('p' + k, { p: [X.W.red6Suelo?.[k]?.x ?? 0, 300, X.W.red6Suelo?.[k]?.z ?? 0], t: X.NOM_P[k], c: X.COL_P[k], cls: 'nodo', ...extra });
const nodoEt = (X, k, d = 0) => X.et('n' + k, { p: [0, 0, 0], obj: X.W.red6.nod[k], t: X.NOM_P[k], c: X.COL_P[k], cls: 'nodo', delay: d });
const lugar = (X, id, p, t, s, d = 0, y = 120) => X.et(id, { p: [p[0], y, p[1]], t, s, delay: d });

export const CAPITULOS = [
  /* ===================================================================== 00 PORTADA */
  {
    n: '00', nombre: 'Kennedy', cam: 'portada', tr: 'vuelo',
    base: (X) => { X.W.capas.edif.userData.u.uSube.value = 0; },
    beats: [
      { t: '[Portada] Kennedy: modelamiento dinámico y simulación.', a: (X) => {
        X.sube(1, X.LUG.corabastos, 5); X.capa('agua'); X.capa('vias-prin');
        X.titulo('Kennedy: *modelamiento dinámico* y simulación', { kick: 'Sustentación · Modelamiento dinámico y simulación', top: '58vh', width: 70 });
        X.cam('alto', 9);
      } },
    ],
  },

  /* ===================================================================== 01 INTRODUCCIÓN */
  {
    n: '01', nombre: 'Introducción', cam: 'alto', tr: 'pliegue',
    base: (X) => { X.capa('agua', true, 0); },
    beats: [
      { t: 'La modernización del abastecimiento, el crecimiento urbano y la transformación del suelo buscaban responder a necesidades diferentes,', a: (X) => {
        X.tarjeta('c1', { k: '01 · abastecimiento', t: 'Modernizar el abasto', left: 8, top: '22vh', rz: -3 });
        X.tarjeta('c2', { k: '02 · ciudad', t: 'Crecimiento urbano', left: 38, top: '48vh', rz: 2, delay: 0.25 });
        X.tarjeta('c3', { k: '03 · suelo', t: 'Transformar el suelo', left: 68, top: '24vh', rz: -2, delay: 0.5 });
      } },
      { t: 'pero sus efectos terminaron entrelazándose,', a: (X) => {
        ['c1', 'c2', 'c3'].forEach((id, i) => X.tw(X.el(id), { left: (34 + i * 4) + 'vw', top: (34 + i * 5) + 'vh', rotation: (i - 1) * 9, duration: X.D(1.2), ease: 'steps(10)' }));
        X.capa('flujos'); X.cam('cora', 3);
      } },
      { t: 'intensificando la dependencia alimentaria, la acumulación de residuos y la degradación de los ecosistemas.', a: (X) => {
        X.limpiar(); X.titulo('*dependencia* alimentaria · *residuos* · ecosistemas *degradados*', { top: '14vh', width: 60 });
        X.aparecer('pA'); X.aparecer('pE', 1, 2.4); X.foco(X.LUG.corabastos, 1500, '#E36C4B');
      } },
      { t: 'Problemas que no fueron consecuencia de una sola decisión, sino de múltiples dinámicas que se reforzaron entre sí.', a: (X) => {
        X.limpiar(); X.sinFoco();
        X.titulo('No fue ~una sola decisión~: *múltiples dinámicas* que se refuerzan', { top: '12vh', width: 44, cls: 'chico' });
        X.foto('axo', { src: I('axo_1956.jpg'), left: 50, top: '20vh', width: 42, height: '52vh', cap: '<b>1956</b> · Kennedy antes de Kennedy' });
        X.flipbook('axo', [I('axo_1956.jpg'), I('axo_1972.jpg'), I('axo_1988.jpg'), I('axo_2024.jpg')], 1.1, ['<b>1956</b> · suelo rural', '<b>1972</b> · llega Corabastos', '<b>1988</b> · la ciudad crece', '<b>2024</b> · hoy']);
      } },
      { t: 'Precisamente, estas dinámicas y las relaciones son el punto central del proyecto de Modelamiento Dinámico y Simulación.', a: (X) => {
        X.limpiar(); X.titulo('Las *relaciones* son el centro del proyecto', { cls: 'centro' });
        X.capa('vias-prin'); X.cam('alto', 3); X.capa('flujos', false);
      } },
      { t: 'Su desarrollo comprende el análisis del POT de Bogotá, el diagnóstico y la formulación de los problemas de Kennedy,', a: (X) => {
        X.limpiar(); X.lista('fases', { left: 8, top: '22vh', items: ['Análisis del POT de Bogotá', 'Diagnóstico y formulación de los problemas de Kennedy'] });
        X.capa('red-pot'); X.cam('pot', 3);
      } },
      { t: 'la construcción de un modelo propio de ciudad y la exploración de sus posibles consecuencias mediante simulaciones.', a: (X) => {
        X.agregarItem('fases', 'Construcción de un modelo propio de ciudad', 2, '03');
        X.agregarItem('fases', 'Exploración de consecuencias mediante <span style="color:var(--lima)">simulaciones</span>', 3, '04', 0.25);
        X.capa('red-pot', false); X.capa('agentes'); X.cam('cora', 3);
      } },
    ],
  },

  /* ===================================================================== 02 POT */
  {
    n: '02', nombre: 'El POT y la ciudad como sistema complejo', cam: 'pot', tr: 'persiana',
    base: (X) => { X.capa('edif', true, 0); X.gris(0.7, 0); X.W.pot.planos.forEach((g) => (g.position.y = 0)); },
    beats: [
      { t: 'Como punto de partida, el Plan de Ordenamiento Territorial de Bogotá se reconstruyó como una red', a: (X) => {
        X.capa('red-pot');
        X.W.pot.nodos.forEach((m, i) => X.twf(m.scale, { x: 0.01, y: 0.01, z: 0.01 }, { x: m.userData.r, y: m.userData.r, z: m.userData.r, duration: X.D(0.5), ease: 'back.out(2)', delay: X.D(i * 0.025) }));
        X.titulo('El POT reconstruido como una *red*', { kick: '02 · Punto de partida', width: 40, cls: 'chico' });
      } },
      { t: 'a partir de los aportes de Albert-László Barabási, físico e investigador de la ciencia de redes.', a: (X) => {
        const M = X.W.pot.M;
        X.tarjeta('bar', { k: 'Ciencia de redes', t: 'Albert-László Barabási', d: 'Físico · la estructura se lee en los nodos y sus conexiones.', left: 7, top: '30vh' });
        X.metricasRed('met', { titulo: 'Métricas de la red · macromodelo del POT', right: '5vw', top: '16vh', resumen: [['nodos', M.n], ['aristas', M.m], ['grado medio', M.gradoMedio.toFixed(1).replace('.', ',')], ['densidad', M.densidad.toFixed(3).replace('.', ',')], ['diámetro', M.diametro], ['componentes', M.componentes]], nota: 'Red no dirigida · 8 capas temáticas · tensión de cada relación según el macromodelo.' });
      } },
      { t: 'Se identificaron los nodos centrales,', a: (X) => {
        X.quitar('bar');
        const N = X.W.pot.nodos;
        N.forEach((m) => { const k = m.userData.hub ? m.userData.r * 1.5 : m.userData.r * 0.6; X.tw(m.scale, { x: k, y: k, z: k, duration: X.D(0.9), ease: 'steps(8)' }); });
        const top = [...N].sort((a, b) => b.userData.grado - a.userData.grado).slice(0, 5);
        const corto = (s) => s.replace(/^[A-Z]+\d+ - /, '').replace(/\s*\(.*\)$/, '');
        X.metricasRed('met', { titulo: 'Nodos centrales · top 5 por grado', right: '5vw', top: '16vh', cols: ['nodo', 'grado k', 'intermediación'], filas: top.map((m) => [corto(m.userData.nombre), m.userData.grado, m.userData.inter.toFixed(3).replace('.', ',')]), nota: 'Grado = número de relaciones. Intermediación (Brandes, normalizada) = cuánto del camino más corto entre otros nodos pasa por este.' });
        top.slice(0, 3).forEach((m, i) => X.et('hub' + i, { p: [0, 0, 0], obj: m, t: corto(m.userData.nombre), s: 'k = ' + m.userData.grado, cls: 'nodo', delay: i * 0.2 }));
      } },
      { t: 'las relaciones de dependencia y las jerarquías que estructuran este modelo de ciudad.', a: (X) => {
        X.quitarEts(); X.quitar('met');
        X.despiece(520, 2); X.cam({ p: [0, 3700, 9800], o: [0, 2650, 0], nom: 'Despiece multicapa' }, 2.4);
        X.titulo('Arquitectura *multicapa*: dependencias y jerarquías', { kick: '02 · Estructura del plan', width: 38, cls: 'chico' });
        X.W.pot.planos.forEach((g, i) => X.et('capa' + i, { p: [0, 0, 0], obj: g.userData.ancla, t: X.CAPAS_POT[i][0], s: 'capa ' + (i + 1) + ' · ' + X.W.pot.nodos.filter((m) => m.userData.ci === i).length + ' nodos', c: X.CAPAS_POT[i][1], cls: 'nodo', delay: 0.6 + i * 0.12 }));
      } },
      { t: 'Esta representación se contrastó con el enfoque de Michael Batty, investigador del urbanismo computacional que estudia las ciudades como sistemas complejos.', a: (X) => {
        X.limpiar(); X.quitarEts(); X.despiece(0, 1.6);
        X.tarjeta('bat', { k: 'Urbanismo computacional', t: 'Michael Batty', d: 'La ciudad como sistema complejo: agentes, flujos y tiempo.', right: '7vw', top: '24vh' });
        X.capa('agentes'); X.gris(0, 1.5); X.cam({ p: [2600, 2300, 4800], o: [0, 700, 0], nom: 'Agentes sobre la ciudad' }, 2.6);
      } },
      { t: 'Se comprende que aunque el plan establece relaciones entre sus componentes, su representación no explica suficientemente', a: (X) => {
        X.limpiar(); X.titulo('El plan *relaciona*… pero ~no explica~', { width: 50 });
      } },
      { t: 'las interacciones entre agentes, los procesos de retroalimentación, las dinámicas emergentes', a: (X) => {
        X.lista('falta', { left: 8, top: '40vh', items: ['Interacciones entre agentes', 'Retroalimentación', 'Dinámicas emergentes'], n: ['↻', '↻', '↻'] });
        X.agentesVel(3);
      } },
      { t: 'ni cómo estas transforman y producen problemas a través del tiempo.', a: (X) => {
        X.dato('anio', { v: 2026, desde: 1972, l: 'problemas que se producen a través del tiempo', right: '7vw', top: '58vh', dur: 2.4 });
        X.capa('red-pot', false, 1.6); X.cam('alto', 3); X.foco(X.LUG.corabastos, 2600, '#E36C4B', 2.4);
      } },
    ],
  },

  /* ===================================================================== 03 INDICADORES */
  {
    n: '03', nombre: 'De los mapas a las dinámicas territoriales', cam: 'capas', tr: 'recorte',
    base: (X) => { X.gris(0.8, 0); },
    beats: [
      { t: 'Para comenzar a comprender Kennedy desde la complejidad, se cruzaron dieciocho capas de información satelital,', a: (X) => {
        X.capas18('apila'); X.dato('d18', { v: 18, l: 'capas de información satelital', left: 7, top: '22vh' });
      } },
      { t: 'a partir de las cuales se construyeron nueve índices territoriales.', a: (X) => {
        X.capas18('nueve'); X.dato('d9', { v: 9, l: 'índices territoriales', left: 7, top: '52vh' });
      } },
      { t: 'Entre ellos, el índice de concentración comercial y logística y el índice de soporte ecológico.', a: (X) => {
        X.limpiar(); X.capas18('fuera'); X.cam('alto', 2.4); X.gris(0.4);
        X.tarjeta('icl', { k: 'Índice 01', t: 'Concentración comercial y logística', left: 7, top: '24vh', cls: 'on' });
        X.tarjeta('ise', { k: 'Índice 02', t: 'Soporte ecológico', left: 7, top: '46vh', delay: 0.2 });
      } },
      { t: 'Mientras las actividades comerciales y logísticas se intensificaban alrededor de Corabastos,', a: (X) => {
        X.cam('cora', 2.6); X.foco(X.LUG.corabastos, 1400, '#E36C4B'); X.capa('flujos'); X.aparecer('pA');
        lugar(X, 'cora', X.LUG.corabastos, 'Corabastos', 'central mayorista', 0.8, 260);
      } },
      { t: 'el soporte ecológico presentaba discontinuidades y fragmentación de la cobertura vegetal.', a: (X) => {
        X.marcar('icl', 'on', false); X.marcar('ise', 'on'); X.quitarEt('cora');
        X.cam('humedal', 2.6); X.sinFoco(); X.capa('flujos', false); X.capa('agua'); X.corredor(0.35, 2); X.gris(0.75);
        X.titulo('*Fragmentación* de la cobertura vegetal', { right: '6vw', cls: 'der chico', top: '14vh' });
      } },
      { t: 'Al cruzar estos índices se pueden reconocer sectores donde coinciden diferentes presiones urbanas y ecológicas,', a: (X) => {
        X.limpiar(); X.cam('alto', 2.4); X.capa('flujos'); X.aparecer('pA'); X.foco(X.LUG.corabastos, 2200, '#E36C4B');
        X.titulo('Donde *coinciden* las presiones', { kick: '03 · Cruce de índices', width: 40, cls: 'chico' });
      } },
      { t: 'identificando relaciones espaciales que orientan el análisis de los problemas.', a: (X) => {
        lugar(X, 'cora', X.LUG.corabastos, 'Corabastos', 'presión comercial', 0); lugar(X, 'mp', X.LUG.mariapaz, 'María Paz', 'residuos', 0.2, 80); lugar(X, 'bv', X.LUG.bavaria, 'Bavaria', 'predio de 71 ha', 0.4);
      } },
    ],
  },

  /* ===================================================================== 04 FRAGMENTACIÓN */
  {
    n: '04', nombre: 'Los problemas de fondo', cam: 'alto', tr: 'pliegue',
    base: (X) => { X.capa('agua', true, 0); },
    beats: [
      { t: 'El análisis de estos índices permitió identificar diferentes problemas en Kennedy,', a: (X) => {
        ['A', 'B', 'C', 'D', 'E'].forEach((k, i) => setTimeout(() => X.aparecer('p' + k, 1, 1.2), X.R.rapido ? 0 : i * 250));
      } },
      { t: 'dando paso al estudio de sus causas más profundas y a comprender cómo convergen en un problema estructural más amplio: la fragmentación territorial.', a: (X) => {
        X.titulo('*Fragmentación* territorial', { cls: 'centro' }); X.gris(0.5);
        ['A', 'B', 'C', 'D', 'E'].forEach((k) => X.uTo('p' + k, 'uS', 40, 1.5, 'steps(8)'));
      } },
      { t: 'La hiperconcentración del mercado mayorista comienza por la inauguración de Corabastos en 1972 para mejorar la salubridad del abastecimiento,', a: (X) => {
        X.limpiar(); ['B', 'C', 'D', 'E'].forEach((k) => X.capa('p' + k, false));
        X.cam('cora', 2.6); X.foco(X.LUG.corabastos, 900, '#C7FF27'); X.capa('corabastos');
        X.dato('a72', { v: 1972, desde: 1956, l: 'se inaugura Corabastos', left: 7, top: '20vh', dur: 1.8 });
        X.foto('ax72', { src: I('axo_1972.jpg'), right: '6vw', top: '22vh', width: 34, height: '42vh', cap: '<b>1972</b> · Corabastos' });
      } },
      { t: 'a medida que se perdió producción agrícola local, aumentó la dependencia de otras regiones y se concentraron los viajes de carga.', a: (X) => {
        X.limpiar(); X.capa('flujos'); X.uTo('flujos', 'uV', 900, 1); X.uTo('flujos', 'uBase', 0.35, 1);
        X.foto('fp', { src: I('flujo_pico.jpg'), right: '6vw', top: '20vh', width: 38, height: '46vh', cap: '<b>simulador</b> · carga en hora pico' });
        X.lista('pc', { left: 7, top: '24vh', width: 40, items: ['Se pierde producción local', 'Dependencia de otras regiones', 'Se concentran los viajes de carga'], n: ['↓', '↑', '→'] });
      } },
      { t: 'El segundo es la saturación de residuos.', a: (X) => {
        X.limpiar(); X.capa('flujos', false); X.cam('mariapaz', 2.4); X.capa('corabastos', false);
        X.aparecer('pE'); X.foco(X.LUG.mariapaz, 900, '#F5F3EB');
        X.titulo('Saturación de *residuos*', { kick: '04 · Problema 02', width: 40 });
      } },
      { t: 'La concentración comercial incrementa la generación de desechos que, cuando superan la capacidad de recolección y tratamiento, se acumulan.', a: (X) => {
        X.uTo('pE', 'uS', 60, 3, 'steps(12)');
        X.bloque('cap', '<div class="mono" style="color:#b9bcb3;margin-bottom:8px">capacidad de recolección</div><div style="position:relative;width:26vw;height:18px;border:1px solid rgba(245,243,235,.3)"><i class="llen" style="position:absolute;left:0;top:0;bottom:0;width:0;background:#E36C4B"></i><i style="position:absolute;left:70%;top:-8px;bottom:-8px;width:2px;background:#C7FF27"></i></div>', { left: 7, top: '58vh' });
        X.tw(X.el('cap').querySelector('.llen'), { width: '100%', duration: X.D(3), ease: 'steps(12)', delay: X.D(0.6) });
      } },
      { t: 'A esto se suma la impermeabilización del suelo, que aumenta la escorrentía y el arrastre de contaminantes hacia los cuerpos de agua.', a: (X) => {
        X.limpiar(); X.cam('humedal', 2.6); X.gris(0.9); X.sinFoco();
        X.titulo('Suelo *impermeable* → escorrentía → agua', { width: 46, cls: 'chico' });
        X.tarjeta('lx', { img: E('lixiviados'), k: 'arrastre', t: 'Contaminantes hacia los humedales', right: '7vw', top: '52vh' });
      } },
      { t: 'Finalmente, la degradación del soporte ecológico está relacionada con la expansión urbana y la pérdida de vegetación, que fragmentan los hábitats', a: (X) => {
        X.limpiar(); X.capa('especies'); X.W.capas.edif.userData.u.uSube.value = 0.2; X.sube(1, [0, 0], 4);
        X.titulo('Expansión urbana que *fragmenta* hábitats', { width: 46, cls: 'chico' });
        X.gsap.delayedCall(X.R.rapido ? 0 : 2.6, () => X.capa('especies', false, 1.4));
      } },
    ],
  },

  /* ===================================================================== 05 RED DE SEIS PROBLEMAS */
  {
    n: '05', nombre: 'La red de los seis problemas', cam: 'red6', tr: 'cubo',
    base: (X) => { X.gris(0.85, 0); X.capa('red6', true, 0); Object.values(X.W.red6.nod).forEach((m) => m.scale.setScalar(0.01)); },
    beats: [
      { t: 'A partir de estas dinámicas identificamos seis problemas relacionados:', a: (X) => {
        Object.entries(X.W.red6.nod).forEach(([k, m], i) => { const s = m.userData.r; X.twf(m.scale, { x: 0.01, y: 0.01, z: 0.01 }, { x: s, y: s, z: s, duration: X.D(0.7), ease: 'back.out(2.2)', delay: X.D(i * 0.12) }); });
        X.dato('seis', { v: 6, l: 'problemas relacionados', left: 7, top: '20vh' });
      } },
      { t: 'la centralización de servicios, el crecimiento poblacional, la valorización del suelo,', a: (X) => { X.quitar('seis'); ['F', 'B', 'C'].forEach((k, i) => nodoEt(X, k, i * 0.35)); } },
      { t: 'la especulación inmobiliaria, la dependencia de alimentos externos y la gestión de residuos sólidos.', a: (X) => { ['D', 'A', 'E'].forEach((k, i) => nodoEt(X, k, i * 0.35)); } },
      { t: 'Al representarlos como una red, encontramos que el crecimiento poblacional aumenta la demanda de alimentos y servicios,', a: (X) => { X.matriz('adj', { nodos: ['F', 'A', 'B', 'C', 'D', 'E'], colores: X.COL_P, nombres: X.NOM_P, right: '2vw', top: '12vh' }); X.arista(0); X.gsap.delayedCall(X.R.rapido ? 0 : 0.6, () => X.arista(1)); X.nodo6('B', 1.25); } },
      { t: 'cuya concentración influye en la valorización y especulación del suelo.', a: (X) => { X.arista(2); X.gsap.delayedCall(X.R.rapido ? 0 : 0.5, () => X.arista(3)); X.gsap.delayedCall(X.R.rapido ? 0 : 1, () => X.arista(4)); } },
      { t: 'A su vez, la dependencia alimentaria concentra el abastecimiento en Corabastos, aumentando la generación de residuos.', a: (X) => { X.arista(5); X.gsap.delayedCall(X.R.rapido ? 0 : 0.6, () => X.arista(6)); X.gsap.delayedCall(X.R.rapido ? 0 : 1.2, () => X.arista(7)); } },
      { t: 'Al ser la centralización de servicios uno de los nodos con mayor número de conexiones, se convierte en un problema prioritario para nuestra propuesta,', a: (X) => {
        X.nodo6('F', 1.45, 1); ['A', 'B', 'C', 'D', 'E'].forEach((k) => X.nodo6(k, 0.75));
        X.dato('cx', { v: 5, l: 'conexiones (k_in 2 + k_out 3) · nodo prioritario', left: 7, top: '20vh' }); X.resaltarGrado('adj', 'F');
      } },
      { t: 'porque su relación con los demás permite identificar dónde una intervención podría generar mayores transformaciones.', a: (X) => {
        X.quitar('cx'); X.titulo('Intervenir donde la red *más se transforma*', { top: '12vh', width: 44, cls: 'chico' });
        X.W.red6.tubos.forEach((t, i) => { if (t.userData.a === 'F' || t.userData.b === 'F') X.twf(t.material.color, { r: 1, g: 1, b: 1 }, { r: 0.78, g: 1, b: 0.15, duration: X.D(0.6), repeat: X.R.rapido ? 0 : 3, yoyo: true, ease: 'steps(3)', delay: X.D(i * 0.1) }); });
      } },
      { t: 'Mediante la conectografía localizamos los problemas en Kennedy,', a: (X) => {
        X.limpiar(); X.quitarEts(); X.aSuelo(true); X.cam('mapa', 2.6); X.gris(0.6);
        X.titulo('*Conectografía*', { kick: '05 · Localizar los problemas', width: 40 });
      } },
      { t: 'identificando dónde se concentran las actividades comerciales, la población, la valorización del suelo y los residuos.', a: (X) => {
        ['F', 'B', 'C', 'E'].forEach((k, i) => { X.gsap.delayedCall(X.R.rapido ? 0 : i * 0.5, () => { X.aparecer('p' + k, 1, 1.2); }); });
        ['F', 'B', 'C', 'E'].forEach((k, i) => X.et('l' + k, { p: [X.W.red6Suelo[k].x, 200, X.W.red6Suelo[k].z], t: X.NOM_P[k], c: X.COL_P[k], cls: 'nodo', delay: i * 0.5 }));
      } },
      { t: 'Esto nos permitió reconocer dónde se manifiestan y establecer criterios de intervención a partir de sus indicadores.', a: (X) => {
        X.limpiar(); X.titulo('De dónde se manifiestan → *criterios de intervención*', { top: '12vh', width: 50, cls: 'chico' });
      } },
    ],
  },

  /* ===================================================================== 06 CRITERIOS */
  {
    n: '06', nombre: 'Del diagnóstico a los criterios de diseño', cam: 'cora', tr: 'esquina',
    base: (X) => { X.gris(0.6, 0); X.capa('agua', true, 0); },
    beats: [
      { t: 'Corabastos y Las Flores concentran el 97 % del volumen mayorista registrado en Bogotá.', a: (X) => {
        X.capa('corabastos'); X.foco(X.LUG.corabastos, 900); X.dato('d97', { v: 97, suf: '%', l: 'del volumen mayorista de Bogotá · Corabastos y Las Flores', left: 7, top: '18vh' });
        lugar(X, 'cora', X.LUG.corabastos, 'Corabastos', 'central mayorista', 0.3, 260); lugar(X, 'fl', X.LUG.flores, 'Plaza Las Flores', 'plaza distrital', 0.6, 160);
      } },
      { t: 'Para evaluar la accesibilidad a los mercados, tomamos quince minutos como tiempo de referencia.', a: (X) => {
        X.limpiar(); X.quitarEts(); X.cam('alto', 2.4); X.capa('iso'); X.dato('d15', { v: 15, suf: 'min', l: 'tiempo de referencia para llegar a un mercado', left: 7, top: '18vh' });
      } },
      { t: 'Bajo este criterio, la cobertura estimada es del 28 %.', a: (X) => {
        X.dato('d28', { v: 28, suf: '%', l: 'cobertura estimada actual', left: 7, top: '50vh' });
      } },
      { t: 'Por eso, nuestro criterio de diseño es aumentar esta cobertura al 75 %, mediante una red de mercados barriales distribuidos.', a: (X) => {
        X.quitar('d15'); X.dato('d28', { v: 75, desde: 28, suf: '%', l: 'criterio de diseño · red de mercados barriales distribuidos', left: 7, top: '50vh', dur: 2.2 });
        X.mercados(true); X.capa('iso', false); X.bloque('esq', '<span class="mono" style="color:#b9bcb3">esquema de la red distribuida · un nodo por UPZ</span>', { right: '6vw', bottom: '8vh' });
      } },
      { t: 'En cuanto al crecimiento poblacional, Patio Bonito registra 435 habitantes por hectárea, frente a 90 en Tintal Norte.', a: (X) => {
        X.limpiar(); X.mercados(false); X.cam('oeste', 2.6); X.capa('upz'); X.upzAlto(true); X.capa('edif', false);
        X.dato('pb', { v: 435, l: 'hab/ha · Patio Bonito', left: 7, top: '18vh', chico: true }); X.dato('tn', { v: 90, l: 'hab/ha · Tintal Norte', left: 7, top: '46vh', chico: true, delay: 0.6 });
        X.et('upb', { p: [X.LUG.patio[0], 700, X.LUG.patio[1]], t: 'Patio Bonito', s: '435 hab/ha' }); X.et('utn', { p: [X.LUG.tintal[0], 320, X.LUG.tintal[1]], t: 'Tintal Norte', s: '90 hab/ha', delay: 0.6 });
      } },
      { t: 'El criterio no consiste en igualar estas densidades, sino en distribuir servicios de acuerdo con la concentración poblacional y los déficits de cobertura.', a: (X) => {
        X.limpiar(); X.quitarEts(); X.titulo('No ~igualar densidades~: *distribuir servicios* según la demanda', { width: 48, cls: 'chico' });
        X.mercados(true, 0.6);
      } },
      { t: 'En valorización del suelo, el valor catastral de Kennedy aumentó un 33,4 % entre 2022 y 2026.', a: (X) => {
        X.limpiar(); X.mercados(false); X.upzAlto(false); X.capa('upz', false, 1.2); X.capa('edif', true, 0.2); X.cam('alto', 2.4);
        X.foco([0, 0], 5200, '#A99BCB', 2); X.aparecer('pC');
        X.dato('d33', { v: 33.4, dec: 1, suf: '%', l: 'aumento del valor catastral · 2022–2026', left: 7, top: '18vh' });
      } },
      { t: 'Actualmente se valora por el acceso a servicios y transporte, pero nuestro modelo ecocéntrico propone valorarlo por su biodiversidad, interacciones bióticas y conectividad ecológica.', a: (X) => {
        X.limpiar(); X.sinFoco(); X.cam('humedal', 2.6);
        X.titulo('Valorar por ~servicios y transporte~ → por *biodiversidad*, *interacciones* y *conectividad*', { width: 52, cls: 'chico' });
        X.corredor(1, 3); X.capa('especies');
      } },
      { t: 'En especulación inmobiliaria, los precios anunciados cerca del metro aumentan aproximadamente un 12 % anual.', a: (X) => {
        X.limpiar(); X.capa('especies', false); X.capa('corredores', false); X.capa('metro'); X.aparecer('pD'); X.cam('alto', 2.4);
        X.dato('d12', { v: 12, suf: '% anual', l: 'precios anunciados cerca del metro', left: 7, top: '18vh' });
      } },
      { t: 'Nuestra propuesta busca proteger los espacios comunitarios y productivos frente al aumento del precio del suelo.', a: (X) => {
        X.limpiar(); X.titulo('*Proteger* lo comunitario y lo productivo', { width: 44 }); X.mercados(true, 0.35);
      } },
      { t: 'En dependencia alimentaria, durante 2022 llegaron aproximadamente 2,2 millones de toneladas de alimentos a Corabastos.', a: (X) => {
        X.limpiar(); X.mercados(false); X.capa('metro', false); X.capa('pD', false); X.cam('cora', 2.4); X.capa('flujos'); X.uTo('flujos', 'uBase', 0.4, 1); X.capa('corabastos');
        X.dato('d22', { v: 2.2, dec: 1, suf: 'M t', l: 'de alimentos llegaron a Corabastos en 2022', left: 7, top: '18vh' });
      } },
      { t: 'Nuestra propuesta busca aumentar la producción local y el abastecimiento distribuido, reduciendo la dependencia de un único nodo.', a: (X) => {
        X.limpiar(); X.cam('alto', 2.4); X.uTo('flujos', 'uBase', 0.08, 2); X.mercados(true);
        X.titulo('De *un único nodo* a una *red distribuida*', { width: 44, cls: 'chico' });
      } },
      { t: 'Finalmente, en gestión de residuos, identificamos acumulaciones en María Paz de 5 toneladas de residuos orgánicos y 18 de voluminosos.', a: (X) => {
        X.limpiar(); X.mercados(false); X.capa('flujos', false); X.capa('corabastos', false); X.cam('mariapaz', 2.4); X.aparecer('pE'); X.foco(X.LUG.mariapaz, 600, '#E36C4B');
        X.dato('d5', { v: 5, suf: 't', l: 'residuos orgánicos · María Paz', left: 7, top: '18vh', chico: true }); X.dato('d18', { v: 18, suf: 't', l: 'residuos voluminosos · María Paz', left: 7, top: '46vh', chico: true, delay: 0.5 });
        lugar(X, 'mp', X.LUG.mariapaz, 'María Paz', 'acumulación de residuos', 0.4, 80);
      } },
      { t: 'Proponemos Estaciones Circulares para reducir estas acumulaciones y aprovechar la materia orgánica, con la meta de disminuir las toneladas acumuladas y aumentar las aprovechadas.', a: (X) => {
        X.limpiar(); X.quitarEts(); X.sinFoco(); X.estaciones(true); X.cam('alto', 2.4);
        X.tarjeta('ec', { img: E('nutrientes'), k: 'propuesta', t: 'Estaciones Circulares', d: '↓ toneladas acumuladas · ↑ toneladas aprovechadas', left: 7, top: '22vh', cls: 'on' });
      } },
      { t: 'De esta manera, los indicadores se convierten en criterios de localización, dimensionamiento y funcionamiento de las intervenciones.', a: (X) => {
        X.limpiar(); X.mercados(true, 0.5);
        X.titulo('Indicadores → *criterios*', { kick: '06 · De diagnóstico a diseño', width: 40 });
        X.lista('crit', { left: 8, top: '42vh', items: ['Localización', 'Dimensionamiento', 'Funcionamiento'] });
      } },
    ],
  },

  /* ===================================================================== 07 OBJETIVOS Y MACROMODELOS */
  {
    n: '07', nombre: 'Objetivos y macromodelos', cam: 'alto', tr: 'escalera',
    base: (X) => { X.gris(0.5, 0); X.capa('agua', true, 0); },
    beats: [
      { t: 'El objetivo general del proyecto es formular y evaluar, mediante simulaciones, un modelo urbano-arquitectónico ecocéntrico que transforme las relaciones territoriales asociadas a la fragmentación de Kennedy.', a: (X) => {
        X.titulo('Formular y evaluar un modelo urbano-arquitectónico *ecocéntrico*', { kick: '07 · Objetivo general', width: 60, cls: 'chico' });
        X.capa('agentes'); X.corredor(1, 4);
      } },
      { t: 'Para ello se establecieron tres objetivos específicos:', a: (X) => { X.limpiar(); X.dato('o3', { v: 3, l: 'objetivos específicos', left: 7, top: '16vh' }); X.lista('obj', { left: 8, top: '46vh', width: 50, items: [] }); } },
      { t: 'Analizar las relaciones espaciales entre los problemas y convertir sus indicadores en criterios de diseño.', a: (X) => { X.agregarItem('obj', 'Analizar relaciones espaciales → <span style="color:var(--lima)">criterios de diseño</span>', 0); X.aparecer('pF', 1, 1); X.aparecer('pE', 1, 1); } },
      { t: 'Plantear una red distribuida de equipamientos productivos, infraestructuras circulares y conexiones ecológicas articuladas mediante Bavaria Común.', a: (X) => { X.agregarItem('obj', 'Red distribuida articulada por <span style="color:var(--lima)">Bavaria Común</span>', 1); X.mercados(true, 0.5); X.estaciones(true); X.capa('bavaria'); } },
      { t: 'Y evaluar las consecuencias de estas intervenciones mediante simulaciones contrastadas.', a: (X) => { X.agregarItem('obj', 'Evaluar con <span style="color:var(--lima)">simulaciones contrastadas</span>', 2); X.agentesVel(2); } },
      { t: 'El ecocentrismo constituye el macromodelo principal, complementado por dos enfoques que también pueden evaluarse: la circularidad de recursos y el comercio ecológico.', a: (X) => {
        X.limpiar(); X.mercados(false); X.capa('pF', false); X.capa('pE', false);
        X.tarjeta('m1', { k: 'Macromodelo principal', t: 'Ecocentrismo', left: 37, top: '30vh', cls: 'on' });
        X.tarjeta('m2', { k: 'Enfoque', t: 'Circularidad de recursos', left: 8, top: '58vh', delay: 0.3 });
        X.tarjeta('m3', { k: 'Enfoque', t: 'Comercio ecológico', right: '8vw', top: '58vh', delay: 0.5 });
      } },
      { t: 'El primero se comprueba mediante la biodiversidad, las interacciones bióticas, la continuidad de corredores y los ciclos biogeoquímicos.', a: (X) => {
        X.el('m1').querySelector('.t').insertAdjacentHTML('afterend', '<div class="d">biodiversidad · interacciones bióticas · continuidad de corredores · ciclos biogeoquímicos</div>');
        X.capa('especies'); X.cam('humedal', 2.4);
      } },
      { t: 'La circularidad se evalúa mediante el aprovechamiento de residuos y la recuperación de nutrientes.', a: (X) => {
        X.marcar('m1', 'on', false); X.marcar('m2', 'on'); X.el('m2').insertAdjacentHTML('beforeend', '<div class="d">aprovechamiento de residuos · recuperación de nutrientes</div>');
        X.capa('especies', false); X.cam('alto', 2.4);
      } },
      { t: 'Y el comercio ecológico, mediante la producción local, la autonomía alimentaria y la accesibilidad al abastecimiento.', a: (X) => {
        X.marcar('m2', 'on', false); X.marcar('m3', 'on'); X.el('m3').insertAdjacentHTML('beforeend', '<div class="d">producción local · autonomía alimentaria · accesibilidad</div>'); X.mercados(true, 0.5);
      } },
      { t: 'Estos indicadores establecen las condiciones que la propuesta busca transformar y que posteriormente se ponen a prueba.', a: (X) => {
        X.limpiar(); X.titulo('Condiciones que se *ponen a prueba*', { cls: 'centro' });
      } },
    ],
  },

  /* ===================================================================== 08 BAVARIA COMÚN Y EL SIMULADOR */
  {
    n: '08', nombre: 'Bavaria Común y el simulador', cam: 'bav', tr: 'vuelo',
    base: (X) => { X.gris(0.7, 0); X.capa('agua', true, 0); X.capa('vias-prin', true, 0); },
    beats: [
      { t: 'Para materializar estos criterios se plantea Bavaria Común, un Distrito de Tecnologías Convergentes localizado en la antigua cervecería, entre las avenidas Boyacá y Las Américas.', a: (X) => {
        X.capa('bavaria'); X.foco(X.LUG.bavaria, 900);
        X.titulo('Bavaria *Común*', { kick: '08 · Distrito de Tecnologías Convergentes', width: 40 });
        lugar(X, 'bv', X.LUG.bavaria, 'Bavaria Común', 'Av. Boyacá × Av. Las Américas', 0.6, 300);
      } },
      { t: 'La intervención parte de la antigua cervecería Bavaria, un espacio actualmente desocupado y sin actividad.', a: (X) => {
        X.limpiar(); X.foto('bvf', { src: I('bavaria.jpg'), left: 6, top: '20vh', width: 44, height: '56vh', desde: 'izq', ry: 8, cap: '<b>simulador</b> · antigua cervecería Bavaria' });
      } },
      { t: 'Se propone recuperar parte de sus estructuras para transformarlas en espacios de formación, investigación y experimentación.', a: (X) => {
        X.lista('usos', { right: '7vw', top: '24vh', items: ['Formación', 'Investigación', 'Experimentación'] }); X.cam('bavCerca', 2.4);
      } },
      { t: 'Su programa se fundamenta en los estudios sobre convergencia de tecnologías NBIC, desarrollados por Roco y Bainbridge en un informe científico de 2002.', a: (X) => {
        X.limpiar(); X.quitarEts();
        X.titulo('Convergencia *NBIC*', { kick: 'Roco y Bainbridge · 2002', width: 40 });
        ['N', 'B', 'I', 'C'].forEach((k, i) => X.et('nb' + k, { p: [0, 0, 0], obj: X.W.nbic[i], t: k, s: ['nanotecnología', 'biotecnología', 'información', 'ciencias cognitivas'][i], cls: 'nodo grande', delay: i * 0.2 }));
      } },
      { t: 'La biotecnología se vincula con la hidroponía, el compostaje y el cultivo experimental de hongos.', a: (X) => { X.limpiar(); X.tarjeta('tb', { img: E('hongos'), k: 'B · biotecnología', t: 'Hidroponía · compostaje · hongos', left: 7, top: '24vh', cls: 'on' }); } },
      { t: 'Las tecnologías de la información coordinan pedidos, entregas y excedentes.', a: (X) => { X.marcar('tb', 'on', false); X.tarjeta('ti', { k: 'I · información', t: 'Pedidos · entregas · excedentes', left: 7, top: '50vh', cls: 'on' }); } },
      { t: 'Las ciencias cognitivas orientan el aprendizaje y la toma de decisiones, mientras la nanotecnología se incorpora como línea de investigación en materiales para la conservación de alimentos.', a: (X) => {
        X.marcar('ti', 'on', false); X.tarjeta('tc', { k: 'C · cognitivas', t: 'Aprendizaje y decisiones', right: '7vw', top: '24vh', cls: 'on' }); X.tarjeta('tn', { k: 'N · nanotecnología', t: 'Materiales para conservar alimentos', right: '7vw', top: '50vh', delay: 0.5 });
      } },
      { t: 'Bavaria funciona como clúster de conocimiento y aprendizaje, mientras las capacidades productivas se distribuyen por Kennedy.', a: (X) => {
        X.limpiar(); X.quitarEts(); X.cam('alto', 2.6); X.mercados(true, 0.5); X.sinFoco();
        X.titulo('Conocimiento en *Bavaria*, producción *distribuida*', { width: 46, cls: 'chico' });
      } },
      { t: 'Para evaluar estas intervenciones se desarrolló un simulador dirigido a arquitectos, urbanistas y actores vinculados con la transformación territorial.', a: (X) => {
        X.limpiar(); X.mercados(false); X.capa('bavaria', false);
        X.foto('sim', { src: I('portada_render.jpg'), left: 22, top: '16vh', width: 56, height: '58vh', cap: '<b>simulador</b> · Kennedy' });
        X.bloque('pub', '<span class="mono" style="color:var(--lima)">arquitectos · urbanistas · actores territoriales</span>', { left: 22, top: '80vh' });
      } },
      { t: 'El entorno representa calles, edificios, cubiertas, lotes y humedales,', a: (X) => {
        X.limpiar(); X.cam('humedal', 2.4); X.capa('edif', false, 0); X.capa('vias', false, 0); X.capa('agua', false, 0);
        const seq = [['vias', 'Calles'], ['edif', 'Edificios · cubiertas'], ['losa', 'Lotes'], ['agua', 'Humedales']];
        X.lista('ent', { left: 7, top: '24vh', items: [] });
        seq.forEach(([c, t], i) => X.gsap.delayedCall(X.R.rapido ? 0 : i * 0.7, () => { if (c === 'edif') X.W.capas.edif.userData.u.uSube.value = X.R.rapido ? 1 : 0; X.capa(c); if (c === 'edif') X.sube(1, [-900, 900], 2); X.agregarItem('ent', t, i); }));
      } },
      { t: 'junto con agentes que participan en procesos de desplazamiento, producción, consumo y distribución.', a: (X) => { X.capa('agentes'); X.agentesVel(2); X.capa('especies'); X.lista('ag', { right: '7vw', top: '24vh', items: ['Desplazamiento', 'Producción', 'Consumo', 'Distribución'], n: ['●', '●', '●', '●'] }); } },
      { t: 'El modelo dinámico-causal organiza sus relaciones, mientras el Game Design Canvas establece los controles, parámetros, reglas e indicadores.', a: (X) => {
        X.limpiar(); X.capa('especies', false);
        X.tarjeta('mdc', { k: 'relaciones', t: 'Modelo dinámico-causal', left: 10, top: '30vh', cls: 'on' });
        X.tarjeta('gdc', { k: 'controles · parámetros · reglas · indicadores', t: 'Game Design Canvas', right: '10vw', top: '30vh', delay: 0.4 });
      } },
      { t: 'Cada tick representa una semana, con un horizonte de quince años y un control horario que permite visualizar diferentes momentos del día.', a: (X) => { X.limpiar(); X.reloj('rel', { right: '7vw', top: '22vh' }); X.agentesVel(4); X.cam('alto', 3); } },
      { t: 'La evaluación se organiza en seis pares de simulaciones, bajo las mismas condiciones iniciales y perturbaciones, diferenciadas por la incorporación de la propuesta.', a: (X) => {
        X.limpiar(); X.agentesVel(1);
        const nombres = ['Abastecimiento', 'Movilidad', 'Residuos', 'Biodiversidad', 'Población', 'Recursos'];
        X.bloque('pares', `<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;width:84vw">${nombres.map((n, i) => `<div class="vid" style="position:relative;padding:14px"><div class="mono" style="color:var(--lima)">par 0${i + 1}</div><div style="font:800 22px var(--f);letter-spacing:-.03em;margin:8px 0">${n}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><div class="mono" style="padding:8px;border:1px solid rgba(245,243,235,.2);font-size:10px">sin</div><div class="mono" style="padding:8px;border:1px solid #C7FF27;color:#C7FF27;font-size:10px">con</div></div></div>`).join('')}</div>`, { left: 8, top: '34vh' });
        if (!X.R.rapido) X.gsap.from(X.el('pares').querySelectorAll('.vid'), { rotationY: -90, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'expo.out' });
        X.titulo('6 pares · *12 simulaciones*', { width: 50, cls: 'chico', top: '12vh' });
      } },
    ],
  },

  /* ===================================================================== 09 PAR 01 */
  {
    n: '09', nombre: 'Primer par · abastecimiento y producción distribuida', cam: 'cora', tr: 'persiana',
    base: (X) => { X.gris(0.6, 0); X.capa('agua', true, 0); },
    beats: [
      { t: 'El primer par responde a la dependencia alimentaria y a la baja cobertura de mercados identificada en el diagnóstico.', a: (X) => { X.titulo('Par 01 · *Abastecimiento*', { kick: 'dependencia alimentaria · baja cobertura', width: 44 }); X.capa('flujos'); X.aparecer('pA'); X.capa('corabastos'); } },
      { t: 'La propuesta incorpora módulos productivos en cubiertas compartidas, colegios y otros espacios habilitados.', a: (X) => {
        X.limpiar(); X.foto('inem', { src: I('inem.jpg'), right: '6vw', top: '20vh', width: 40, height: '50vh', cap: '<b>simulador</b> · módulos en cubiertas y colegios' });
        X.lista('mod', { left: 7, top: '26vh', items: ['Cubiertas compartidas', 'Colegios', 'Espacios habilitados'] }); X.foco(X.LUG.corabastos, 3000, '#C7FF27', 3);
      } },
      { t: 'La formación se articula desde Bavaria, mientras las familias y organizaciones participan en la producción, destinando una parte al autoconsumo y otra a los puntos de acopio y mercados barriales.', a: (X) => {
        X.limpiar(); X.sinFoco(); X.cam('alto', 2.4); X.capa('bavaria'); X.mercados(true, 0.5);
        X.tarjeta('auto', { k: 'una parte', t: 'Autoconsumo', left: 7, top: '26vh' }); X.tarjeta('acop', { k: 'otra parte', t: 'Acopio y mercados barriales', left: 7, top: '50vh', delay: 0.4, cls: 'on' });
      } },
      { t: 'Los alimentos que no pueden producirse localmente continúan llegando de otras regiones. Corabastos permanece como uno de los nodos de abastecimiento.', a: (X) => { X.limpiar(); X.uTo('flujos', 'uBase', 0.2, 1); lugar(X, 'cora', X.LUG.corabastos, 'Corabastos', 'sigue siendo un nodo', 0.3, 260); } },
      { t: 'Al aumentar la demanda, el escenario sin propuesta conserva sus capacidades iniciales. En el segundo se incorporan los módulos productivos y mercados distribuidos.', a: (X) => {
        X.quitarEts(); X.par('p1', { izq: { t: 'capacidades iniciales', src: V('sim_agentes.mp4'), video: true }, der: { t: 'módulos + mercados', src: V('sim_propuesta.mp4'), video: true } });
      } },
      { t: 'Comparamos los volúmenes recibidos, las reservas, los déficits, el autoconsumo y la cobertura de mercados a menos de quince minutos.', a: (X) => X.filas('p1', ['Volúmenes recibidos', 'Reservas', 'Déficits', 'Autoconsumo', 'Cobertura < 15 min']) },
      { t: 'Así se evalúa si la distribución de capacidades productivas y comerciales responde al criterio de accesibilidad y autonomía alimentaria.', a: (X) => { X.limpiar(); X.titulo('¿Responde a la *accesibilidad* y la *autonomía alimentaria*?', { cls: 'centro chico' }); } },
    ],
  },

  /* ===================================================================== 10 PAR 02 */
  {
    n: '10', nombre: 'Segundo par · movilidad y accesibilidad', cam: 'alto', tr: 'recorte',
    base: (X) => { X.gris(0.7, 0); X.capa('vias-prin', true, 0); },
    beats: [
      { t: 'La localización de los mercados también responde a la configuración de la red vial.', a: (X) => { X.titulo('Par 02 · *Movilidad*', { kick: 'red vial y mercados', width: 40 }); X.mercados(true, 0.4); X.uTo('vias-prin', 'uBase', 0.6, 1); } },
      { t: 'Mediante la sintaxis espacial, la integración permite reconocer tramos accesibles y la elección identifica recorridos potenciales.', a: (X) => {
        X.limpiar(); X.mercados(false);
        X.tarjeta('int', { k: 'sintaxis espacial', t: 'Integración', d: 'tramos accesibles', left: 7, top: '24vh', cls: 'on' }); X.tarjeta('ele', { k: 'sintaxis espacial', t: 'Elección', d: 'recorridos potenciales', left: 7, top: '48vh', delay: 0.4 });
        X.uTo('vias-prin', 'uV', 1200, 1);
      } },
      { t: 'En Bavaria, estos análisis orientan nuevos pasajes que conectan las naves recuperadas con las calles del entorno, evitando extender la intervención sobre el bosque.', a: (X) => {
        X.limpiar(); X.cam('bavCerca', 2.6); X.capa('bavaria'); X.foco(X.LUG.bavaria, 700);
        X.foto('bv2', { src: I('bavaria.jpg'), right: '6vw', top: '20vh', width: 36, height: '46vh', cap: '<b>pasajes</b> · sin extenderse sobre el bosque' });
      } },
      { t: 'Al modificar la circulación, observamos cómo los vehículos reorganizan sus recorridos.', a: (X) => { X.limpiar(); X.capa('bavaria', false); X.sinFoco(); X.cam('alto', 2.4); X.capa('agentes'); X.agentesVel(4); } },
      { t: 'Con la propuesta, los nuevos destinos comerciales y conexiones modifican parte de los desplazamientos.', a: (X) => { X.mercados(true, 0.4); X.agentesVel(2); X.titulo('Nuevos destinos → *nuevos recorridos*', { width: 44, cls: 'chico' }); } },
      { t: 'Comparamos los tiempos de viaje, los niveles de congestión y el ruido asociado al tránsito, considerando también sus posibles efectos sobre la fauna.', a: (X) => {
        X.limpiar(); X.par('p2', { izq: { t: 'hora pico', src: I('flujo_pico.jpg') }, der: { t: 'ruido y fauna', src: I('ruido.jpg') } });
        X.filas('p2', ['Tiempos de viaje', 'Congestión', 'Ruido del tránsito', 'Efectos sobre la fauna']);
      } },
      { t: 'La prueba permite determinar en qué sectores disminuyen o aumentan las presiones y si la reorganización territorial mejora la capacidad de respuesta o traslada parte de la congestión hacia otros lugares.', a: (X) => { X.limpiar(); X.titulo('¿Mejora la respuesta o *traslada* la congestión?', { cls: 'centro chico' }); } },
    ],
  },

  /* ===================================================================== 11 PAR 03 */
  {
    n: '11', nombre: 'Tercer par · residuos y circularidad', cam: 'mariapaz', tr: 'cubo',
    base: (X) => { X.gris(0.7, 0); },
    beats: [
      { t: 'Los sectores con acumulación de residuos orientan la localización de Estaciones Circulares distribuidas.', a: (X) => { X.titulo('Par 03 · *Residuos*', { kick: 'estaciones circulares', width: 40 }); X.aparecer('pE'); X.estaciones(true); X.cam('alto', 3); } },
      { t: 'Estas infraestructuras incorporan espacios de recepción, separación, almacenamiento y tratamiento de materia orgánica.', a: (X) => { X.lista('est', { left: 7, top: '40vh', items: ['Recepción', 'Separación', 'Almacenamiento', 'Tratamiento orgánico'] }); } },
      { t: 'Parte de los residuos puede transformarse en compost y reincorporarse a los cultivos en suelo, relacionando el abastecimiento con la recuperación de nutrientes.', a: (X) => {
        X.limpiar();
        const ciclo = [['bacterias', 'compost'], ['nutrientes', 'nutrientes'], ['hongos', 'suelo vivo'], ['sauco', 'cultivos']];
        X.bloque('ciclo', `<div class="ciclo" style="position:relative;width:34vw;height:34vw">${ciclo.map(([s, t], i) => `<div class="cn" style="position:absolute;left:50%;top:50%;width:9vw;text-align:center;translate:-50% -50%"><img src="${E(s)}" style="width:7vw;height:7vw;object-fit:contain;filter:drop-shadow(0 6px 14px #000)"><div class="mono" style="color:var(--lima)">${t}</div></div>`).join('')}<div style="position:absolute;inset:12%;border:2px dashed rgba(199,255,39,.6);border-radius:50%"></div></div>`, { right: '8vw', top: '18vh' });
        const nodos = X.el('ciclo').querySelectorAll('.cn'); const p = { a: 0 };
        const pon = () => nodos.forEach((n, i) => { const a = p.a + i * Math.PI / 2; n.style.transform = `translate(${Math.cos(a) * 13}vw, ${Math.sin(a) * 13}vw)`; }); pon();
        X.gsap.to(p, { a: Math.PI * 2, duration: 12, repeat: -1, ease: 'none', onUpdate: pon });
        X.titulo('Residuo → *compost* → cultivo', { width: 40, cls: 'chico' });
      } },
      { t: 'En esta prueba aumentamos la generación de residuos orgánicos en ambos escenarios.', a: (X) => { X.uTo('pE', 'uS', 70, 2.5, 'steps(10)'); X.titulo('Perturbación: *más residuos orgánicos* en ambos escenarios', { width: 40, cls: 'chico abajo' }); } },
      { t: 'Sin propuesta, los residuos dependen de las capacidades iniciales de gestión. Con propuesta, se incorporan las nuevas estaciones y sus capacidades de procesamiento.', a: (X) => {
        X.limpiar(); X.par('p3', { izq: { t: 'capacidades iniciales', html: `<img src="${E('lixiviados')}" style="position:absolute;inset:18% 30%;width:40%;height:auto;object-fit:contain">` }, der: { t: 'estaciones circulares', html: `<img src="${E('nutrientes')}" style="position:absolute;inset:18% 30%;width:40%;height:auto;object-fit:contain">` } });
      } },
      { t: 'Se comparan las toneladas acumuladas, los residuos aprovechados, el compost recuperado y los momentos de saturación.', a: (X) => X.filas('p3', ['Toneladas acumuladas', 'Residuos aprovechados', 'Compost recuperado', 'Momentos de saturación']) },
      { t: 'Esto permite evaluar cuánto material se reincorpora al ciclo productivo y bajo qué condiciones las estaciones mantienen su funcionamiento.', a: (X) => { X.limpiar(); X.titulo('¿Cuánto material *vuelve al ciclo*?', { cls: 'centro chico' }); } },
    ],
  },

  /* ===================================================================== 12 PAR 04 */
  {
    n: '12', nombre: 'Cuarto par · biodiversidad y conectividad ecológica', cam: 'humedal', tr: 'pliegue',
    base: (X) => { X.gris(0.75, 0); X.capa('agua', true, 0); },
    beats: [
      { t: 'El diagnóstico ecológico identificó discontinuidades entre hábitats y presiones asociadas a las vías, el ruido y la transformación del suelo.', a: (X) => { X.titulo('Par 04 · *Biodiversidad*', { kick: 'hábitats discontinuos', width: 44 }); X.capa('vias-prin'); X.foto('rd', { src: I('ruido.jpg'), right: '6vw', top: '22vh', width: 34, height: '40vh', cap: '<b>simulador</b> · ruido del tránsito' }); } },
      { t: 'La propuesta incorpora jardines florales, restauración vegetal, recuperación de bordes de humedal y corredores ecológicos.', a: (X) => { X.limpiar(); X.corredor(1, 3); X.lista('eco', { left: 7, top: '24vh', items: ['Jardines florales', 'Restauración vegetal', 'Bordes de humedal', 'Corredores ecológicos'] }); } },
      { t: 'Su localización responde a las relaciones entre las especies y sus recursos.', a: (X) => { X.limpiar(); X.capa('especies'); X.titulo('Especies ↔ *recursos*', { width: 40 }); } },
      { t: 'Las abejas requieren recursos florales para la polinización;', a: (X) => { X.limpiar(); X.cam({ p: [-700, 700, 1500], o: [-900, 120, 900] }, 2.4); X.tarjeta('ab', { k: 'polinización', t: 'Abejas', d: 'requieren recursos florales', left: 7, top: '24vh', cls: 'on' }); } },
      { t: 'las mirlas participan en la dispersión de semillas,', a: (X) => { X.marcar('ab', 'on', false); X.tarjeta('mi', { img: E('mirla'), k: 'dispersión de semillas', t: 'Mirlas', left: 7, top: '46vh', cls: 'on' }); } },
      { t: 'mientras las tinguas dependen de las condiciones de los humedales.', a: (X) => { X.marcar('mi', 'on', false); X.tarjeta('ti', { img: E('tingua_bogotana'), k: 'humedales', t: 'Tinguas', right: '7vw', top: '30vh', cls: 'on' }); } },
      { t: 'En esta prueba introducimos el deterioro de un parche ecológico y observamos cómo responden las especies en los dos escenarios.', a: (X) => {
        X.limpiar(); X.cam('humedal', 2.4); const p = X.W.parches[2]; X.foco([p.x, p.z], 700, '#E36C4B');
        X.et('par', { p: [p.x, 150, p.z], t: 'Parche deteriorado', s: 'perturbación' }); X.titulo('Perturbación: un parche *se deteriora*', { width: 44, cls: 'chico' });
      } },
      { t: 'Para comprobar el macromodelo ecocéntrico, analizamos la diversidad de especies, la continuidad de corredores, la conectividad funcional y las interacciones bióticas.', a: (X) => { X.limpiar(); X.quitarEts(); X.sinFoco(); X.lista('ind', { left: 7, top: '22vh', items: ['Diversidad de especies', 'Continuidad de corredores', 'Conectividad funcional', 'Interacciones bióticas'] }); } },
      { t: 'También registramos los atropellamientos de fauna para reconocer las vías que dificultan sus desplazamientos.', a: (X) => { X.limpiar(); X.cam('alto', 2.4); X.uTo('vias-prin', 'uBase', 0.8, 0.6); X.titulo('Atropellamientos: las *vías* como barrera', { width: 44, cls: 'chico' }); } },
      { t: 'La comparación permite reconocer si las intervenciones mantienen las funciones ecológicas o si persisten condiciones de deterioro, a partir de los cambios en la permanencia de especies, sus interacciones y la conectividad de sus hábitats.', a: (X) => {
        X.limpiar(); X.par('p4', { izq: { t: 'deterioro', src: V('sim_humedal.mp4'), video: true }, der: { t: 'corredores y restauración', src: I('arboles.jpg') } });
        X.filas('p4', ['Permanencia de especies', 'Interacciones', 'Conectividad de hábitats']);
      } },
    ],
  },

  /* ===================================================================== 13 PAR 05 */
  {
    n: '13', nombre: 'Quinto par · población y presiones sobre el suelo', cam: 'oeste', tr: 'esquina',
    base: (X) => { X.gris(0.6, 0); X.capa('upz', true, 0); X.capa('edif', false, 0); },
    beats: [
      { t: 'La diferencia de densidad entre Patio Bonito y Tintal Norte evidencia que la demanda de servicios no se distribuye de manera uniforme.', a: (X) => {
        X.upzAlto(true); X.titulo('Par 05 · *Población*', { kick: 'demanda no uniforme', width: 40 });
        X.et('upb', { p: [X.LUG.patio[0], 700, X.LUG.patio[1]], t: 'Patio Bonito', s: '435 hab/ha', delay: 0.8 }); X.et('utn', { p: [X.LUG.tintal[0], 320, X.LUG.tintal[1]], t: 'Tintal Norte', s: '90 hab/ha', delay: 1.1 });
      } },
      { t: 'Por eso, la propuesta incorpora equipamientos de proximidad en sectores deficitarios y plantea proteger espacios productivos, comunitarios y ecológicos frente a las presiones inmobiliarias.', a: (X) => { X.limpiar(); X.quitarEts(); X.mercados(true, 0.45); X.aparecer('pD'); X.lista('prox', { left: 7, top: '22vh', items: ['Equipamientos de proximidad', 'Proteger lo productivo, comunitario y ecológico'] }); } },
      { t: 'En esta prueba introducimos el mismo crecimiento poblacional en ambos escenarios.', a: (X) => { X.limpiar(); X.upzAlto(true, 1.35); X.titulo('Mismo *crecimiento* en ambos escenarios', { width: 44, cls: 'chico' }); } },
      { t: 'El análisis permite estudiar dónde se concentra ese crecimiento, qué servicios reciben los habitantes y cómo evolucionan los usos del suelo.', a: (X) => { X.limpiar(); X.foto('usos', { src: I('usos.jpg'), right: '6vw', top: '20vh', width: 40, height: '50vh', cap: '<b>simulador</b> · usos del suelo' }); X.lista('q', { left: 7, top: '24vh', items: ['¿Dónde crece?', '¿Qué servicios recibe?', '¿Cómo cambian los usos?'], n: ['?', '?', '?'] }); } },
      { t: 'Desde el enfoque ecocéntrico, el valor del territorio también se evalúa mediante su capacidad de mantener biodiversidad, conectividad e interacciones ecológicas.', a: (X) => { X.limpiar(); X.upzAlto(false); X.capa('edif', true, 0.3); X.mercados(false); X.capa('pD', false); X.cam('humedal', 2.4); X.capa('agua'); X.corredor(1, 2.5); X.capa('especies'); X.titulo('El valor del suelo también es *ecológico*', { width: 44, cls: 'chico' }); } },
      { t: 'Así se reconocen las tensiones entre crecimiento urbano, presión inmobiliaria y capacidad de soporte ecológico.', a: (X) => {
        X.limpiar(); X.tarjeta('t1', { k: 'tensión', t: 'Crecimiento urbano', left: 40, top: '18vh' }); X.tarjeta('t2', { k: 'tensión', t: 'Presión inmobiliaria', left: 14, top: '58vh', delay: 0.3 }); X.tarjeta('t3', { k: 'tensión', t: 'Soporte ecológico', right: '12vw', top: '58vh', delay: 0.6, cls: 'on' });
      } },
    ],
  },

  /* ===================================================================== 14 PAR 06 */
  {
    n: '14', nombre: 'Sexto par · distribución de recursos', cam: 'bav', tr: 'escalera',
    base: (X) => { X.gris(0.7, 0); X.capa('agua', true, 0); },
    beats: [
      { t: 'La distribución de infraestructuras requiere también capacidades de organización y gestión.', a: (X) => { X.titulo('Par 06 · *Recursos*', { kick: 'organización y gestión', width: 40 }); } },
      { t: 'Entre los actores del territorio se encuentra el colectivo Salvemos el Bosque de Bavaria, cuya labor se relaciona con la protección de este ecosistema.', a: (X) => { X.limpiar(); X.foco(X.LUG.bavaria, 800, '#9be15d'); X.capa('bavaria'); X.foto('sbb', { src: I('logo_bosque_bavaria.png'), right: '8vw', top: '22vh', width: 24, height: '24vw', cap: '<b>colectivo</b> · Salvemos el Bosque de Bavaria' }); } },
      { t: 'La propuesta plantea una federación de asambleas con vocerías rotativas para coordinar iniciativas comunitarias, productivas y ambientales.', a: (X) => {
        X.limpiar(); X.sinFoco(); X.capa('bavaria', false); X.cam('alto', 2.4); X.mercados(true, 0.4);
        X.titulo('Federación de asambleas · vocería *rotativa*', { width: 46, cls: 'chico' });
        if (!X.R.rapido) { let i = 0; const rot = () => { X.W.mercados.forEach((g, k) => g.userData.n.scale.setScalar(k === i % X.W.mercados.length ? 2.6 : 1)); i++; }; rot(); X.gsap.to({}, { duration: 0.6, repeat: 30, onRepeat: rot }); }
      } },
      { t: 'La sexta prueba compara la distribución territorial de recursos limitados ante necesidades simultáneas en diferentes sectores.', a: (X) => { X.limpiar(); X.capa('upz'); X.upzAlto(true, 0.5); X.titulo('Recursos *limitados*, necesidades *simultáneas*', { width: 46, cls: 'chico' }); } },
      { t: 'Observamos qué equipamientos pueden habilitarse, qué necesidades se atienden y qué sectores permanecen sin cobertura.', a: (X) => { X.limpiar(); X.W.mercados.forEach((g, k) => { if (k % 3 === 2) X.tw(g.userData.ar.scale, { x: 0.001, y: 0.001, duration: X.D(0.6), ease: 'steps(4)', delay: X.D(k * 0.05) }); }); X.lista('rec', { left: 7, top: '22vh', items: ['¿Qué se habilita?', '¿Qué se atiende?', '¿Qué queda sin cobertura?'], n: ['✓', '✓', '✕'] }); } },
      { t: 'Esta simulación explora las consecuencias espaciales de distribuir recursos. La evaluación completa del funcionamiento político de la gobernanza heterárquica permanece como una posibilidad de desarrollo futuro.', a: (X) => { X.limpiar(); X.upzAlto(false); X.titulo('Gobernanza heterárquica: *desarrollo futuro*', { cls: 'centro chico' }); } },
    ],
  },

  /* ===================================================================== 15 GAME OVER */
  {
    n: '15', nombre: 'Indicadores, condiciones críticas y Game Over', cam: 'alto', tr: 'recorte',
    base: (X) => { X.gris(0.8, 0); X.capa('agentes', true, 0); },
    beats: [
      { t: 'Los resultados de las doce simulaciones se comparan en momentos equivalentes, identificando qué condiciones cambian, dónde ocurre esa transformación y durante cuánto tiempo se mantiene.', a: (X) => { X.titulo('12 simulaciones · *momentos equivalentes*', { width: 50, cls: 'chico' }); X.lista('qd', { left: 8, top: '44vh', items: ['Qué cambia', 'Dónde', 'Cuánto dura'] }); } },
      { t: 'Desde el comercio ecológico, se evalúa la producción local, la autonomía alimentaria y la accesibilidad a mercados.', a: (X) => { X.limpiar(); X.tarjeta('g1', { k: 'comercio ecológico', t: 'Producción local · autonomía · accesibilidad', left: 6, top: '24vh', cls: 'on' }); X.mercados(true, 0.4); } },
      { t: 'Desde la circularidad, el aprovechamiento de residuos y la reincorporación de nutrientes.', a: (X) => { X.marcar('g1', 'on', false); X.tarjeta('g2', { k: 'circularidad', t: 'Residuos aprovechados · nutrientes', left: 37, top: '24vh', cls: 'on' }); X.estaciones(true); } },
      { t: 'Y desde el ecocentrismo, la diversidad de especies, las interacciones bióticas, la continuidad de corredores y los ciclos biogeoquímicos del agua, el carbono y los nutrientes.', a: (X) => { X.marcar('g2', 'on', false); X.tarjeta('g3', { k: 'ecocentrismo', t: 'Especies · interacciones · corredores · ciclos', right: '6vw', top: '24vh', cls: 'on' }); X.corredor(1, 2); X.capa('agua'); } },
      { t: 'Para identificar los límites de funcionamiento se plantearon condiciones de Game Over.', a: (X) => { X.limpiar(); X.mercados(false); X.gameover(); X.gris(1, 0.4); X.temblor(); } },
      { t: 'En abastecimiento, cuando un sector recibe menos del 80 % de los alimentos que necesita.', a: (X) => { X.limpiar(); X.dato('g80', { v: 80, pre: '< ', suf: '%', l: 'abastecimiento · alimentos recibidos por sector', left: 6, top: '22vh', chico: true }); X.aparecer('pA'); } },
      { t: 'En residuos, cuando la acumulación supera la capacidad disponible de almacenamiento.', a: (X) => { X.bloque('gres', '<div class="vid" style="position:relative;width:26vw"><div class="mono" style="color:var(--coral)">residuos</div><div style="font:800 36px var(--f);letter-spacing:-.04em;margin-top:8px">acumulación &gt; capacidad</div></div>', { left: 37, top: '26vh' }); X.aparecer('pE'); } },
      { t: 'Y en biodiversidad, cuando la presencia de especies se reduce un 30 % o más respecto a las condiciones iniciales, según el indicador definido.', a: (X) => { X.dato('g30', { v: 30, pre: '−', suf: '%', l: 'biodiversidad · presencia de especies o más', right: '6vw', top: '22vh', chico: true }); } },
      { t: 'Estas condiciones se comprueban durante cuatro semanas consecutivas para distinguir fluctuaciones temporales de situaciones persistentes.', a: (X) => {
        X.bloque('sem', `<div style="display:flex;gap:12px">${[1, 2, 3, 4].map((s) => `<div class="vid s" style="position:relative;width:13vw;padding:18px"><div class="mono">semana ${s}</div><div class="b" style="height:10px;margin-top:14px;background:rgba(245,243,235,.12)"><i style="display:block;height:100%;width:0;background:var(--coral)"></i></div></div>`).join('')}</div>`, { left: 14, top: '62vh' });
        X.tw(X.el('sem').querySelectorAll('i'), { width: '100%', duration: X.D(0.7), ease: 'steps(5)', stagger: X.D(0.7) });
      } },
      { t: 'Basta con que se cumpla una de estas condiciones para activar el Game Over.', a: (X) => { X.limpiar(); X.gameover(); X.temblor(); X.foco([0, 0], 6000, '#E36C4B', 0.6); } },
      { t: 'Cuando se alcanza un límite, el simulador registra el indicador afectado, su localización y la semana correspondiente.', a: (X) => {
        X.limpiar(); X.sinFoco();
        X.bloque('log', '<div class="vid" style="position:relative;width:40vw;font:500 18px var(--m);line-height:2"><div style="color:var(--coral)">● GAME OVER REGISTRADO</div><div>indicador ......... <span class="ty"></span></div><div>localización ...... <span class="ty"></span></div><div>semana ............ <span class="ty"></span></div></div>', { left: 30, top: '30vh' });
        const v = ['afectado', 'sector', 'n.º']; X.el('log').querySelectorAll('.ty').forEach((s, i) => { if (X.R.rapido) { s.textContent = v[i]; return; } const p = { n: 0 }; X.gsap.to(p, { n: v[i].length, duration: 0.6, delay: 0.5 + i * 0.6, ease: 'steps(' + v[i].length + ')', onUpdate: () => (s.textContent = v[i].slice(0, Math.round(p.n)) + '▌') }); });
      } },
      { t: 'La comparación permite identificar cuáles intervenciones responden a los criterios de diseño, cuáles requieren ajustes y qué nuevas vulnerabilidades pueden surgir.', a: (X) => { X.limpiar(); X.gris(0.5); X.lista('res', { left: 8, top: '30vh', items: ['Responden a los criterios', 'Requieren ajustes', 'Nuevas vulnerabilidades'], n: ['✓', '↻', '!'] }); } },
    ],
  },

  /* ===================================================================== 16 LÍMITES */
  {
    n: '16', nombre: 'Límites del modelo', cam: 'alto', tr: 'persiana',
    base: (X) => { X.gris(1, 0); },
    beats: [
      { t: 'Los resultados dependen de las condiciones representadas en el modelo.', a: (X) => { X.titulo('Los resultados dependen de lo *representado*', { cls: 'centro chico' }); } },
      { t: 'La producción alimentaria está limitada por la superficie disponible y el rendimiento de los cultivos.', a: (X) => { X.limpiar(); X.tarjeta('l1', { k: 'límite', t: 'Producción alimentaria', d: 'superficie disponible · rendimiento de cultivos', left: 7, top: '24vh' }); } },
      { t: 'El aprovechamiento de residuos depende de las capacidades de tratamiento, mientras las interacciones ecológicas requieren representar adecuadamente las necesidades de cada especie.', a: (X) => { X.tarjeta('l2', { k: 'límite', t: 'Residuos', d: 'capacidades de tratamiento', left: 37, top: '24vh' }); X.tarjeta('l3', { k: 'límite', t: 'Interacciones ecológicas', d: 'necesidades de cada especie', right: '6vw', top: '24vh', delay: 0.4 }); } },
      { t: 'Por eso, las simulaciones no constituyen una predicción exacta del futuro de Kennedy.', a: (X) => { X.limpiar(); X.titulo('No es una ~predicción exacta~', { cls: 'centro' }); } },
      { t: 'Su aporte consiste en comparar decisiones, explorar sus consecuencias y reconocer las condiciones necesarias para que las intervenciones mantengan su funcionamiento.', a: (X) => { X.limpiar(); X.gris(0.3, 2); X.capa('agentes'); X.lista('ap', { left: 8, top: '28vh', items: ['Comparar decisiones', 'Explorar consecuencias', 'Reconocer condiciones necesarias'] }); } },
    ],
  },

  /* ===================================================================== 17 CIERRE */
  {
    n: '17', nombre: 'Cierre · posibilidades futuras', cam: 'alto', tr: 'vuelo',
    base: (X) => { X.gris(0.3, 0); X.capa('agua', true, 0); },
    beats: [
      { t: 'La investigación permitió pasar del análisis del POT al reconocimiento de las relaciones territoriales de Kennedy, convirtiendo los indicadores del diagnóstico en criterios de diseño que orientan una propuesta urbano-arquitectónica.', a: (X) => {
        X.lista('rec', { left: 7, top: '24vh', items: ['POT', 'Relaciones territoriales', 'Indicadores', 'Criterios de diseño', 'Propuesta'], n: ['→', '→', '→', '→', '●'] });
        const seq = ['red-pot', 'red6', 'mercados']; seq.forEach((c, i) => X.gsap.delayedCall(X.R.rapido ? 0 : i * 1.3, () => { seq.forEach((o) => X.capa(o, false, 0.3)); if (c === 'mercados') X.mercados(true, 0.5); else X.capa(c); }));
      } },
      { t: 'La evaluación se concentra en el macromodelo ecocéntrico, la circularidad de recursos y el comercio ecológico.', a: (X) => { X.limpiar(); X.capas(['red6', 'red-pot'], false); X.estaciones(true); X.corredor(1, 2); X.tarjeta('e1', { k: 'principal', t: 'Ecocentrismo', left: 37, top: '22vh', cls: 'on' }); X.tarjeta('e2', { t: 'Circularidad', left: 10, top: '56vh', delay: 0.3 }); X.tarjeta('e3', { t: 'Comercio ecológico', right: '10vw', top: '56vh', delay: 0.5 }); } },
      { t: 'Sin embargo, otros enfoques, como el hidrocéntrico, el regenerativo, la autonomía territorial, las redes de cuidado y la gobernanza heterárquica, amplían las posibilidades del proyecto', a: (X) => {
        X.limpiar(); const f = ['Hidrocéntrico', 'Regenerativo', 'Autonomía territorial', 'Redes de cuidado', 'Gobernanza heterárquica'];
        f.forEach((t, i) => { const a = (i / f.length) * Math.PI * 2 - Math.PI / 2; X.tarjeta('f' + i, { k: 'enfoque futuro', t, left: 40 + Math.cos(a) * 30, top: (42 + Math.sin(a) * 28) + 'vh', delay: i * 0.18 }); });
      } },
      { t: 'y requieren nuevas reglas e indicadores para comprobar su funcionamiento.', a: (X) => { X.titulo('Nuevas *reglas* e *indicadores*', { cls: 'centro chico' }); } },
      { t: 'Kennedy constituye el área de estudio donde se ponen a prueba estas relaciones, permitiendo explorar futuras aplicaciones del modelo a otras escalas de Bogotá.', a: (X) => { X.limpiar(); X.mercados(false); X.cam('lejos', 5); X.titulo('Kennedy → *otras escalas* de Bogotá', { width: 50, cls: 'chico' }); } },
      { t: 'Así, el proyecto plantea una forma de diseñar la ciudad desde sus interdependencias, comprendiendo que cada intervención modifica múltiples dinámicas y que sus consecuencias pueden evaluarse antes de su materialización.', a: (X) => { X.limpiar(); X.cam('alto', 4); X.capa('agentes'); X.capa('flujos'); X.titulo('Diseñar la ciudad desde sus *interdependencias*', { cls: 'centro' }); } },
      { t: 'Muchas gracias.', a: (X) => { X.limpiar(); X.capas(['red6', 'red-pot'], false); X.capas(['especies', 'vias-prin']); X.titulo('Muchas *gracias*', { cls: 'centro' }); X.bloque('aut', '<span class="mono" style="color:#b9bcb3">Kennedy · modelamiento dinámico y simulación</span>', { left: 38, top: '64vh' }); } },
    ],
  },
];
