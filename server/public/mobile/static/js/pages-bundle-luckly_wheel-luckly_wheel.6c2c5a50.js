(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-luckly_wheel-luckly_wheel"],{"036e":function(t,e,n){t.exports=n.p+"static/img/choujiang_button.c5332ee4.png"},1616:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABs1BMVEUAAAD/////n4D/////qo7/qqr/s5n/oov/////////////qo7/////////qp7/opf/////////p5f/////////rJj/////qJr/ppP/qJb/qpn/////////////qJj/////qJb////9qJb9ppf9p5b/qZb////9qJf9p5b/p5b/////////qZf////////////////9qJf/////////////qJf////9p5f/qZj/////qJf/////////p5f////+p5f/qZf////////+qJf////+qJf////+qJb////+qJf////+qJf////+qJf////+qJj////////+qJf+qJf+qJf+p5f////////+qJb////+qJf////+qJf////+qJf////////+qJf////+qJf////+qJf////+qJf+qpr+q5r+q5v+rp7+r5/+r6D+sqP+tKb+tab+taf+wLT+wbX+zsT+zsX+0Mf+0Mj+0cj+0cn+08v+1s3+1s7+3NX+4Nr+4dv+4dz+4tz+4t3+5uH+6ub+7uv/8O3/8e7/8e//8u//9PL/9vT/9vX/+fj/+vn//v7///8jT8i8AAAAZ3RSTlMAAQgICQkKCwsNDhISFBUWFxggICQlJSYoSUtQYGJvb3BxcnZ3d3d4enp6fX9/gIOFh4iKjJihpqamp6eoqamrq6ustr3Bwc/P09XX19jY2dna4OHk5uvs7+/w8PHx8vP0/Pz9/f7+yiiIvwAAAmBJREFUeNrt3cdTU1EcxfEDWEFFxRZREVuwGxTsla4iYomASMTCoVgBQxGwgDQluX8yi0cmCWXt/c2c7+q+3Wfu3M1bHSCrPaW3aptjzqNizbU3SndhzXaUP3ae9qh8+6rkzRdeO4+Lnc9faT7wwnle9OAycs4lZ6CLOZnmvHvORHfzMtDXnZGups2nnJlOpMzF7+yg3xQH5vyoM1R0EwDgrDPVaQDY+tIWunULgHPO2bvqemvoeqCoyxq6qwglzlwlqLSHrkS1PXQ1HtpD38cre+hWOIMJLbTQQgsttNBCCy200EILLbTQQgsttNBCCy200EILLbTQQgsttNBCCy200EILLbTQQgsttNBCCy200EILLbTQQgsttNBCCy200EILLbTQQgsttNBCCy200EILLbTQQgsttNBCCy200EILLbTQQgst9P9HJ+yZE5izh57DlD30FH7aQ//AkD30IL7aQ38CZ6yZ/xD8bg09SrBvwZZ5oY8gR2yhh0m0s/efJfPfXrajiRxI2jEn+8km1JCM20HHSdbgJklOWDFPkOQ1HCfJnl82zL97SPIQ9pEkGTfwrpNDJMn3O4EHgXpg3nfzfH8grQMQCY7sHvb6fyAR716CngFQ0LL0wQ9js76SZ8c+ppQtBQBwkum+fBufnPbqxhPTk+ODnzOIZQCAjc9pqGcbginKUKcdc2coNfoZtoM+lp5XvWzFfCVjx3b9bRvmO+uydo7Dbw285/DyQen9T3w3Pw2tnMHOLevwmdxxNHfVxfFtkUZfyY2RwrXH3fceqahqaPOJ29ZQVXF4d7ZyEdgwRTVAYOCwAAAAAElFTkSuQmCC"},1711:function(t,e,n){"use strict";var i=n("9399"),r=n.n(i);r.a},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2390:function(t,e,n){"use strict";n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7dfb"),r={data:function(){return{config:{},lists:[],record:[],surplus:0,showResult:!1,resultText:""}},props:{},onLoad:function(t){this.getPrizeFun()},methods:{getPrizeFun:function(){var t=this;(0,i.getPrize)().then((function(e){if(1==e.code){var n=e.data,i=n.config,r=n.list,s=n.record,a=n.surplus;r=r.map((function(t,e){return 4==e&&(t.type=1,t.name="今日剩余"+a+"次"),t})),t.config=i,t.lists=r,t.record=s,t.surplus=a}}))},onClose:function(){this.showResult=!1},startLottery:function(t){this.getPrizeFun()},lotteryFinish:function(t){this.showResult=!0,this.resultText=t.detail}}};e.default=r},3810:function(t,e,n){"use strict";n.r(e);var i=n("2390"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},"4840b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[t.status?n("v-uni-view",{staticClass:"my-lottery row-between wrap"},t._l(t.lotteryData,(function(e,i){return n("v-uni-view",{key:i,class:(1==e.type?"lotty-btn":"lottery-item")+" column-center "+(t.activeIndex==i?"active":""),staticStyle:{width:"180rpx",height:"180rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onLotteryClick(e.type)}}},[n("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:e.url}}),n("v-uni-text",{class:1==e.type?"xs mt20":"nr mt10",style:"color: "+(1==e.type?"#ED3720":"#743C3C")+";font-weight: 600;"},[t._v(t._s(e.name))])],1)})),1):n("v-uni-view",{staticClass:"activity-null row-center"},[t._v("活动暂未开始")])],1)},s=[]},"4a3b":function(t,e,n){"use strict";var i=n("ae39"),r=n.n(i);r.a},"4def":function(t,e,n){var i=n("24fb"),r=n("1de5"),s=n("96ff");e=i(!1);var a=r(s);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/luckly_wheel/luckly_wheel.wxss */.luckly-wheel-container[data-v-4dd06f26]{background-color:#ff2c3c;padding-bottom:%?20?%}.luckly-wheel-container .header[data-v-4dd06f26]{width:100%;height:%?1108?%}.luckly-wheel-container .header uni-image[data-v-4dd06f26]{width:100%;height:100%}.luckly-wheel-container .main[data-v-4dd06f26]{margin-top:%?-810?%;position:relative}.luckly-wheel-container .main .user-prize[data-v-4dd06f26]{padding:%?20?%;background-color:#fef0b5;border-radius:%?100?% %?0?% %?0?% %?100?%;box-shadow:0 3px 0 #f95f2f}.luckly-wheel-container .main .wheel-box[data-v-4dd06f26]{padding:0 %?30?%}.luckly-wheel-container .main .wheel-box .wheel-container[data-v-4dd06f26]{padding:%?27?% %?15?% %?36?%;background-color:#ed3720;border:%?12?% solid #fe6847;margin-top:%?20?%;border-radius:%?30?%}.luckly-wheel-container .main .wheel-box .wheel-container .notice-container[data-v-4dd06f26]{background-color:#d30c16;border:%?2?% solid #edb17d;padding:%?13?% %?28?%;border-radius:%?100?%;width:%?586?%}.luckly-wheel-container .main .wheel-box .wheel-container .notice-container .marquee-box[data-v-4dd06f26]{width:%?500?%;height:%?33?%}.luckly-wheel-container .main .wheel-box .wheel-container .wheel[data-v-4dd06f26]{margin-top:%?20?%}.luckly-wheel-container .main .wheel-box .wheel-container .wheel .lottery-box[data-v-4dd06f26]{background-image:url(data:image/png;base64,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);width:%?560?%;height:%?560?%;background-size:100% 100%;padding:%?35?% %?40?%}.luckly-wheel-container .main .wheel-box .wheel-container .rules-box[data-v-4dd06f26]{margin-top:%?24?%;background-color:#d30c16;padding:%?20?% %?16?% %?20?% %?28?%;border-radius:%?20?%}.luckly-wheel-container .van-popup[data-v-4dd06f26]{background-color:initial}.result-popup[data-v-4dd06f26]{width:%?545?%;height:%?626?%}.result-popup .result-container[data-v-4dd06f26]{width:%?545?%;height:%?514?%;background-size:100% 100%;background-image:url('+a+")}.get-btn[data-v-4dd06f26]{width:%?320?%;height:%?70?%;color:#7b3200;background:-webkit-linear-gradient(top,#fef0b0,#ffa92e);background:linear-gradient(180deg,#fef0b0,#ffa92e)}",""]),t.exports=e},9399:function(t,e,n){var i=n("4def");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("16bd11c2",i,!0,{sourceMap:!1,shadowMode:!1})},"96ff":function(t,e,n){t.exports=n.p+"static/img/lottery_bg.bdc75e47.png"},a9dd:function(t,e,n){"use strict";n.r(e);var i=n("f965"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},ae39:function(t,e,n){var i=n("f705");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("46cd4f4b",i,!0,{sourceMap:!1,shadowMode:!1})},b21f:function(t,e,n){"use strict";n.r(e);var i=n("4840b"),r=n("a9dd");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("4a3b");var a,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"6e7c8df7",null,!1,i["a"],a);e["default"]=o.exports},c0b3:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={myLottery:n("b21f").default,uPopup:n("484a").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"luckly-wheel-container"},[n("v-uni-view",{staticClass:"header"},[n("v-uni-image",{attrs:{src:"/static/images/choujiang_bg.png"}})],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"row-end"},[n("v-uni-navigator",{staticClass:"user-prize row-center",attrs:{url:"/pages/bundle/prize_record/prize_record","hover-class":"none"}},[n("v-uni-text",{staticClass:"md",staticStyle:{color:"#7D350C","font-weight":"600"}},[t._v("我的奖品")])],1)],1),n("v-uni-view",{staticClass:"wheel-box"},[n("v-uni-view",{staticClass:"wheel-container"},[n("v-uni-view",{staticClass:"row-center"},[n("v-uni-view",{staticClass:"notice-container row"},[n("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/icon_notice.png"}}),t.record.length>0?n("v-uni-view",{staticClass:"marquee-box ml20"},[n("v-uni-swiper",{staticStyle:{height:"33rpx"},attrs:{autoplay:!0,vertical:!0}},t._l(t.record,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"row"},[n("v-uni-text",{staticClass:"xs marquee_text",staticStyle:{color:"#F9EDDD"}},[t._v(t._s(e.text))])],1)})),1)],1):n("v-uni-view",{staticClass:"xs ml20",staticStyle:{color:"#F9EDDD"}},[n("v-uni-text",{staticClass:"xs",staticStyle:{color:"#F9EDDD"}},[t._v("暂无通知")])],1)],1)],1),n("v-uni-view",{staticClass:"wheel"},[n("my-lottery",{attrs:{lotteryData:t.lists,status:t.config.status,luckyOrder:3,circleTimes:30},on:{begin:function(e){arguments[0]=e=t.$handleEvent(e),t.startLottery.apply(void 0,arguments)},finish:function(e){arguments[0]=e=t.$handleEvent(e),t.lotteryFinish.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"rules-box"},[n("v-uni-view",{staticClass:"lg",staticStyle:{color:"#FCD7D2","margin-bottom":"30rpx"}},[t._v("活动规则")]),n("v-uni-text",{staticClass:"sm",staticStyle:{color:"#FCD7D2"}},[t._v(t._s(t.config.rule))])],1)],1)],1),n("v-uni-view",{staticClass:"xs row-center",staticStyle:{color:"#FFF2D9","margin-top":"30rpx"}},[t._v("本活动的所有奖品，均由商城提供")])],1),n("u-popup",{attrs:{mode:"center"},model:{value:t.showResult,callback:function(e){t.showResult=e},expression:"showResult"}},[n("v-uni-view",{staticClass:"result-popup column-center"},[n("v-uni-view",{staticClass:"result-container column-between"},[n("v-uni-view",{staticClass:"row-center",staticStyle:{padding:"0 118rpx","margin-top":"90rpx"}},[n("v-uni-text",{staticStyle:{color:"#F95F2F","font-size":"62rpx","text-align":"center"}},[t._v(t._s(t.resultText))])],1),n("v-uni-view",{staticClass:"mb20"},[n("v-uni-view",{staticClass:"get-btn row-center md br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}}},[t._v("点击收下")])],1)],1),n("v-uni-view",{staticStyle:{"margin-top":"50rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"62rpx",height:"62rpx"},attrs:{src:"/static/bundle/images/icon_close.png"}})],1)],1)],1)],1)},s=[]},e398:function(t,e,n){t.exports=n.p+"static/img/choujiang_light.dd47b2b0.png"},e83c:function(t,e,n){"use strict";n.r(e);var i=n("c0b3"),r=n("3810");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("1711");var a,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"4dd06f26",null,!1,i["a"],a);e["default"]=o.exports},f705:function(t,e,n){var i=n("24fb"),r=n("1de5"),s=n("e398"),a=n("1616"),c=n("036e");e=i(!1);var o=r(s),u=r(a),f=r(c);e.push([t.i,".my-lottery[data-v-6e7c8df7]{background-image:url("+o+");width:%?640?%;height:%?640?%;background-size:100% 100%;padding:%?35?% %?40?%}.my-lottery .lottery-item[data-v-6e7c8df7]{background-image:url("+u+");background-size:100% 100%}.my-lottery .lotty-btn[data-v-6e7c8df7]{background-image:url("+f+");background-size:100% 100%}.container .activity-null[data-v-6e7c8df7]{color:#fee5bf;font-size:%?40?%;width:%?640?%;height:%?640?%}.active[data-v-6e7c8df7]{opacity:.7}",""]),t.exports=e},f965:function(t,e,n){"use strict";(function(t){n("c740"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7dfb"),r=[0,1,2,5,8,7,6,3],s={data:function(){return{isLottery:!1,currentIndex:0,luckyOrder:-1,speed:200,activeIndex:-1}},components:{},props:{lotteryData:{type:Array,default:function(){return[]}},circleTimes:{type:Number,default:30},status:{type:Number|String,default:0}},beforeMount:function(){this.lotteryTimer=null},methods:{onLotteryClick:function(t){1==t&&this.start()},userLotteryFun:function(){var t=this;(0,i.userLottery)().then((function(e){if(1==e.code){var n=e.data.id,i=t.lotteryData.findIndex((function(t){return t.id==n}));switch(i){case 0:i=0;break;case 1:i=1;break;case 2:i=2;break;case 3:i=7;break;case 5:i=3;break;case 6:i=6;break;case 7:i=5;break;case 8:i=4;break;default:i=-1;break}t.luckyOrder=i,t.result=e.data.text,t.$emit("begin"),t.startLotteryFun()}}))},startLotteryFun:function(){var t=this,e=this.currentIndex,n=this.getHighLightItemIndexFun(e);this.activeIndex=n;var i=e%8;this.currentIndex=++e,e>this.circleTimes+8&&this.luckyOrder==i?(this.lotteryTimer&&clearTimeout(this.lotteryTimer),setTimeout((function(){t.stopCallbackFun(r[t.luckyOrder]),setTimeout((function(){t.reset(),t.activeIndex=-1}),1e3)}),500)):(e<this.circleTimes?this.speed-=10:e>this.circleTimes+8&&this.luckyOrder==i+1?this.speed+=80:this.speed+=20,this.speed<50&&(this.speed=50),this.lotteryTimer=setTimeout(this.startLotteryFun.bind(this),this.speed))},stopCallbackFun:function(t){this.$emit("finish",{detail:this.result})},getHighLightItemIndexFun:function(t){return r[t%r.length]},getLuckyItemOrderFun:function(t){},start:function(t){this.isLottery||(this.isLottery=!0,this.userLotteryFun())},stop:function(e,n){this.luckyOrder=this.getLuckyItemOrderFun(e),t("log","stop, ###",e," at components/my-lottery/my-lottery.vue:185"),this._stopCallback=n},reset:function(){this.isLottery=!1,this.currentIndex=0,this.speed=100,this.luckyOrder=-1}}};e.default=s}).call(this,n("0de9")["log"])}}]);