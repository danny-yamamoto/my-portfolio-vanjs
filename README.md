# VanJS App 🍨

- [VanJS Docs](https://vanjs.org/tutorial)
- [VanJS GitHub](https://github.com/vanjs-org/van)
- [Vite](https://vitejs.dev/)

## Project Structure
```bash
├── favicon.ico
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── footer.ts
│   ├── head.ts
│   └── main.ts
├── styles
│   └── styles.css
└── tsconfig.json
```

## Add Integrations and deployment
```bash
npm create vite@latest
npm install vanjs-core
npm install
```

## Development
```bash
npm run dev
```

```bash
node ➜ /workspaces/my-portfolio-vanjs (main) $ npm run dev

> my-portfolio-vanjs@0.0.0 dev
> vite


  VITE v4.4.9  ready in 470 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Production
```bash
npm run build
```

```bash
node ➜ /workspaces/my-portfolio-vanjs (main) $ npm run build

> my-portfolio-vanjs@0.0.0 build
> tsc && vite build

vite v4.4.9 building for production...
✓ 8 modules transformed.
dist/index.html                    0.97 kB │ gzip: 0.43 kB
dist/assets/favicon-91013c4a.ico  15.09 kB
dist/assets/index-41859b51.css     0.70 kB │ gzip: 0.37 kB
dist/assets/index-f222339d.js      4.63 kB │ gzip: 2.19 kB
✓ built in 290ms
node ➜ /workspaces/my-portfolio-vanjs (main) $
```

## Deploy a VanJS site
- [See Cloudflare official docs.](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
