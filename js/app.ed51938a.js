(function(t){function e(e){for(var o,a,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/notes-test-task/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"054b":function(t,e,n){},"456a":function(t,e,n){"use strict";var o=n("a708"),s=n.n(o);s.a},"46ca":function(t,e,n){"use strict";var o=n("054b"),s=n.n(o);s.a},5202:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=n("ecee"),i=n("c074"),a=n("ad3d");s["c"].add(i["a"]),o["a"].component("font-awesome-icon",a["a"]);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-content"},[n("header",[n("div",{staticClass:"container"},[n("div",{staticClass:"main-header"},[n("h1",[t._v(" "+t._s(t.title))]),t.isHomePage?n("div",{staticClass:"create-btn"},[n("router-link",{attrs:{to:"/note/0"}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1):n("div",{staticClass:"return-btn",on:{click:function(e){t.showCancelEditModal=!0}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)])])]),n("section",[n("div",{staticClass:"container"},[n("router-view")],1)])]),t.showCancelEditModal?n("BaseModal",{attrs:{title:"Cancel"},on:{change:t.cancelEdit,close:function(e){t.showCancelEditModal=!1}}},[n("div",{staticClass:"delete-body",attrs:{slot:"body"},slot:"body"},[n("p",[t._v("Are you sure that you want to cancel edit this note?")])])]):t._e()],1)},r=[],l=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes"},[t._l(t.notes,(function(e){return n("div",{key:e.id,staticClass:"note"},[n("div",{staticClass:"note-header"},[n("router-link",{attrs:{to:"/note/"+e.id}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1),n("p",[t._v(t._s(e.title))]),n("p",{on:{click:function(n){return t.selectNote(e.id)}}},[n("font-awesome-icon",{staticClass:"remove-icon",attrs:{icon:"times"}})],1)],1),n("div",{staticClass:"note-body"},t._l(e.todoItems,(function(t,e){return n("TodoItem",{key:e,attrs:{todoItem:t,disabled:!0}})})),1)])})),t.showDeleteModal?n("BaseModal",{attrs:{title:"Delete"},on:{change:t.removeNote,close:function(e){t.showDeleteModal=!1}}},[n("div",{staticClass:"delete-body",attrs:{slot:"body"},slot:"body"},[n("p",[t._v("Are you sure that you want to delete this note?")])])]):t._e()],2)}),u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal__wrapper",on:{click:function(e){return t.$emit("close")}}},[n("div",{staticClass:"modal-content",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal-header"},[n("span",{staticClass:"modal-title"},[t._v(" "+t._s(t.title)+" ")]),n("span",{staticClass:"button-close",on:{click:function(e){return t.$emit("close")}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)]),n("div",{staticClass:"modal-body"},[t._t("body",[t._v("default body")]),n("AppButton",{staticClass:"btnSuccess",staticStyle:{float:"left"},on:{click:function(e){return t.$emit("change")}}},[t._v("Yes")]),n("AppButton",{staticClass:"btnDanger",staticStyle:{float:"right"},on:{click:function(e){return t.$emit("close")}}},[t._v("No")])],2)])])])},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g(t._b({staticClass:"btn",class:t.btnClass},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},m=[],h={name:"Button",props:{btnClass:{type:String,default:function(){return"btnDefault"}}}},v=h,b=n("2877"),y=Object(b["a"])(v,p,m,!1,null,null,null),_=y.exports,C={name:"BaseModal",components:{AppButton:_},props:{title:{type:String,required:!0}},mounted:function(){var t=this;document.body.addEventListener("keyup",(function(e){27===e.keyCode&&t.$emit("close")}))}},g=C,w=(n("46ca"),Object(b["a"])(g,d,f,!1,null,"e1f008fc",null)),N=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"todo-item"},[n("Checkbox",{staticStyle:{width:"80%"},attrs:{disabled:t.disabled},model:{value:t.item.active,callback:function(e){t.$set(t.item,"active",e)},expression:"item.active"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})]),t.disabled?t._e():n("AppButton",{staticClass:"btnDanger",on:{click:function(e){return t.$emit("remove")}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1):t._e()},I=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox"},[n("input",t._b({attrs:{type:"checkbox",id:t.id},domProps:{checked:t.value},on:{change:function(e){return t.$emit("input",e.target.checked)}}},"input",t.$attrs,!1)),n("label",{attrs:{for:t.id}},[t._t("default")],2)])},O=[],x={name:"Checkbox",props:{value:{type:Boolean,required:!0}},data:function(){return{id:null}},mounted:function(){this.id=this._uid}},M=x,S=(n("bc76"),Object(b["a"])(M,$,O,!1,null,null,null)),D=S.exports,B={name:"TodoItem",components:{Checkbox:D,AppButton:_},props:{todoItem:{type:Object,required:!0},disabled:{type:Boolean,default:function(){return!1}}},computed:{item:function(){return this.todoItem}}},j=B,E=(n("456a"),Object(b["a"])(j,k,I,!1,null,null,null)),P=E.exports,A={name:"Notes",components:{TodoItem:P,BaseModal:N},data:function(){return{showDeleteModal:!1,selectedNoteId:null}},computed:{notes:function(){return this.$store.getters.getNotes}},methods:{selectNote:function(t){this.selectedNoteId=t,this.showDeleteModal=!0},removeNote:function(){this.$store.commit("removeNote",this.selectedNoteId),this.showDeleteModal=!1}}},T=A,J=(n("b9c8"),Object(b["a"])(T,l,u,!1,null,null,null)),q=J.exports,H={components:{Notes:q,BaseModal:N},data:function(){return{title:"Notes",showCancelEditModal:!1}},computed:{isHomePage:function(){return"notes"===this.$route.name}},methods:{cancelEdit:function(){this.showCancelEditModal=!1,this.$router.push({path:"/"})}}},L=H,Y=(n("5c0b"),Object(b["a"])(L,c,r,!1,null,null,null)),z=Y.exports,F=(n("c1c3"),n("8c4f")),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-edit"},[n("div",{staticClass:"note-edit__title"},[n("label",[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}})]),n("div",{staticClass:"note-edit__todo-list"},[n("label",[t._v("Todo list")]),t._l(t.note.todoItems,(function(e,o){return n("TodoItem",{key:o,attrs:{todoItem:e},on:{remove:function(n){return t.removeTodo(e.id)}}})})),n("AppButton",{staticClass:"btnSuccess",on:{click:function(e){return t.addTodo()}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)],2),n("div",{staticClass:"note-edit__btns"},[n("AppButton",{staticClass:"btnSuccess",staticStyle:{float:"left"},on:{click:function(e){return t.saveNote(t.note)}}},[n("font-awesome-icon",{attrs:{icon:"save"}})],1),t.isNoteChanged?n("AppButton",{staticClass:"btnPrimary",on:{click:t.discardChange}},[n("font-awesome-icon",{attrs:{icon:t.discardIcon}})],1):t._e(),t.canCancelDiscard?n("AppButton",{staticClass:"btnPrimary",on:{click:t.cancelDiscardChange}},[n("font-awesome-icon",{attrs:{icon:t.cancelDiscardIcon}})],1):t._e(),t.note.id?n("AppButton",{staticClass:"btnDanger",staticStyle:{float:"right"},on:{click:function(e){t.showDeleteModal=!0}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1):t._e()],1),t.showDeleteModal?n("BaseModal",{attrs:{title:"Delete"},on:{change:t.removeNote,close:function(e){t.showDeleteModal=!1}}},[n("div",{staticClass:"delete-body",attrs:{slot:"body"},slot:"body"},[n("p",[t._v("Are you sure that you want to delete this note?")])])]):t._e()],1)},K=[],Q=(n("6d67"),n("20d6"),{name:"NoteEdit",components:{AppButton:_,TodoItem:P,BaseModal:N},data:function(){return{showDeleteModal:!1,note:null,oldNote:null,newNote:null,canCancelDiscard:!1,discardIcon:"undo",cancelDiscardIcon:"redo"}},created:function(){var t=parseInt(this.$route.params.id);if(this.note={title:"",todoItems:[]},t){var e=this.$store.getters.getNoteById(t);e&&(this.note=JSON.parse(JSON.stringify(e)))}this.oldNote=JSON.parse(JSON.stringify(this.note))},computed:{isNoteChanged:function(){return JSON.stringify(this.oldNote)!==JSON.stringify(this.note)&&(this.canCancelDiscard=!1,!0)}},methods:{removeNote:function(){this.$store.commit("removeNote",this.note.id),this.showDeleteModal=!1,this.$router.push({path:"/"})},saveNote:function(t){if(!t.id){var e=this.findMaxId(this.$store.getters.getNotes);t.id=e+1}this.$store.commit("saveNote",t),this.$router.push({path:"/"})},removeTodo:function(t){var e=this.note,n=e.todoItems.findIndex((function(e){return e.id===t}));-1!==n&&e.todoItems.splice(n,1)},discardChange:function(){this.newNote=this.note,this.note=JSON.parse(JSON.stringify(this.oldNote)),this.canCancelDiscard=!0},cancelDiscardChange:function(){this.oldNote=JSON.parse(JSON.stringify(this.note)),this.note=this.newNote,this.canCancelDiscard=!1},addTodo:function(){var t=this.findMaxId(this.note.todoItems);this.note.todoItems.push({id:t+1,title:"",active:!1})},findMaxId:function(t){var e=1;return t.map((function(t){t.id>e&&(e=t.id)})),e}}}),R=Q,U=(n("788a"),Object(b["a"])(R,G,K,!1,null,null,null)),V=U.exports;o["a"].use(F["a"]);var W=new F["a"]({routes:[{path:"/",name:"notes",component:q},{path:"/note/:id",name:"noteedit",component:V}]}),X=(n("7514"),n("2f62")),Z=n("0e44");o["a"].use(X["a"]);var tt=new X["a"].Store({state:{notes:[]},mutations:{removeNote:function(t,e){var n=t.notes.findIndex((function(t){return t.id===e}));-1!==n&&t.notes.splice(n,1)},saveNote:function(t,e){var n=t.notes.findIndex((function(t){return t.id===e.id}));-1===n?t.notes.push(e):t.notes[n]=e}},actions:{},getters:{getNotes:function(t){return t.notes},getNoteById:function(t){return function(e){return t.notes.find((function(t){return t.id===e}))}}},plugins:[Object(Z["a"])()]});o["a"].config.productionTip=!1,new o["a"]({router:W,store:tt,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5202"),s=n.n(o);s.a},"5c4d":function(t,e,n){},"788a":function(t,e,n){"use strict";var o=n("5c4d"),s=n.n(o);s.a},"7f41":function(t,e,n){},a708:function(t,e,n){},b9c8:function(t,e,n){"use strict";var o=n("c899"),s=n.n(o);s.a},bc76:function(t,e,n){"use strict";var o=n("7f41"),s=n.n(o);s.a},c1c3:function(t,e,n){},c899:function(t,e,n){}});