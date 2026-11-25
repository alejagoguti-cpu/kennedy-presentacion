# Kennedy · Modelamiento dinámico y simulación — presentación

Presentación animada para la sustentación. Avanza **frase por frase** del guion: cada clic dispara la animación de lo que se está diciendo, así la imagen va siempre sincronizada con la voz.

## Controles
| Tecla | Acción |
|---|---|
| → · Espacio · Enter · clic · control remoto (PageDown) | siguiente frase |
| ← · PageUp · clic derecho | frase anterior (reconstruye el estado exacto) |
| F | pantalla completa |
| P | abre la **vista de presentadora** en otra ventana: frase actual, la siguiente, cronómetro y botones |
| S | stop-motion 12 fps ↔ fluido 60 fps |
| T | subtítulos con la frase actual (para ensayar) |
| A | modo automático (ensayo con tiempos estimados) |
| B | oculta/mostrar la capa de textos |
| Home | volver al inicio |

La URL guarda la frase actual (`#57`): al recargar se vuelve al mismo punto.

## Estructura
- `src/guion.js` — los 17 capítulos y las 148 frases, cada una con su animación.
- `src/mundo.js` — Kennedy en 3D con datos reales (edificios, vías, agua, UPZ, puntos de cada problema, redes, propuesta).
- `src/ui.js` — titulares cinéticos, cifras que se decodifican, tarjetas, fotos, comparaciones.
- `src/trans.js` — transiciones 3D entre capítulos (pliegue, persiana, recorte, cubo, esquina, escalera, vuelo).
- `public/` — datos y recursos copiados de red-de-problemas, macromodelos-kennedy, problemaskennedy, simulador y humedalburro.

## Publicar
`npm install` · `npx vite build` (sale en `docs/`) · commit + push. Pages: rama `main`, carpeta `/docs`.
Probar: `npx vite preview --port 4330` y `node tools/cap.mjs <carpeta> 1,s8`.

## Realismo y rendimiento
- Hora dorada sobre Bogotá con los fotogramas clave de cielo del simulador: nubes, horizonte cálido, cerros orientales y niebla.
- Edificios con altura real, ladrillo y concreto, cubiertas, ventanas (algunas encendidas) y oclusión al pie. Las calles tienen ancho según su jerarquía, los parques reales llevan pasto y hay 119.886 árboles reales. El agua y el cromo reflejan el cielo.
- Optimización: edificios y árboles se dibujan como instancias agrupadas en teselas de 1,2–1,6 km, así la GPU descarta lo que no está en cámara. Los edificios no tienen cara inferior. Los árboles solo aparecen cuando se distinguen y la sombra solo cubre el área visible. Las texturas son de 512 px y los datos van en binario compacto (`tools/realismo_build.mjs`).
- Un gobernador mide el intervalo real entre cuadros y, si la máquina no da, baja la resolución, luego la sombra y luego las sombras de los árboles.
- `node tools/rend.mjs` (con `npx vite preview --port 4330` corriendo) mide los ms por cuadro, las llamadas de dibujo y los triángulos.
