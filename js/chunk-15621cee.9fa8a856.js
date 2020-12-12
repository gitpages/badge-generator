(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15621cee"],{"0ba2":function(e,t,a){"use strict";a("7a3a")},"446e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?a("span",{staticClass:"required"},[e._v("*")]):e._e()]),a("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?a("small",{staticClass:"note"},[a("vue-markdown",[e._v(e._s(e.note))])],1):e._e()])},s=[],r=a("2b0e"),o=a("9ce6"),i=a.n(o),l=a("84f8"),u=r["a"].extend({name:"TextInput",components:{VueMarkdown:i.a},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},note:{type:String,required:!1},isRequired:{type:Boolean,required:!1}},computed:{slug:function(){return Object(l["a"])("text",this.label,this.value)}}}),c=u,p=(a("0ba2"),a("2877")),d=Object(p["a"])(c,n,s,!1,null,"8c0b347a",null);t["a"]=d.exports},7737:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)+" ")]),a("input",{attrs:{id:e.slug,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?a("small",{staticClass:"note"},[a("vue-markdown",[e._v(e._s(e.note))])],1):e._e()])},s=[],r=a("2b0e"),o=a("9ce6"),i=a.n(o),l=a("84f8"),u=r["a"].extend({name:"Checkbox",components:{VueMarkdown:i.a},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(l["a"])("box",this.label)}}}),c=u,p=a("2877"),d=Object(p["a"])(c,n,s,!1,null,null,null);t["a"]=d.exports},"7a3a":function(e,t,a){},"7b65":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"badges container-lg"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"app-input"},[a("h2",[e._v("Input values")]),a("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[a("fieldset",{attrs:{name:"ghRepo"}},[a("legend",[e._v("GitHub repo")]),a("TextInput",{attrs:{label:"Username",isRequired:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("br"),a("TextInput",{attrs:{label:"Repo name",isRequired:""},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}}),a("br"),a("TextInput",{attrs:{label:"License"},model:{value:e.licenseType,callback:function(t){e.licenseType=t},expression:"licenseType"}}),a("br"),a("div",[a("label",[e._v("Version type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"one",value:"tag"},domProps:{checked:e._q(e.versionType,"tag")},on:{change:function(t){e.versionType="tag"}}}),a("label",{attrs:{for:"one"}},[e._v("Tag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"two",value:"release"},domProps:{checked:e._q(e.versionType,"release")},on:{change:function(t){e.versionType="release"}}}),a("label",{attrs:{for:"two"}},[e._v("Release")])])],1),a("br"),a("fieldset",{attrs:{name:"buttons"}},[a("legend",[e._v("Large CTA buttons")]),a("Checkbox",{attrs:{label:"Template",note:"Add a <i>Use This Template</i> button."},model:{value:e.useThisTemplate,callback:function(t){e.useThisTemplate=t},expression:"useThisTemplate"}}),a("br"),a("Checkbox",{attrs:{label:"GitHub Pages",note:"Add link to a GitHub Pages site."},model:{value:e.ghPages,callback:function(t){e.ghPages=t},expression:"ghPages"}})],1),a("br"),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),a("div",{staticClass:"col-6"},[a("Results",{attrs:{result:e.result}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("Help",{attrs:{message:e.note}})],1)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[e._v("Repo badges")])])])}],r=(a("99af"),a("2b0e")),o=a("ca2c"),i=a("7737"),l=a("8169"),u=a("446e"),c=a("2eda"),p="\n- Where to put the badges\n    - Use the Social badges on docs site to link back to your repo.\n    - Or use the Social badges to link to repo you don't own.\n    - Use the Repo metadata and the CTA sections at the top of your `README.md` and also on your docs site.\n- The first social badge is dumb - so you have to make sure you enter a valid repo. A positive of this is that it works for private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n",d=r["a"].extend({name:"RepoBadges",components:{Checkbox:i["a"],Help:o["a"],Results:l["a"],TextInput:u["a"]},data:function(){return{username:"MichaelCurrin",repoName:"badge-generator",licenseType:"MIT",useThisTemplate:!1,ghPages:!1,result:"_Your output will appear here_",versionType:"tag",note:p}},methods:{submit:function(){console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages});var e=new c["a"](this.username,this.repoName),t=e.tagBadge("release"===this.versionType),a=e.licenseBadge(this.licenseType),n=e.gh(),s=e.ghSocial("stars"),r=e.ghSocial("forks"),o=this.useThisTemplate?e.useThisTemplateBadge():"",i=this.ghPages?e.ghPagesBadge():"";this.result="_Social buttons_\n\n".concat(n,"\n").concat(s,"\n").concat(r,"\n\n_Repo metadata_\n\n").concat(t,"\n\n").concat(a,'\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n').concat(o,"\n").concat(i,"\n\n</div>\n      ")}}}),v=d,h=a("2877"),m=Object(h["a"])(v,n,s,!1,null,null,null);t["default"]=m.exports},8169:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-results"},[a("h2",[e._v("Output values")]),a("div",[a("h3",[e._v("Preview")]),a("vue-markdown",{attrs:{source:e.result}})],1),a("div",[a("h3",[e._v("Code")]),a("pre",[a("code",[e._v(e._s(e.result))])])])])},s=[],r=a("2b0e"),o=a("9ce6"),i=a.n(o),l=r["a"].extend({name:"Results",components:{VueMarkdown:i.a},props:{result:String}}),u=l,c=a("2877"),p=Object(c["a"])(u,n,s,!1,null,null,null);t["a"]=p.exports},"84f8":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));a("a15b"),a("ac1f"),a("5319");function n(e){return e.replace(/^\/+/,"")}function s(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.join("-");return n.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},ca2c:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-notes"},[a("h2",[e._v("Notes")]),a("p",[a("vue-markdown",[e._v(" "+e._s(e.message)+" ")])],1)])},s=[],r=a("2b0e"),o=a("9ce6"),i=a.n(o),l=r["a"].extend({name:"Checkbox",components:{VueMarkdown:i.a},props:{message:{type:String,required:!0}}}),u=l,c=a("2877"),p=Object(c["a"])(u,n,s,!1,null,null,null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-15621cee.9fa8a856.js.map