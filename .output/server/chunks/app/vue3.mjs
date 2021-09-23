import { a as serverRenderer } from '../index.mjs';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    }
  }
  return Object.freeze(n);
}

var vue3$1 = {};

Object.defineProperty(vue3$1, "__esModule", {
  value: true
});
var renderToString_1 = vue3$1.renderToString = void 0;

var _serverRenderer = serverRenderer.exports;

const renderToString = (...args) => {
  return (0, _serverRenderer.renderToString)(...args).then(result => `<div id="__nuxt">${result}</div>`);
};

renderToString_1 = vue3$1.renderToString = renderToString;

const vue3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  get renderToString () { return renderToString_1; },
  'default': vue3$1
}, [vue3$1]));

export { vue3 as v };
