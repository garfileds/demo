webpackJsonp([6],{"+Nj0":function(t,e,a){"use strict";function r(t){a("grs+")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),o=a("fZjL"),s=a.n(o),l=a("xUMh"),d=a("NYxO"),c=a("+2L+"),u=a("pumu"),p={name:"userLogin",data:function(){return{email:"",password:"",validRule:{submitEl:"#btnLogin",submitHandler:"submitLoginHandler",msgAlert:"alert",rules:{email:[{pattern:"required",errMsg:"邮箱不能为空"},{pattern:/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i,errMsg:"请输入有效的邮箱格式"}],password:[{pattern:"required",errMsg:"密码不能为空"}]}}}},mounted:function(){var t=this,e=[],a=function(t){return"alert"===t?alert.bind(window):"function"==typeof t?t:void 0},r=function(e,r){var i=void 0;return"required"===e.pattern?i=function(t,e,a,r){this[t].length>0?r():(a(this.validRule.msgAlert)(e.errMsg),r({err:e.errMsg}))}:e.pattern instanceof RegExp?i=function(t,e,a,r){e.pattern.test(this[t])?r():(a(this.validRule.msgAlert)(e.errMsg),r({err:e.errMsg}))}:"function"==typeof e.pattern&&(i=e.pattern),i.bind(t,r,e,a)};s()(this.validRule.rules).forEach(function(a){t.validRule.rules[a].forEach(function(t){var i=r(t,a);return e.push(i)})}),this.$el.querySelector(this.validRule.submitEl).addEventListener("click",function(a){a.preventDefault(),Object(c.a)(e,function(t,e,a){return t(a)},function(e){t[t.validRule.submitHandler](!e)})},!1)},methods:n()({submitLoginHandler:function(t){var e=this;t&&this.$http.post("/api/user/token",{email:e.email,password:e.password}).then(function(t){200===t.status&&(Object(u.a)(t.body.token),e.changeNeedInit(!0),e.initUser(t.body),e.$router.push("/home"))},function(){window.alert("用户名或密码不正确")})},navBack:function(){this.$router.go(-1)}},Object(d.d)(["changeNeedInit","initUser"])),components:{kBg:l.a}},m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("kBg"),t._v(" "),r("header",{staticClass:"header l-grid"},[r("div",{staticClass:"l-header__side l-grid__item--15"},[r("img",{staticClass:"response-img",attrs:{src:a("Ic3c"),alt:"返回"},on:{click:t.navBack}})])]),t._v(" "),r("div",{staticClass:"l-wrap content"},[r("section",{staticClass:"c-form"},[t._m(0),t._v(" "),r("form",{staticClass:"c-form__content"},[r("fieldset",{staticClass:"c-form__group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"c-form__input c-form__input--group c-form__input--full",attrs:{type:"email",placeholder:"邮箱地址"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"c-form__input c-form__input--group c-form__input--full",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t._m(1)])])])],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-form__title"},[a("p",{staticClass:"font--large"},[t._v("登录到Up!Up!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-fieldset"},[a("button",{staticClass:"c-button l-button--full",attrs:{id:"btnLogin"}},[t._v("登录")])])}],v={render:m,staticRenderFns:f},g=v,b=a("VU/8"),_=r,h=b(p,g,!1,_,"data-v-587a08b0",null);e.default=h.exports},"grs+":function(t,e,a){var r=a("sqgE");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("5dfd9696",r,!0)},sqgE:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".c-form[data-v-587a08b0]{display:block;width:100%}.c-form__group[data-v-587a08b0]{border:none}.c-form__title[data-v-587a08b0]{text-align:center;padding:1em 0}.c-form__content[data-v-587a08b0]{padding:.5em 0 1em}.c-form__input[data-v-587a08b0]{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle}.c-form__input--group[data-v-587a08b0]{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.c-form__input--full[data-v-587a08b0]{width:100%}.c-form__input--group[data-v-587a08b0]:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.c-form__input--group[data-v-587a08b0]:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.c-form__input[data-v-587a08b0]:focus{outline:0;border-color:var(--color-dark-primary);z-index:3}.l-fieldset[data-v-587a08b0]{padding:.35em .75em .625em}.c-button-group[data-v-587a08b0]{padding:0 1em}.c-button[data-v-587a08b0]{background:var(--button-primary-fill);border:none;padding:.5em;color:var(--color-white);font-size:1rem;text-align:center}.c-button--success[data-v-587a08b0]{background:var(--button-success-fill)}.c-button--small[data-v-587a08b0]{font-size:.625em}.l-button--full[data-v-587a08b0]{display:inline-block;width:100%}.l-button--full-align[data-v-587a08b0]{padding:0 .75em}.l-header__side[data-v-587a08b0]{padding:1em;max-width:64px}",""])}});