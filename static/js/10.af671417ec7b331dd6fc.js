webpackJsonp([10],{"aRi+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("hxP8"),a=n("7ZZd"),i=n("E4LH"),r={props:{},data:function(){return{pwd:"",newpwd:"",email:"",emailCode:"",btnLoad:!1}},created:function(){this.email=this.$route.query.email,this.emailCode=this.$route.query.code},components:{Header:s.a,UserFoot:a.a},methods:{confirm:function(){var e=this;if(!Object(i.b)(this.pwd))return this.$message.info("请输入正确格式的密码"),!1;if(!this.newpwd)return this.$message.info("确认密码不能为空"),!1;if(this.newpwd!==this.pwd)return this.$message.info("两次输入密码不一致"),!1;this.btnLoad=!0;var t={user:this.email,passwd:this.pwd,capicha:this.emailCode};this.$store.dispatch("reset_pwd",t).then(function(t){0==t.data.result?(e.btnLoad=!1,e.$message.success("重置密码成功"),e.$router.replace("/login")):e.btnLoad=!1}).catch(function(t){e.btnLoad=!1})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new_wrapper"},[n("Header"),e._v(" "),n("el-row",{staticClass:"new_content",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{staticClass:"new_page",attrs:{xs:4,sm:6,md:8,lg:9,xl:2}},[n("div",{staticClass:"title"},[e._v("新密码")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{prop:"pwd"}},[n("el-input",{attrs:{type:"password",placeholder:"密码",autofocus:"autofocus"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm(t)}},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"newpwd"}},[n("el-input",{attrs:{type:"password",placeholder:"确认密码",autofocus:"autofocus"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm(t)}},model:{value:e.newpwd,callback:function(t){e.newpwd=t},expression:"newpwd"}})],1),e._v(" "),n("el-form-item",{staticClass:"reset_btn"},[n("el-button",{attrs:{type:"primary",loading:e.btnLoad},nativeOn:{click:function(t){return e.confirm(t)}}},[e._v("确认")])],1)],1)],1)],1),e._v(" "),n("user-foot")],1)},staticRenderFns:[]};var d=n("VU/8")(r,o,!1,function(e){n("lDd2")},"data-v-525742e7",null);t.default=d.exports},lDd2:function(e,t){}});
//# sourceMappingURL=10.af671417ec7b331dd6fc.js.map