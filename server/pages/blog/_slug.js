exports.ids = [3];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cat.json": 8,
	"./la-croix.json": 9,
	"./meditation-pop-up-forage.json": 10,
	"./pug-swag.json": 11,
	"./test1.json": 12
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
webpackContext.id = 40;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/pages/blog/_slug.vue?vue&type=template&id=a9b55a8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"post",class:_vm.post.slug},[_vm._ssrNode("<div class=\"py-8 md:py-16 text-center mx-auto\"><h1 class=\"text-lg md:text-xl lg:text-4xl xl:text-6xl\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.post.title)+"\n    ")+"</h1></div> <div class=\"post__content markdown pt-4 md:pt-6 md:pb-24\">"+(_vm._s(_vm.$md.render(_vm.post.content)))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./app/pages/blog/_slug.vue?vue&type=template&id=a9b55a8a&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./app/pages/blog/_slug.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let _slugvue_type_script_lang_ts_BlogPost = class BlogPost extends external_nuxt_property_decorator_["Vue"] {
  async asyncData({
    params,
    payload
  }) {
    if (payload) {
      return {
        post: payload
      };
    }

    try {
      const post = __webpack_require__(40)(`./${params.slug}.json`);

      return {
        post
      };
    } catch (e) {
      throw new Error('Not found');
    }
  }

};
_slugvue_type_script_lang_ts_BlogPost = __decorate([Object(external_nuxt_property_decorator_["Component"])({
  head() {
    return {
      title: this.post.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.post.seoDescription
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: this.post.seoMetaImage
      }]
    };
  }

})], _slugvue_type_script_lang_ts_BlogPost);
/* harmony default export */ var _slugvue_type_script_lang_ts_ = (_slugvue_type_script_lang_ts_BlogPost);
// CONCATENATED MODULE: ./app/pages/blog/_slug.vue?vue&type=script&lang=ts&
 /* harmony default export */ var blog_slugvue_type_script_lang_ts_ = (_slugvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./app/pages/blog/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34922622"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;