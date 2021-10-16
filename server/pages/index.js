exports.ids = [6];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/pages/index.vue?vue&type=template&id=76b3fb72&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"home"},[_vm._ssrNode("<div class=\"py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center\"><div class=\"flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden\"><div class=\"home__welcome markdown\">"+(_vm._s(_vm.$md.render(_vm.welcomeText)))+"</div> <div class=\"mb-12 xl:mb-0\">"+((_vm.isSignedUp)?("<h4>Thank you - we'll be in touch shortly.</h4>"):("<form name=\"signups\" netlify class=\"flex items-center border-b border-b-2 border-blue-400 py-2\"><input type=\"text\" name=\"email\" placeholder=\"your@email.com\" aria-label=\"Email address\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"appearance-none mb-36 bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none\"> <button type=\"submit\" class=\"flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded\">\n            Sign Up\n          </button></form>"))+"</div></div> <div class=\"flex flex-col w-full xl:w-2/5\"><img alt=\"Hero\" src=\"https://source.unsplash.com/random/720x400\" class=\"rounded shadow-xl\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./app/pages/index.vue?vue&type=template&id=76b3fb72&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(32);

// EXTERNAL MODULE: ./app/content/settings/general.json
var general = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./app/pages/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let pagesvue_type_script_lang_ts_Home = class Home extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.welcomeText = general.welcomeText;
    this.isSignedUp = false;
    this.form = {
      email: ''
    };
  }

  get posts() {
    return this.$store.state.posts;
  }

  encode(data) {
    return Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');
  }

  validEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async handleSubmit() {
    if (!this.validEmail(this.form.email)) {
      this.$refs.emailInput.focus();
      return;
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'signups',
          ...this.form
        })
      });
      this.isSignedUp = true;
    } catch (error) {
      console.error(error);
    }
  }

};
pagesvue_type_script_lang_ts_Home = __decorate([Object(external_nuxt_property_decorator_["Component"])({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  }

})], pagesvue_type_script_lang_ts_Home);
/* harmony default export */ var pagesvue_type_script_lang_ts_ = (pagesvue_type_script_lang_ts_Home);
// CONCATENATED MODULE: ./app/pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var app_pagesvue_type_script_lang_ts_ = (pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./app/pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "503997a0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;