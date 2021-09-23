const id = 121;
const ids = [121];
const modules = {

/***/ 121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(161);




function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = (0, external_vue_.resolveComponent)("nuxt-link");
  _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "container" }, _attrs))}>`);
  _push((0, server_renderer_.ssrRenderComponent)(_component_nuxt_link, { to: "/kopet" }, {
    default: (0, external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tasks`);
      } else {
        return [
          (0, external_vue_.createTextVNode)("Tasks")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}


/* harmony default export */ const dist_ruleSet_0_pagesvue_type_script_lang_js = ({
  setup() {
  }
});

 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(dist_ruleSet_0_pagesvue_type_script_lang_js, [['ssrRender',ssrRender]]);

/* harmony default export */ const pages = (__exports__);

/***/ })

};

export { id, ids, modules };
