const id = 112;
const ids = [112,932,161,865];
const modules = {

/***/ 346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(703)/* ["default"] */ .Z;
module.exports.__inject__ = function (context) {
  add("74558508", content, true, context);
};

/***/ }),

/***/ 695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(0);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(703)/* ["default"] */ .Z;
module.exports.__inject__ = function (context) {
  add("5fdd767a", content, true, context);
};

/***/ }),

/***/ 932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AddTask)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(161);




function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "flex" }, _attrs))}><div class="card"><div class="card-body"><form action="#"><label class="form-label" for="a1">Add Task</label><div class="my-2" style="${(0, server_renderer_.ssrRenderStyle)({ "position": "relative" })}"><input class="form-control" id="a1" type="text"${(0, server_renderer_.ssrRenderAttr)("value", _ctx.res.value)} placeholder="new task">`);
  if (_ctx.res.loading) {
    _push(`<div class="spinx"><div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading... loading...</span></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div></div></div>`);
}


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(648);




/* harmony default export */ const AddTaskvue_type_script_lang_js = ((0, external_vue_.defineComponent)({
  emits: ["added"],
  setup(props, { emit }) {
    const res = (0, external_vue_.reactive)({
      loading: false,
      value: "",
      Add: async () => {
        res.loading = true;
        const { data } = await external_axios_["default"].post("https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today.json", {
          task: res.value
        });
        if (data) {
          res.value = "";
          res.loading = false;
          emit("added");
        }
      }
    });
    return { res };
  }
}));

 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack-builder/dist/nuxt-setup-loader.cjs!./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[29].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[30].use[0]!./node_modules/vue-style-loader/index.js??clonedRuleSet-38.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-38.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-38.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./components/AddTask.vue?vue&type=style&index=0&id=1a4367da&lang=css
__webpack_require__(346);


// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);


const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(AddTaskvue_type_script_lang_js, [['ssrRender',ssrRender]]);

/* harmony default export */ const AddTask = (__exports__);

/***/ }),

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Task)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(161);




function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "flex d-flex justify-content-between" }, _attrs))}><div>task:<div class="text-primary">${(0, server_renderer_.ssrInterpolate)(_ctx.task.value.task)}</div></div><div class="text-danger pointer">${(0, server_renderer_.ssrInterpolate)(_ctx.res.msg)}</div></div>`);
}


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(648);




/* harmony default export */ const Taskvue_type_script_lang_js = ((0, external_vue_.defineComponent)({
  props: {
    task: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["deleted"],
  setup(props, { emit }) {
    const res = (0, external_vue_.reactive)({
      msg: "delete"
    });
    const busak = () => {
      res.msg = "deleting";
      external_axios_["default"]["delete"](`https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today/${props.task.key}.json`).then(() => {
        emit("deleted", props.task.key);
        res.msg = "delete";
      });
    };
    return { busak, res };
  }
}));

 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack-builder/dist/nuxt-setup-loader.cjs!./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[29].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[30].use[0]!./node_modules/vue-style-loader/index.js??clonedRuleSet-38.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-38.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-38.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./components/Task.vue?vue&type=style&index=0&id=4d9ad4b2&lang=css
__webpack_require__(695);


// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);


const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(Taskvue_type_script_lang_js, [['ssrRender',ssrRender]]);

/* harmony default export */ const Task = (__exports__);

/***/ }),

/***/ 865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tasks)
});

// EXTERNAL MODULE: ./components/AddTask.vue + 5 modules
var AddTask = __webpack_require__(932);
// EXTERNAL MODULE: ./components/Task.vue + 5 modules
var Task = __webpack_require__(562);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(161);




function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AddTask = AddTask["default"];
  const _component_Task = Task["default"];
  _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "flex" }, _attrs))}><div class="flex my-1">`);
  _push((0, server_renderer_.ssrRenderComponent)(_component_AddTask, null, null, _parent));
  _push(`</div><!--[-->`);
  (0, server_renderer_.ssrRenderList)($setup.res.datas, (d) => {
    _push(`<div class="flex my-1"><div class="card"><div class="card-body">`);
    _push((0, server_renderer_.ssrRenderComponent)(_component_Task, { task: d }, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div>`);
}


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(648);




/* harmony default export */ const Tasksvue_type_script_lang_js = ({
  setup() {
    const res = (0, external_vue_.reactive)({
      datas: [],
      Loads: async () => {
        const { data } = await external_axios_["default"].get(`https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today.json`);
        if (data) {
          res.datas = Object.keys(data).map((k) => ({
            key: k,
            value: data[k]
          })).reverse();
        }
      },
      Added: () => {
        res.Loads();
      },
      deleted: (k) => {
        res.Loads();
      }
    });
    (0, external_vue_.onMounted)(() => {
      res.Loads();
    });
    return { res };
  }
});

 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(Tasksvue_type_script_lang_js, [['ssrRender',ssrRender]]);

/* harmony default export */ const Tasks = (__exports__);

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ kopet)
});

// EXTERNAL MODULE: ./components/Tasks.vue + 4 modules
var Tasks = __webpack_require__(865);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(161);




function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Tasks = Tasks["default"];
  _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "container py-4" }, _attrs))}>`);
  _push((0, server_renderer_.ssrRenderComponent)(_component_Tasks, null, null, _parent));
  _push(`</div>`);
}


/* harmony default export */ const kopetvue_type_script_lang_js = ({});

 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(kopetvue_type_script_lang_js, [['ssrRender',ssrRender]]);

/* harmony default export */ const kopet = (__exports__);

/***/ }),

/***/ 83:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(81);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".spinx{position:absolute;right:calc(.375em + .1875rem);top:7px;z-index:4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 0:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(81);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pointer{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesServer)
});
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles
}


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      });
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles;
    }

    var styles = context._styles || (context._styles = {});
    list = listToStyles(parentId, list);
    if (isProduction) {
      addStyleProd(styles, list);
    } else {
      addStyleDev(styles, list);
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts;
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j];
      // group style tags by media types.
      var id = part.media || 'default';
      var style = styles[id];
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id);
          style.css += '\n' + part.css;
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        };
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts;
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j];
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      };
    }
  }
}

function renderStyles (styles) {
  var css = '';
  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>';
  }
  return css
}


/***/ })

};

export { id, ids, modules };
