(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-goods_seckill-goods_seckill~pages-bundle-hot_list-hot_list~pages-index-index~pages-news~c30f2235"],{"1cf5":function(t,e,a){"use strict";a.r(e);var i=a("ec5f"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},2614:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},components:{},props:{status:{type:String,default:"loading"},errorText:{type:String,default:"加载失败，点击重新加载"},loadingText:{type:String,default:"加载中..."},finishedText:{type:String,default:"我可是有底线的～"},slotEmpty:{type:Boolean,default:!1},color:{type:String,default:"#666"}},methods:{onRefresh:function(){this.$emit("refresh")}}};e.default=i},2711:function(t,e,a){var i=a("f6de");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("5bbc3491",i,!0,{sourceMap:!1,shadowMode:!1})},"2a3d":function(t,e,a){"use strict";var i=a("3cd3"),r=a.n(i);r.a},"2ea1":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[a("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,i){return"spinner"===t.type?a("v-uni-view",{key:i,staticClass:"loading__dot"}):t._e()})),1),a("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},n=[]},"318f":function(t,e,a){"use strict";a.r(e);var i=a("945c"),r=a("f639");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("871b");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"45185faf",null,!1,i["a"],o);e["default"]=d.exports},3827:function(t,e,a){"use strict";var i=a("da2c"),r=a.n(i);r.a},"3c13":function(t,e,a){"use strict";a("a630"),a("a9e3"),a("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=i},"3cd3":function(t,e,a){var i=a("fb15");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("5770fc9a",i,!0,{sourceMap:!1,shadowMode:!1})},"7baa":function(t,e,a){var i=a("f8ea");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("2d6198e8",i,!0,{sourceMap:!1,shadowMode:!1})},8e3:function(t,e,a){"use strict";a.r(e);var i=a("dc02"),r=a("eefa");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("3827");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"6dc30303",null,!1,i["a"],o);e["default"]=d.exports},"871b":function(t,e,a){"use strict";var i=a("2711"),r=a.n(i);r.a},"945c":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uIcon:a("6119").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):a("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):a("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},n=[]},a74f:function(t,e,a){"use strict";a.r(e);var i=a("c219"),r=a("1cf5");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("2a3d");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"63677df2",null,!1,i["a"],o);e["default"]=d.exports},ab27:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".loading-footer[data-v-6dc30303]{padding:%?30?% 0;color:#666}",""]),t.exports=e},c219:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uImage:a("318f").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.lists.length?a("v-uni-view",{staticClass:"swiper-wrap",style:{height:t.height,padding:t.padding}},[a("v-uni-view",{staticClass:"swiper-con",style:{borderRadius:t.radius}},[t.isSwiper?[a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:t.autoplay,circular:t.circular,"previous-margin":t.previousMargin,"display-multiple-items":"1"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.lists,(function(e,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"data-item":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(e)}}},[a("u-image",{attrs:{mode:"aspectFill",width:"calc(100% - "+t.previousMargin+")",height:"100%","border-radius":t.radius,src:e.image}})],1)],1)})),1),t.lists.length>1?a("v-uni-view",{staticClass:"dots"},t._l(t.lists,(function(e,i){return a("v-uni-view",{key:i,class:"dot "+(i==t.currentSwiper?"active":"")})})),1):t._e()]:t._e(),t._l(t.lists,(function(e,i){return[i<1?a("v-uni-view",{key:i,staticStyle:{width:"100%",height:"100%"},attrs:{"data-item":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(e)}}},[a("u-image",{attrs:{mode:"aspectFill",width:"calc(100% - "+t.previousMargin+")",height:"100%","border-radius":t.radius,src:e.image}})],1):t._e()]}))],2)],1):t._e()},n=[]},c34d:function(t,e,a){"use strict";a.r(e);var i=a("2ea1"),r=a("e116");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("c888");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"13a5beb4",null,!1,i["a"],o);e["default"]=d.exports},c888:function(t,e,a){"use strict";var i=a("7baa"),r=a.n(i);r.a},da2c:function(t,e,a){var i=a("ab27");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("94a71dfa",i,!0,{sourceMap:!1,shadowMode:!1})},dc02:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={loading:a("c34d").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"loading-footer row-center",style:"color: "+t.color},["loading"===t.status?a("v-uni-view",{staticClass:"loading row"},[a("loading",{staticClass:"mr20",attrs:{color:t.color}}),a("v-uni-text",{style:"color: "+t.color},[t._v(t._s(t.loadingText))])],1):t._e(),"finished"===t.status?a("v-uni-view",{staticClass:"finished"},[t._v(t._s(t.finishedText))]):t._e(),"error"===t.status?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRefresh.apply(void 0,arguments)}}},[t._v(t._s(t.errorText))]):t._e(),"empty"===t.status?a("v-uni-view",{staticClass:"empty"},[t.slotEmpty?t._t("empty"):a("v-uni-text",[t._v("暂无数据")])],2):t._e()],1)},n=[]},e116:function(t,e,a){"use strict";a.r(e);var i=a("3c13"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},ec5f:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=i(a("1da1")),n=a("5ab3"),o=a("6626"),s={data:function(){return{lists:[],currentSwiper:0}},components:{},props:{pid:{type:Number},circular:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!0},height:{type:String},radius:{type:String,default:"10rpx"},padding:{type:String,default:"0rpx"},previousMargin:{type:String,default:"0rpx"},isSwiper:{type:Boolean,default:!0}},created:function(){this.getAdListFun()},watch:{pid:function(t){this.getAdListFun()}},methods:{getAdListFun:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getAdList)({pid:t.pid,client:1});case 2:a=e.sent,i=a.code,r=a.data,1==i&&(t.lists=r);case 6:case"end":return e.stop()}}),e)})))()},swiperChange:function(t){this.currentSwiper=t.detail.current},goPage:function(t){var e=t.link,a=t.link_type,i=t.params,r=t.is_tab;switch(a){case 1:case 2:r?uni.switchTab({url:e}):uni.navigateTo({url:e+(0,o.paramsToStr)(i)});break;case 3:uni.navigateTo({url:"/pages/webview/webview?url="+e});break}}}};e.default=s},eefa:function(t,e,a){"use strict";a.r(e);var i=a("2614"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},ef3e:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:100},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},f639:function(t,e,a){"use strict";a.r(e);var i=a("ef3e"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},f6de:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-image[data-v-45185faf]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-45185faf]{width:100%;height:100%}.u-image__loading[data-v-45185faf], .u-image__error[data-v-45185faf]{position:absolute;top:0;left:0;width:100%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},f8ea:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'[data-v-13a5beb4]:host{font-size:0;line-height:1}.loading[data-v-13a5beb4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-13a5beb4]{position:relative;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-13a5beb4 .8s linear infinite;animation:rotate-data-v-13a5beb4 .8s linear infinite}.loading__spinner--spinner[data-v-13a5beb4]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-13a5beb4]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-13a5beb4]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-13a5beb4]:empty{display:none}.loading--vertical[data-v-13a5beb4]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-13a5beb4]{margin:%?16?% 0 0}.loading__dot[data-v-13a5beb4]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-13a5beb4]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-13a5beb4]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-13a5beb4]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-13a5beb4]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-13a5beb4]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-13a5beb4]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-13a5beb4]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-13a5beb4]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-13a5beb4]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-13a5beb4]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-13a5beb4]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-13a5beb4]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-13a5beb4]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},fb15:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.swiper-wrap[data-v-63677df2]{overflow:hidden;box-sizing:initial}.swiper-wrap .swiper-con[data-v-63677df2]{position:relative;height:100%;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.swiper-wrap .swiper[data-v-63677df2]{width:100%;height:100%;position:relative}.swiper-wrap .swiper .slide-image[data-v-63677df2]{height:100%}.swiper-wrap .dots[data-v-63677df2]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.swiper-wrap .dots .dot[data-v-63677df2]{width:%?8?%;height:%?8?%;border-radius:50%;margin-right:%?10?%;background-color:#fff}.swiper-wrap .dots .dot.active[data-v-63677df2]{width:%?16?%;border-radius:%?8?%;background-color:#ff2c3c}',""]),t.exports=e}}]);