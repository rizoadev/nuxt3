const dynamicChunks = {
 ['112.mjs']: () => import('./app/112.mjs'),
 ['865.mjs']: () => import('./app/865.mjs'),
 ['932.mjs']: () => import('./app/932.mjs'),
 ['161.mjs']: () => import('./app/161.mjs'),
 ['121.mjs']: () => import('./app/121.mjs'),
 ['807.mjs']: () => import('./app/807.mjs')
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
