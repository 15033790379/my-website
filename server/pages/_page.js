exports.ids = [2];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about.json": 13,
	"./test.json": 14
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 41;

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/pages/_page.vue?vue&type=template&id=d221842e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"page",class:_vm.page.slug},[_vm._ssrNode("<h1 class=\"page__title text-lg md:text-xl lg:text-4xl xl:text-6xl text-center py-8 md:py-16\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.page.title)+"\n  ")+"</h1> <div class=\"page__content markdown pt-4 md:pt-6 md:pb-24\">"+(_vm._s(_vm.$md.render(_vm.page.content)))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./app/pages/_page.vue?vue&type=template&id=d221842e&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./app/pages/_page.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let _pagevue_type_script_lang_ts_PageTemplate = class PageTemplate extends external_nuxt_property_decorator_["Vue"] {
  async asyncData({
    params,
    payload
  }) {
    if (payload) {
      return {
        page: payload
      };
    }

    try {
      const page = __webpack_require__(41)(`./${params.page}.json`);

      return {
        page
      };
    } catch (e) {
      throw new Error('Not found');
    }
  }

};
_pagevue_type_script_lang_ts_PageTemplate = __decorate([Object(external_nuxt_property_decorator_["Component"])({
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) {
      return 'slide-left';
    }

    return 'slide-right';
  },

  head() {
    return {
      title: this.page.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.page.seoDescription
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: this.page.seoMetaImage
      }]
    };
  }

})], _pagevue_type_script_lang_ts_PageTemplate);
/* harmony default export */ var _pagevue_type_script_lang_ts_ = (_pagevue_type_script_lang_ts_PageTemplate);
// CONCATENATED MODULE: ./app/pages/_page.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_pagevue_type_script_lang_ts_ = (_pagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./app/pages/_page.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pagevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "40a478cc"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/***/ })

};;