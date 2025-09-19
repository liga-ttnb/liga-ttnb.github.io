# Liga Deportiva TTNB - Landing Page

Este repositorio contiene la landing page de la Liga Deportiva TTNB, desarrollada con [Next.js](https://nextjs.org) y [React](https://react.dev).

## Scripts disponibles

Consulta el archivo `package.json` para ver los scripts disponibles. Los principales son:

- `npm run dev`: Ejecuta el servidor de desarrollo en local.
- `npm run build`: Genera la versión de producción estática en la carpeta `out`.
- `npm run serve`: Sirve el contenido estático de la carpeta `out` en local.
- `npm run deploy`: Construye y publica automáticamente el contenido de `out` en la rama `gh-pages`.

## Despliegue en GitHub Pages

La rama `gh-pages` contiene únicamente los archivos estáticos generados en la carpeta `out`.  
GitHub Pages está configurado para servir el sitio desde esa rama.

Para automatizar el despliegue, ejecuta:

```bash
npm run deploy
```

Esto construirá el sitio y publicará los archivos en la rama `gh-pages`.

## Desarrollo

Para comenzar a desarrollar:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes editar la página principal en `src/app/page.tsx`. Los cambios se reflejan automáticamente.

---

**Contacto:**  
Para dudas o sugerencias, contacta al equipo de la Liga Deportiva TTNB.