webpackJsonp([1],{"9Yva":function(t,s,e){t.exports=e.p+"static/img/rocket.07c9831.png"},Cwdn:function(t,s,e){t.exports=e.p+"static/img/code.578ba56.png"},RXu8:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("hxP8"),a=e("7ZZd"),n={components:{Header:i.a,UserFoot:a.a},props:{},data:function(){return{imgs:[{imgSrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"},{imgSrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"}],notices:[{title:"公告1",time:"2019-08-16"},{title:"公告2",time:"2019-08-17"},{title:"公告3",time:"2019-08-18"}],iphoneShow:"1",anShow:"1",registInput:""}},watch:{},computed:{},methods:{jump:function(){this.$router.replace("/home/trade")},goTo:function(){this.$router.push({path:"/register",query:{account:this.registInput}})},noticeDetail:function(){this.$message.info("暂未开放，敬请期待")},onMouseOver:function(t){switch(t){case"1":this.iphoneShow=2;break;case"2":this.anShow=2}},onMouseOut:function(t){switch(t){case"1":this.iphoneShow=1;break;case"2":this.anShow=1}}},created:function(){},mounted:function(){}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"market_wrapper"},[i("Header"),t._v(" "),i("section",{staticClass:"marke_content"},[i("el-row",{staticClass:"swipper_wrapper"},[i("el-col",{staticClass:"swipper_content"},[i("el-carousel",{attrs:{interval:5e3}},t._l(t.imgs,function(s){return i("el-carousel-item",{key:s.index},[i("el-image",{attrs:{src:s.imgSrc,fit:"cover"},nativeOn:{click:function(s){return t.jump(s)}}})],1)}),1)],1)],1),t._v(" "),i("el-row",{staticClass:"notice_wrapper"},[i("el-col",{staticClass:"notice_content",attrs:{span:16,offset:4}},[i("el-carousel",{attrs:{interval:8e3,arrow:"never",direction:"vertical"}},t._l(t.notices,function(s){return i("el-carousel-item",{key:s.index},[i("el-row",{staticClass:"sigle_notice_row",nativeOn:{click:function(s){return t.noticeDetail(s)}}},[i("el-col",{staticClass:"sigle_notice_col",attrs:{span:12}},[i("i",{staticClass:"iconfont icon-notice"}),t._v("\n                  "+t._s(s.title)+"\n                ")]),t._v(" "),i("el-col",{staticClass:"sigle_notice_col notice_time",attrs:{span:12}},[t._v("\n                  "+t._s(s.time)+"\n                ")])],1)],1)}),1)],1)],1),t._v(" "),i("el-row",{staticClass:"new_trade"},[i("el-col",{staticClass:"title"},[t._v(" 创新型交易所，近24小时成交量"),i("span",[t._v("647370458")]),t._v("美元")]),t._v(" "),i("el-col",{staticClass:"advantage",attrs:{span:16,offset:4}},[i("div",{staticClass:"share "},[i("p",{staticClass:"imgContent"},[i("img",{attrs:{src:e("yMUZ"),alt:""}})]),t._v(" "),i("p",{staticClass:"main_title"},[t._v("最适宜量化交易的平台")]),t._v(" "),i("p",{staticClass:"sm_title"},[t._v("流畅的API 交易体验，让您的自动化交易之旅更加完美")])]),t._v(" "),i("div",{staticClass:"air "},[i("p",{staticClass:"imgContent"},[i("img",{attrs:{src:e("9Yva"),alt:""}})]),t._v(" "),i("p",{staticClass:"main_title"},[t._v("百万级撮合效率")]),t._v(" "),i("p",{staticClass:"sm_title"},[t._v("撮合引擎能1秒能处理百万条订单")])]),t._v(" "),i("div",{staticClass:"money "},[i("p",{staticClass:"imgContent"},[i("img",{attrs:{src:e("X3s9"),alt:""}})]),t._v(" "),i("p",{staticClass:"main_title"},[t._v("挂单送手续费")]),t._v(" "),i("p",{staticClass:"sm_title"},[t._v("额外赠送手续费")])])])],1),t._v(" "),i("el-row",{staticClass:"mul_wrapper"},[i("el-col",{staticClass:"mul_title"},[t._v(" 随时随地 多平台终端交易")]),t._v(" "),i("el-col",{staticClass:"mul_sm_title"},[t._v("覆盖iOS、Android、Web多个平台，支持全业务功能")]),t._v(" "),i("el-col",{staticClass:"mul_detail_wrapper",attrs:{span:16,offset:4}},[i("div",{staticClass:"mul_detail_img"},[i("img",{attrs:{src:e("rvfR"),alt:""}})]),t._v(" "),i("div",{staticClass:"mul_detail_down"},[i("p",{staticClass:"down_wrapper",on:{mouseenter:function(s){return t.onMouseOver("1")},mouseleave:function(s){return t.onMouseOut("1")}}},[i("a",{staticClass:"icon_bg fl"},[1==t.iphoneShow?i("img",{staticClass:"phone_img",attrs:{src:e("hf5f"),alt:""}}):t._e(),t._v(" "),2==t.iphoneShow?i("img",{staticClass:"phone_img",attrs:{src:e("w80D"),alt:""}}):t._e()]),t._v(" "),i("a",{staticClass:"down_word fl"},[t._v(" iPhone 下载 ")])]),t._v(" "),i("p",{staticClass:"code_wrapper"},[i("img",{attrs:{src:e("Cwdn"),alt:""}})]),t._v(" "),i("p",{staticClass:"code_word"},[t._v("IOS 扫码下载 ")])])])],1),t._v(" "),i("el-row",{staticClass:"mul_resgist"},[i("el-col",{staticClass:"mul_res_title"},[t._v(" 马上注册 开启财富之旅")]),t._v(" "),i("el-col",{staticClass:"mul_res_input"},[i("el-input",{staticClass:"res_input_wrapper",attrs:{placeholder:"输入您的邮箱号"},model:{value:t.registInput,callback:function(s){t.registInput=s},expression:"registInput"}},[i("el-button",{attrs:{slot:"append"},nativeOn:{click:function(s){return t.goTo(s)}},slot:"append"},[t._v("注册")])],1)],1)],1)],1),t._v(" "),i("user-foot")],1)},staticRenderFns:[]};var o=e("VU/8")(n,c,!1,function(t){e("oabN")},"data-v-5af65b3e",null);s.default=o.exports},X3s9:function(t,s,e){t.exports=e.p+"static/img/money.b945169.png"},hf5f:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAYAAAAXb/p7AAAEV0lEQVRYR82YXWwUVRTH/2d2sVQlpSayU1tNg8ZPiDxssJ1ZwNbOaE1U0iBRIzYafeHBgKLRN+ODiUbQaCKJHwmJ8aEBHqwBt7tbrXZn8AEjMYoIiA3B3VnciEBit92PY27crbvb3Z3Zsp3tSebpno/fPXPvuedewhIXWuJ8WFzA11iSo+YgCMMg3kDArngo8Fk9SVk0QJ8+eQ+x9BGAtXNAhEetkHqg6YC+AfMJIt4HYFkJjMRrrLHAz00FlDVzE8BfAZDKQKassLIaIG4aYFev2Zq+lk8R0DkPgrHdiqh764ETug1dgx16dCcz7SmHYODYCu/FntNfPjjTVEBZM44DuKMMIil5OBALBn6tF66hGWwfONrWQjN/l0GcRi77iDW+UYAvSBr2i+UHjnQjm/s9TxEjxgfU2vJO7Av/Pwsiyxs5BvTpY9dwtu1mScq1S56cFUulf8NEX6YQvPver5envN4egjcRj/ScKOzWrn6zM0tYyxLLxHwJhLMt6fRPUxN9KSfgNQHFrsys4KfB2AZgfVnpuMTAKBgHEhdaDuN7f7oQcNV9k6slj/QUGFsrrEmhNgsgyKD3EmFlvBZoVcBVelSTmD4BcKODmSYZCII4SUw9AMTnSIjwuYfomXNjyl+VDCoCdgyYO5h4d4Vi6yjoApROZtPLNv05sd4qt50HKOvRYTCJY8pVEZmMh9TNNQGvv9+8xZPjHwG0ukvHweWz6cenJvrKy1TpSSJr5kGAh1yFAw5dt7Jt6Pj+NWLjzJO5X5yvY2caffzZTPZMppXXJUcDl6vp/Q+oGS8DeNPN7BFjSzyiHnRUZmTNPAzwoIuAcSusdNq1X8UZPOuw5jVkDgR8HA+rz9k5KwYUi7S0A7azvpJxppesiPK2nYtiwLo6XTvHduPEtDMeUd611SsoyJrhKqDYkFZYfaUeQHEWttsZNHB83AqrA3b+5n6xTzN+IGCdnUEDxzMZKXtTcmxj3FGZ8WnGpwQ82UAAe1eEvVZI3e4QMPosgcRF201hBm9OhAOjtidJvlE45SZdPtY05WgoPq4EK8UuabdkzfgFwO1NgMwR8Vuey9Lr544o08XxSwB9evRVYnqjCYCFkCetsHpbVcDOwe+6spnsFABPUyAJ71sh9fmqgGJA1sx9AA83AZCJpbvikV6xzOZkXsuf3ywnXM8iY8SKqI+VJ6bipUnWDHFhesHFLE7DI91pBXvF8iqRioA3PHT06lxqRrzjdbsCWaOzqXEvNhWJ+RsA3kWG/NZa+Uc/9m/N2tbBcgVZM14EYNuzXcEEkhnw3clwIGZ7klRT8OnGh8Sw7XwXADktcU6PRTZEa9k6eDxi8unGHmLaUcXRLBghECYBnGewl1i6FeCHQSgpukX2SYC2WGFFLKGa4gDwP3tZjw6CaRcAPwDxqnWMiEZSuatGLkT8FytF6dCifoC2MdAvXABIADjEhN2JkHreDk6MOwZ04mwxdJY84L+bJHQ88UwtiwAAAABJRU5ErkJggg=="},oabN:function(t,s){},rvfR:function(t,s,e){t.exports=e.p+"static/img/mac.5b9463d.png"},w80D:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAYAAAAXb/p7AAAB9ElEQVRYR+3Wvy8EQRQH8O+7c3QKhbvzJ6g0hF0F4RYRvUQiUVNQSxQSNQW1RCLRi4i7Ewq7hEblX9i7KxQ6d+yTPSJ+3JmZnZEc2WnfzJvPvPmRIbR4oxb3wQiwe+wqnUg8bwOYeVvwYRAklyqng2XdAugDR87a0qn2GwL6PmIYuC3Xqv04H33SQWoDe3KuEwAnjRDENOkXrYYxWbQ2MJPzFgEOt7dBo6VSwdqRxTTMoDM4HJsd95aZeLNJBVf8orWlM4d2BWOgTvnjLQb0H+r4DMZnMH4HBWcgviT/4pJ0O56VZF5gUOr7grgXQH+Thd4AdPc1RuDaM9FuJW95ogJJfRayOddlwBIlU4kT4PkF2xaNkQKmHXeWGPsAEqKEkvGACXPlvH0g6i8FrH8KnIs5ZtozgAyIeN7PD4cLFjZpoCGkEi6cUwmoiVTGRQJGREbCRQYqIiPjtICSSC2cNlCA1MYZATZBGsEZA35BQuWdEz2Eys/MTwkzE95AGC+dWNeiiWXjRoGyk6r0+zvArqmrztRTME3gDpUVmu7LoMdaW+Lo/njw4dMlyTiuB8aQ6Qkj5SNclvJ2/Xv3vsWZnPsIoD1SQvODqqWCXd/Jd2B23F1lwloLIKvEWPeL9obRd9B8EV8z/p1b/FsV0M0bV/DfV/AFbrIVPEB1nycAAAAASUVORK5CYII="},yMUZ:function(t,s,e){t.exports=e.p+"static/img/share.ed7a93c.png"}});
//# sourceMappingURL=1.e68f0411d1f449b29872.js.map