(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/list"],{"1aa7":function(t,e,n){"use strict";n.r(e);var a=n("5bb8"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},4163:function(t,e,n){"use strict";var a={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"f5da"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},5301:function(t,e,n){},"5bb8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[],loadingType:"more",pageNum:0,pageSize:10,url:"",type:""}},onLoad:function(e){console.log(e),"1"==e.type?(t.setNavigationBarTitle({title:"双色球历史开奖"}),this.type=1,this.url="/api/two/all"):"2"==e.type?(t.setNavigationBarTitle({title:"大乐透历史开奖"}),this.type=2,this.url="/api/lottery/all"):(t.setNavigationBarTitle({title:"七星彩历史开奖"}),this.type=3,this.url="/api/colorful/all"),this.loadData()},methods:{loadData:function(){var t=this;if("loading"!==this.loadingType){this.pageNum++,this.loadingType="loading";var e={pageSize:this.pageSize,pageNum:this.pageNum};console.log(this.url),this.$http.post(this.url,e).then((function(e){e.data.list||(t.loadingType="nomore"),t.list=t.list.concat(e.data.list),t.loadingType="more",0===e.data.list.length&&(t.loadingType="nomore")}))}}}};e.default=n}).call(this,n("543d")["default"])},"7b78":function(t,e,n){"use strict";(function(t){n("490b");a(n("66fd"));var e=a(n("e241"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bfb5:function(t,e,n){"use strict";var a=n("5301"),i=n.n(a);i.a},e241:function(t,e,n){"use strict";n.r(e);var a=n("4163"),i=n("1aa7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("bfb5");var l,u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"3c8d8f46",null,!1,a["a"],l);e["default"]=r.exports}},[["7b78","common/runtime","common/vendor"]]]);