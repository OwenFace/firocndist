webpackJsonp([9],{"NTb/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("hxP8"),r=i("7ZZd"),o=i("E4LH"),n={data:function(){var e=this;return{registInfo:{email:"",emailCode:"",pwd:"",confirmPwd:"",invite:"",check:!1},rules:{email:[{required:!0,message:"邮箱不能为空",trigger:"blur"}],emailCode:[{validator:function(t,i,s){return i?6!=i.length?(e.registInfo.code=!0,s(new Error("请输入正确格式的验证码"))):void(e.registInfo.code=!1):(e.registInfo.code=!0,s(new Error("验证码不能为空")))},trigger:"blur"}],pwd:[{required:!0,message:"密码不能为空",trigger:"blur"}],confirmPwd:[{required:!0,message:"确认密码不能为空",trigger:"blur"}]},codes:{text:"获取验证码",status:!1,time:60},isInvite:!1,btnLoad:!1}},created:function(){this.analyAddress()},methods:{getCode:function(){var e=this;if(!this.codes.status){if(!Object(o.a)(this.registInfo.email))return this.$message.info("请输入正确格式的邮箱"),!1;var t={email:this.registInfo.email};this.$store.dispatch("get_email_code",t).then(function(t){if(0==t.data.result){var i=e;setTimeout(function(){i.codes.status=!0,i.codes.text=i.codes.time+"s 后重新发送"},800);var s=window.setInterval(function(){i.codes.text=i.codes.time+"s 后重新发送",--i.codes.time,i.codes.time<0&&(i.codes.text="获取验证码",i.codes.time=60,i.codes.status=!1,window.clearInterval(s))},1e3)}}).catch(function(e){})}},immRegist:function(){var e=this;if(!this.btnLoad){var t=this.registInfo;if(!Object(o.a)(t.email))return this.$message.info("请输入正确格式的邮箱"),!1;if(!Object(o.b)(t.pwd))return this.$message.info("请输入正确格式的密码"),!1;if(!t.confirmPwd)return this.$message.info("确认密码不能为空"),!1;if(t.confirmPwd!==t.pwd)return this.$message.info("两次输入密码不一致"),!1;if(!t.check)return this.$message.info("请选择同意协议书"),!1;var i={user:t.email,capicha:t.emailCode,passwd:t.pwd,invite_code:t.invite};this.btnLoad=!0,this.$store.dispatch("register",i).then(function(t){0==t.data.result?(e.btnLoad=!1,e.$message.success("注册成功"),setTimeout(function(){e.$router.replace("/login")},500)):e.btnLoad=!1}).catch(function(t){e.btnLoad=!1})}},goTo:function(e){this.$router.replace("/"+e)},analyAddress:function(){var e=this.$route;-1!=e.fullPath.indexOf("?")&&(this.registInfo.email=e.query.account)}},components:{Header:s.a,UserFoot:r.a}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"regist_wrapper"},[i("Header"),e._v(" "),i("el-row",{staticClass:"regist_content",attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{staticClass:"regist_page box",attrs:{xs:4,sm:6,md:8,lg:9,xl:2}},[i("div",{staticClass:"title"},[e._v("注册账号")]),e._v(" "),i("el-form",{ref:"registInfo",attrs:{model:e.registInfo,rules:e.rules}},[i("el-form-item",{attrs:{prop:"email"}},[i("el-input",{attrs:{placeholder:"邮箱账号"},model:{value:e.registInfo.email,callback:function(t){e.$set(e.registInfo,"email",t)},expression:"registInfo.email"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"emailCode"}},[i("el-input",{attrs:{placeholder:"6位验证码"},model:{value:e.registInfo.emailCode,callback:function(t){e.$set(e.registInfo,"emailCode",t)},expression:"registInfo.emailCode"}},[i("el-button",{class:e.codes.status?"stop":"normal",attrs:{slot:"append",disabled:!!e.codes.status},nativeOn:{click:function(t){return e.getCode(t)}},slot:"append"},[e._v(e._s(e.codes.text))])],1)],1),e._v(" "),i("el-form-item",{attrs:{prop:"pwd"}},[i("el-input",{attrs:{type:"password",placeholder:"设置密码（8-20位数字字母组合）"},model:{value:e.registInfo.pwd,callback:function(t){e.$set(e.registInfo,"pwd",t)},expression:"registInfo.pwd"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"confirmPwd"}},[i("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.registInfo.confirmPwd,callback:function(t){e.$set(e.registInfo,"confirmPwd",t)},expression:"registInfo.confirmPwd"}})],1),e._v(" "),i("el-form-item",{staticClass:"judge_content"},[i("p",{staticClass:"judgeIsHas",on:{click:function(t){e.isInvite=!e.isInvite}}},[e._v("是否有邀请码? "),i("i",{class:e.isInvite?"el-icon-arrow-right":"el-icon-arrow-down"})])]),e._v(" "),e.isInvite?i("el-form-item",{staticClass:"invite",attrs:{prop:"invite"}},[i("el-input",{attrs:{placeholder:"邀请码（选填）"},model:{value:e.registInfo.invite,callback:function(t){e.$set(e.registInfo,"invite",t)},expression:"registInfo.invite"}})],1):e._e(),e._v(" "),i("el-form-item",{staticClass:"agree_text",attrs:{required:""}},[i("el-checkbox",{staticClass:"is_agree",model:{value:e.registInfo.check,callback:function(t){e.$set(e.registInfo,"check",t)},expression:"registInfo.check"}},[e._v("我已阅读并同意"),i("a",{attrs:{href:"javascript:;"}},[e._v("《用户协议》")])])],1),e._v(" "),i("el-form-item",{staticClass:"regist_btn"},[i("el-button",{attrs:{type:"primary",loading:e.btnLoad},on:{click:e.immRegist}},[e._v("注册")])],1)],1)],1)],1),e._v(" "),i("user-foot")],1)},staticRenderFns:[]};var c=i("VU/8")(n,a,!1,function(e){i("bGRK")},"data-v-64017d64",null);t.default=c.exports},bGRK:function(e,t){}});
//# sourceMappingURL=9.e4f2a48b8ee5d1ceec3b.js.map