webpackJsonp([6],{"2kyJ":function(t,e){},"h+mQ":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("hxP8"),s=i("7ZZd"),o=i("E4LH"),n={props:{},data:function(){return{email:"",emailCode:"",btnLoad:!1,codes:{text:"获取验证码",status:!1,time:60}}},created:function(){this.email=this.$route.query.email},methods:{confirm:function(){var t=this;if(!this.btnLoad){if(6!=this.emailCode.length)return this.$message.info("请输入正确的验证码"),!1;this.btnLoad=!0;var e={email:this.email,capicha:this.emailCode};this.$store.dispatch("valid_email_status",e).then(function(e){0==e.data.result?(t.btnLoad=!1,t.$router.replace({path:"/new",query:{email:t.email,code:t.emailCode}})):t.btnLoad=!1}).catch(function(e){t.btnLoad=!1})}},getCode:function(){var t=this;if(!this.codes.status){if(!Object(o.a)(this.email))return this.$message.info("请输入正确格式的邮箱"),!1;var e={email:this.email};this.$store.dispatch("get_email_code",e).then(function(e){if(0==e.data.result){var i=t;setTimeout(function(){i.codes.status=!0,i.codes.text=i.codes.time+"s 后重新发送"},800);var a=window.setInterval(function(){i.codes.text=i.codes.time+"s 后重新发送",--i.codes.time,i.codes.time<0&&(i.codes.text="获取验证码",i.codes.time=60,i.codes.status=!1,window.clearInterval(a))},1e3)}}).catch(function(t){})}}},components:{Header:a.a,UserFoot:s.a}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"verify_wrapper"},[i("Header"),t._v(" "),i("el-row",{staticClass:"verify_content",attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{staticClass:"verify_page box",attrs:{xs:4,sm:6,md:8,lg:9,xl:2}},[i("div",{staticClass:"title"},[t._v("邮箱验证")]),t._v(" "),i("div",{staticClass:"deputy_title"},[t._v("请输入您的邮箱 "+t._s(t.email)+" 收到的验证码")]),t._v(" "),i("div",{staticClass:"attention_title"},[t._v("邮箱验证码可能被判定为垃圾邮件，请注意查收")]),t._v(" "),i("el-form",[i("el-form-item",{attrs:{prop:"emailCode"}},[i("el-input",{attrs:{placeholder:"邮箱验证码",autofocus:"autofocus"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirm(e)}},model:{value:t.emailCode,callback:function(e){t.emailCode=e},expression:"emailCode"}})],1),t._v(" "),i("el-form-item",{staticClass:"reset_btn"},[i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.confirm(e)}}},[t._v("确认")])],1)],1),t._v(" "),i("div",{staticClass:"tip"},[i("div",{staticClass:"forget_password"},[t._v("没有收到验证码? "),i("a",{attrs:{href:"javascript:;"},on:{click:t.getCode}},[t._v(t._s(t.codes.text))])])])],1)],1),t._v(" "),i("user-foot")],1)},staticRenderFns:[]};var c=i("VU/8")(n,r,!1,function(t){i("2kyJ")},"data-v-805d4c9e",null);e.default=c.exports}});
//# sourceMappingURL=6.fc48cacfd8e37af4c8e2.js.map