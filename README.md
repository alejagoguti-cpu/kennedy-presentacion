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
