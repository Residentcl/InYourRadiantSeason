# InYourRadiantSeason static site

Sitio estático sin Astro ni dependencias. Está listo para GitHub Pages en:

https://residentcl.github.io/InYourRadiantSeason/

## Cómo publicarlo

1. Descomprime este ZIP.
2. Sube todo el contenido de la carpeta `InYourRadiantSeason-static` a la raíz del repositorio `residentcl/InYourRadiantSeason`.
3. En GitHub: `Settings → Pages → Build and deployment → Source → Deploy from a branch`.
4. Selecciona branch `main` y carpeta `/root`.
5. Guarda. GitHub publicará el sitio.

## Estructura

- `index.html`: selector de idioma.
- `en/`, `es/`, `ko/`, `ja/`: secciones por idioma.
- `assets/css/style.css`: diseño visual.
- `assets/js/site.js`: comportamiento básico de spoilers.
- `.nojekyll`: evita procesamiento Jekyll en GitHub Pages.

Las rutas son relativas, por lo que funcionan en GitHub Pages bajo `/InYourRadiantSeason/`.
