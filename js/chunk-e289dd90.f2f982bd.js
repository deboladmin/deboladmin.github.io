(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e289dd90"],{"02c9":function(t,e,n){"use strict";n("adb0")},"0748":function(t,e,n){"use strict";n("caad"),n("2532");var c=n("7a23"),r={class:"table-responsive"},a={class:"table",style:{border:"none"}},o={key:0,style:{padding:"2vh"}},i={style:{border:"none"}},s=["onClick"],u={key:0,style:{padding:"0"}},l={class:"btn p-2"};function d(t,e,n,d,b,p){return Object(c["y"])(),Object(c["h"])("div",r,[Object(c["i"])("table",a,[Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(p.columns,(function(e,n){return Object(c["R"])((Object(c["y"])(),Object(c["h"])("th",{scope:"col",key:n,class:"bg-light",style:{padding:"2vh"}},[Object(c["F"])(t.$slots,e+"-title",{col:e},(function(){return[Object(c["j"])(Object(c["J"])(e),1)]}),!0)],512)),[[c["O"],p.containColumn.includes(e)]])})),128)),n.functions.length>0&&n.rows.length>0?(Object(c["y"])(),Object(c["h"])("th",o," Functions ")):Object(c["g"])("",!0)])]),Object(c["i"])("tbody",i,[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(n.rows,(function(e,r){return Object(c["y"])(),Object(c["h"])("tr",{key:r,class:Object(c["s"])(n.hover?"hover":""),onClick:function(t){return p.rowClickEvent(r)}},[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(p.columns,(function(n,r){return Object(c["R"])((Object(c["y"])(),Object(c["h"])("td",{key:r,style:{padding:"2vh"}},[Object(c["F"])(t.$slots,n,{row:e},(function(){return[Object(c["j"])(Object(c["J"])(e[n]),1)]}),!0)],512)),[[c["O"],p.containColumn.includes(n)]])})),128)),n.functions.length>0?(Object(c["y"])(),Object(c["h"])("div",u,[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(n.functions,(function(t,e){return Object(c["y"])(),Object(c["h"])("td",{key:e,style:{padding:"2vh"}},[Object(c["i"])("button",l,Object(c["J"])(t.text),1)])})),128))])):Object(c["g"])("",!0)],10,s)})),128))])])])}n("b64b");var b={name:"Table",props:{hover:{type:Boolean,default:!1},rows:Array,functions:{type:Array,default:[]},isHeader:{type:Boolean,default:!0},contain:{type:Array,default:[]},innerRow:{type:Array,default:[]},rowClickFunction:{type:Function,default:function(){}}},computed:{columns:function(){return 0==this.rows.length?[]:Object.keys(this.rows[0])},containColumn:function(){return 0==this.rows.length||0!=this.contain.length?this.contain:Object.keys(this.rows[0])}},methods:{functionEvent:function(t){return this.functions[t].event?this.functions[t].event:null},rowClickEvent:function(t){this.rowClickFunction(t)}}},p=(n("b02a"),n("6b0d")),g=n.n(p);const f=g()(b,[["render",d],["__scopeId","data-v-6737075d"]]);e["a"]=f},"12ae":function(t,e,n){t.exports=n.p+"img/loading.a4f2cb80.gif"},2532:function(t,e,n){"use strict";var c=n("23e7"),r=n("e330"),a=n("5a34"),o=n("1d80"),i=n("577e"),s=n("ab13"),u=r("".indexOf);c({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~u(i(o(this)),i(a(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var c=n("e330"),r=n("5e77").PROPER,a=n("6eeb"),o=n("825a"),i=n("3a9b"),s=n("577e"),u=n("d039"),l=n("ad6d"),d="toString",b=RegExp.prototype,p=b[d],g=c(l),f=u((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),j=r&&p.name!=d;(f||j)&&a(RegExp.prototype,d,(function(){var t=o(this),e=s(t.source),n=t.flags,c=s(void 0===n&&i(b,t)&&!("flags"in b)?g(t):n);return"/"+e+"/"+c}),{unsafe:!0})},"44e7":function(t,e,n){var c=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"5a34":function(t,e,n){var c=n("da84"),r=n("44e7"),a=c.TypeError;t.exports=function(t){if(r(t))throw a("The method doesn't accept regular expressions");return t}},"853f":function(t,e,n){"use strict";function c(){var t=JSON.parse(localStorage.getItem("user"));return t&&t.token?{"x-access-token":t.token}:{}}n.d(e,"a",(function(){return c}))},ab13:function(t,e,n){var c=n("b622"),r=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(c){}}return!1}},adb0:function(t,e,n){},b02a:function(t,e,n){"use strict";n("ee1f")},b758:function(t,e,n){"use strict";var c=n("7a23"),r=n("12ae"),a=n.n(r),o={src:a.a,alt:"logo",height:"80"};function i(t,e,n,r,a,i){return Object(c["R"])((Object(c["y"])(),Object(c["h"])("img",o,null,512)),[[c["O"],n.active]])}var s={name:"LoadingIndicator",props:{active:Boolean}},u=n("6b0d"),l=n.n(u);const d=l()(s,[["render",i]]);e["a"]=d},b79c:function(t,e,n){"use strict";var c=n("d4ec"),r=n("bee2"),a=n("bc3a"),o=n.n(a),i=n("853f"),s="http://153.92.210.249:3000/api/v1/product",u=function(){function t(){Object(c["a"])(this,t)}return Object(r["a"])(t,[{key:"getProducts",value:function(t){return o.a.get(s+"/admin/paginated/"+t,{headers:Object(i["a"])()})}},{key:"getSingleProduct",value:function(t){return o.a.get(s+"/admin/"+t,{headers:Object(i["a"])()})}},{key:"createProduct",value:function(t){return o.a.post(s+"/",t,{headers:Object(i["a"])()})}},{key:"importProduct",value:function(t){return o.a.post(s+"/bulk/",{products:t},{headers:Object(i["a"])()})}},{key:"deleteProduct",value:function(t){return o.a.delete(s+"/"+t,{headers:Object(i["a"])()})}},{key:"updateProduct",value:function(t,e){return o.a.put(s+"/"+t,e,{headers:Object(i["a"])()})}}]),t}();e["a"]=new u},ce2f:function(t,e,n){"use strict";var c=n("7a23"),r=function(t){return Object(c["B"])("data-v-53bba04f"),t=t(),Object(c["z"])(),t},a={class:"text-center my-2",style:{"font-weight":"bold"}},o={class:"d-flex"},i=r((function(){return Object(c["i"])("i",{class:"fa fa-arrow-left","aria-hidden":"true"},null,-1)})),s=[i],u=["onClick"],l={class:"mx-3"},d=r((function(){return Object(c["i"])("i",{class:"fa fa-arrow-right","aria-hidden":"true"},null,-1)})),b=[d];function p(t,e,n,r,i,d){var p=this;return Object(c["y"])(),Object(c["h"])("div",null,[Object(c["i"])("div",a,Object(c["J"])(t.$t("page_navigator_name"))+" ("+Object(c["J"])(n.pages)+" ) ",1),Object(c["i"])("div",o,[Object(c["i"])("div",{onClick:e[0]||(e[0]=function(){p.$emit("goto-first")}),class:"mx-3",style:{cursor:"pointer"}}," First "),Object(c["i"])("div",{style:{cursor:"pointer"},onClick:e[1]||(e[1]=function(){return d.prevPage&&d.prevPage.apply(d,arguments)})},s),(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(d.pagesTrim(n.pages,n.current_page,4),(function(t){return Object(c["y"])(),Object(c["h"])("div",{class:Object(c["s"])(["mx-3",t==n.current_page?"current-page":""]),key:t,style:{cursor:"pointer"},onClick:function(e){return d.clickPage(t)}},Object(c["J"])(t),11,u)})),128)),Object(c["R"])(Object(c["i"])("div",l,"...",512),[[c["O"],n.pages>10&&n.current_page+5<n.pages]]),Object(c["i"])("div",{style:{cursor:"pointer"},onClick:e[2]||(e[2]=function(){return d.nextPage&&d.nextPage.apply(d,arguments)})},b),Object(c["i"])("div",{onClick:e[3]||(e[3]=function(){p.$emit("goto-last")}),class:"mx-3",style:{cursor:"pointer"}}," Last ")])])}n("a9e3");var g={name:"Page Navigator",props:{pages:{type:Number,default:0},current_page:{type:Number,default:0}},methods:{clickPage:function(t){this.$emit("click-page",t)},nextPage:function(){this.$emit("next-page")},prevPage:function(){this.$emit("prev-page")},pagesTrim:function(t,e,n){if(t>10){for(var c=[],r=e-n;r<e+n;r++)if(!(r<1)){if(r>t)break;c.push(r)}return console.log("trim_pages",c,"pages",t),console.log("current_page",e,"limit",n),c}return t}}},f=(n("02c9"),n("6b0d")),j=n.n(f);const O=j()(g,[["render",p],["__scopeId","data-v-53bba04f"]]);e["a"]=O},ee1f:function(t,e,n){},fc63:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r={class:"theme-dashboard-view"},a={class:"my-3 p-3 shadow-sm border d-flex justify-content-between"},o={class:"d-flex w-100"},i=Object(c["i"])("span",{class:"mx-2 d-flex align-items-center col-2"},null,-1),s={class:"col-10 d-flex align-items-center px-2"},u={class:"col-md-8 col-sm-12 border d-flex"},l=["placeholder"],d=Object(c["i"])("option",{value:"product"},"Products",-1),b=Object(c["i"])("option",{value:"category"},"Categories",-1),p=[d,b],g={class:"d-flex justify-content-center"},f={class:"justify-content-center text-center text-danger my-4"},j={class:"my-3"},O={key:0,class:"d-flex justify-content-center"};function h(t,e,n,d,b,h){var y=Object(c["G"])("LoadingIndicator"),v=Object(c["G"])("Table"),m=Object(c["G"])("PageNav");return Object(c["y"])(),Object(c["h"])("div",r,[Object(c["i"])("h1",null,Object(c["J"])(t.$t("inventory_title")),1),Object(c["i"])("div",a,[Object(c["i"])("div",o,[i,Object(c["i"])("div",s,[Object(c["i"])("div",u,[Object(c["R"])(Object(c["i"])("input",{type:"search",placeholder:t.$t("inventory_search_bar_placeholder"),style:{border:"none"},class:"p-2 w-100","onUpdate:modelValue":e[0]||(e[0]=function(t){return b.searchQuery=t}),onKeydown:e[1]||(e[1]=Object(c["S"])((function(){return h.SearchProduct&&h.SearchProduct.apply(h,arguments)}),["enter"]))},null,40,l),[[c["N"],b.searchQuery]]),Object(c["R"])(Object(c["i"])("select",{class:"form-group",style:{border:"none"},"onUpdate:modelValue":e[2]||(e[2]=function(t){return b.searchType=t})},p,512),[[c["M"],b.searchType]]),Object(c["i"])("button",{class:"btn border theme-background-primary text-light p-2",onClick:e[3]||(e[3]=function(){return h.SearchProduct&&h.SearchProduct.apply(h,arguments)})},Object(c["J"])(t.$t("inventory_search_bar_button_name")),1)])])])]),Object(c["i"])("div",g,[Object(c["k"])(y,{active:b.loading},null,8,["active"])]),Object(c["R"])(Object(c["i"])("div",null,[Object(c["i"])("div",f,[Object(c["i"])("h4",null,Object(c["J"])(b.load_error),1)])],512),[[c["O"],b.load_error]]),Object(c["R"])(Object(c["i"])("div",j,[Object(c["k"])(v,{rows:b.inventory_data,hover:!0,contain:["id","name","quantity","price"],rowClickFunction:h.clickProduct},{"id-title":Object(c["Q"])((function(){return[Object(c["j"])(Object(c["J"])(t.$t("inventory_table_product_id")),1)]})),"name-title":Object(c["Q"])((function(){return[Object(c["j"])(Object(c["J"])(t.$t("inventory_table_product_name")),1)]})),"quantity-title":Object(c["Q"])((function(){return[Object(c["j"])(Object(c["J"])(t.$t("inventory_table_product_quantity")),1)]})),"price-title":Object(c["Q"])((function(){return[Object(c["j"])(Object(c["J"])(t.$t("inventory_table_product_price")),1)]})),_:1},8,["rows","rowClickFunction"])],512),[[c["O"],!b.loading]]),b.loading?Object(c["g"])("",!0):(Object(c["y"])(),Object(c["h"])("div",O,[Object(c["k"])(m,{pages:b.pages,current_page:b.current_page,onClickPage:h.setInventory,onNextPage:h.nextPage,onPrevPage:h.prevPage,onGotoFirst:h.gotoFirstPage,onGotoLast:h.gotoLastPage},null,8,["pages","current_page","onClickPage","onNextPage","onPrevPage","onGotoFirst","onGotoLast"])]))])}n("d3b7"),n("25f0");var y=n("0748"),v=n("b758"),m=n("ce2f"),_=n("b79c"),k={name:"InventoryHome",components:{Table:y["a"],LoadingIndicator:v["a"],PageNav:m["a"]},data:function(){return{loading:!1,load_error:"",inventory_data:[],current_page:1,pages:1,searchQuery:"",searchType:"product"}},methods:{clickProduct:function(t){console.log("Click Product:",t),this.$router.push("/inventory/product/"+this.inventory_data[t].id)},nextPage:function(){this.current_page!=this.pages&&this.setInventory(this.current_page+1)},prevPage:function(){1!=this.current_page&&this.setInventory(this.current_page-1)},gotoFirstPage:function(){1!=this.current_page&&this.setInventory(1)},gotoLastPage:function(){this.current_page!=this.pages&&this.setInventory(this.pages)},setInventory:function(t){var e=this;this.loading=!0,this.load_error="",_["a"].getProducts(t).then((function(n){e.loading=!1,e.current_page=t,console.log("PRODUCT:",n.data.data),e.inventory_data=n.data.data.products.rows,e.pages=n.data.data.total_pages}),(function(t){e.loading=!1,console.log("Error:",t),e.load_error=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))},SearchProduct:function(){this.$router.push({name:"SearchProduct",params:{query_text:this.searchQuery,query_type:this.searchType}})}},mounted:function(){this.setInventory(this.current_page)}},P=n("6b0d"),x=n.n(P);const w=x()(k,[["render",h]]);e["default"]=w}}]);
//# sourceMappingURL=chunk-e289dd90.f2f982bd.js.map