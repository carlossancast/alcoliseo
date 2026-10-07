# ALCOLISEO — sitio web en HTML

Sitio estático: **HTML + CSS + JavaScript**, sin instalar nada.

## Abrirlo
Doble clic en `index.html`. Listo.
(El mapa de Google solo aparece cuando el sitio está publicado en internet; en local se ve la tarjeta con el botón "Abrir en Google Maps".)

## Archivos
```
index.html      ← estructura y SEO (title, description, Open Graph, schema BarOrPub)
styles.css      ← diseño
data.js         ← ✏️ TODO lo editable: temporada, links, horarios, eventos, bebidas, fotos
app.js          ← animaciones e interacciones (no hace falta tocarlo)
assets/         ← imágenes, video, fuentes, logo, menú
```

## Editar contenido (solo `data.js`)
- **Temporada:** `season: "halloween"` · `"normal"` · `"auto"` (Halloween del 1 oct al 3 nov).
- **Reservaciones / WhatsApp / Instagram / TikTok / menú:** bloque `config`.
- **Eventos:** agrega o quita objetos en `events`. Fotos verticales 800×1100 en `assets/events/`.
- **Bebidas:** `drinks`. Fotos 3:4 en `assets/drinks/`. `price: ""` lo oculta.
- **Collage y feed:** `experience` y `social`.

## Cambiar imágenes
Reemplaza el archivo en `assets/` con **el mismo nombre**.
| Archivo | Uso |
| --- | --- |
| `logo.webp` / `logo-halloween.webp` | Logo normal / Halloween (⚠️ `logo.webp` hoy es copia del de Halloween) |
| `romano.webp` | Romano 3D sin fondo (CTA final) |
| `romano-sticker.webp` | Romano ilustrado (Manifiesto) |
| `romano-zombie-escena.jpg` | Póster de Halloween |
| `hero-alcoliseo.mp4` / `-mobile.mp4` / `.jpg` | Video vertical del hero (y su póster) |
| `drinks/01–03.jpg` | ⚠️ Siguen siendo placeholders |
| `og-image.jpg` | Imagen al compartir el link (1200×630) |

## Publicar en Netlify (2 minutos, gratis)
1. Descomprime el .zip.
2. Entra a **app.netlify.com/drop** (crea cuenta gratis con Google si te lo pide).
3. Arrastra **la carpeta `alcoliseo-html` completa** al recuadro.
4. En ~30 s te da un link tipo `https://nombre-raro-123.netlify.app` → ya es público.
5. *Site configuration → Change site name* → ponle `alcoliseo` (si está libre) → `https://alcoliseo.netlify.app`.
6. Dominio propio (opcional): *Domain management → Add a domain*.
7. Para actualizar: *Deploys* → arrastra otra vez la carpeta.

Cuando tengas la URL final, cambia `https://alcoliseo.mx` en `og:image` y `twitter:image` de `index.html` para que la imagen salga al compartir el link en WhatsApp.

También funciona en cualquier hosting (GoDaddy, Hostinger, Vercel, GitHub Pages): sube los archivos tal cual.
