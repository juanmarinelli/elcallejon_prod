(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(t,e,r){"use strict";var n=r(202),o=r.n(n);r(303);e.a=function(t){t.app.AOS=new o.a.init({disable:!1,startEvent:"load",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:500,easing:"ease-in-out-quad",once:!1,mirror:!1,anchorPlacement:"top-bottom"})}},143:function(t,e,r){"use strict";var n=r(203);e.a=function(t){var e=t.store;new n.a({key:"vuex",storage:window.localStorage}).plugin(e)}},144:function(t,e,r){"use strict";var n=r(0),o=r(204),c=r.n(o);n.a.component("gallery",c.a)},189:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return f}));var n=function(){return{users:[],user:null}},o={user:function(t){return t.user},getUsers:function(t){return t.users},getUserLogged:function(t){return t.user}},c={setUsers:function(t,e){t.users=e},SET_USER:function(t,e){e?(delete e.password,t.user=e,localStorage.setItem("user",JSON.stringify(e))):(t.user=null,localStorage.removeItem("user"))}},f={toSetUsers:function(t){var e=t.commit;apiServices.getUsers().then((function(t){return e("setUsers",t)})).catch((function(t){return console.log(t)}))},toSetUserStorage:function(t,e){(0,t.commit)("SET_USER",e)}}},190:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return f})),r.d(e,"getters",(function(){return l})),r.d(e,"mutations",(function(){return d})),r.d(e,"actions",(function(){return m}));var n=r(24);r(14),r(284),r(37),r(27),r(36),r(56),r(32),r(57);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=function(){return{cart:[],showCart:!1}},l={cart:function(t){return t.cart},cartQty:function(t){return t.cart.reduce((function(t,e){return t+e.cantidad}),0)},showCart:function(t){return t.showCart},getCantProd:function(t){return function(e){var r=t.cart.find((function(t){return t.id==e}));return r?r.cantidad:1}}},d={ADD_TO_CART:function(t,e){var r=t.cart.find((function(t){return t.id==e.id}));r?(r.cantidad=e.cantidad,r.total=r.precio*e.cantidad):t.cart.push(c(c({},e),{},{total:e.precio*e.cantidad})),t.showCart=!0,localStorage.setItem("cart",JSON.stringify(t.cart))},EMPTY_CART:function(t){t.cart=[],localStorage.removeItem("cart")},SET_CART:function(t,e){e?(t.cart=e,localStorage.setItem("cart",JSON.stringify(e))):(t.cart=null,localStorage.removeItem("cart"))},SET_SHOWCART:function(t,e){t.showCart=e}},m={setCart:function(t,e){(0,t.commit)("SET_CART",e)},setEmptyCart:function(t){(0,t.commit)("EMPTY_CART")},toSetOpenCartStorage:function(t,e){(0,t.commit)("SET_SHOWCART",e)},toAddToCart:function(t,e){(0,t.commit)("ADD_TO_CART",e)}}},207:function(t,e,r){r(208),t.exports=r(209)},276:function(t,e,r){t.exports=r.p+"img/fondo.d2fc985.JPG"},277:function(t,e,r){t.exports=r.p+"img/banner.297585e.jpg"},278:function(t,e,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("5135230c",content,!0,{sourceMap:!1})},279:function(t,e,r){var n=r(54),o=r(135),c=r(280),f=r(281),l=r(282),d=r(283),m=n((function(i){return i[1]})),v=o(c),w=o(f),h=o(l),y=o(d);m.push([t.i,'@font-face{font-family:"Lemon Milk";src:url('+v+')}@font-face{font-family:"Lemon Milk";src:url('+w+')}@font-face{font-family:"Futura PT";src:url('+h+')}@font-face{font-family:"Minionstd-black";src:url('+y+')}body{font-family:"Futura PT",sans-serif}.swiper{font-family:"Minionstd-black",sans-serif}nav{z-index:10;font-family:"Lemon Milk"}.titleSlide{font-family:"minionstd-black"}h2{font-family:"Lemon Milk"}.line{background:linear-gradient(#363334,#363334);width:10rem;height:.25rem;margin-bottom:.75rem}nav.scrolled{border-bottom:0;background-color:#363334}nav.scrolled a{color:#fff}.redes{padding:15px 8px;position:fixed;left:0;top:40%;border-top-right-radius:10px;border-bottom-right-radius:10px}.bg-callejon,.from-callejon-400{background-color:#363334}.to-callejon-200{background-color:#3a3839}.bg-callejon-2{background-color:#d8d5c4}.text-callejon{color:#363334}.loader{background:50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom,#fff,transparent,transparent);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:7vw;font-family:"Futura PT",sans-serif;-webkit-animation:reveal 3s ease-in-out .2s forwards,glow 2.5s linear 2s infinite;animation:reveal 3s ease-in-out .2s forwards,glow 2.5s linear 2s infinite}@media (max-width:600px){.loader{background:50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom,#fff,transparent,transparent);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:4vw;font-family:"Futura PT",sans-serif;-webkit-animation:reveal 3s ease-in-out .2s forwards,glow 2.5s linear 2s infinite;animation:reveal 3s ease-in-out .2s forwards,glow 2.5s linear 2s infinite}}@-webkit-keyframes reveal{80%{letter-spacing:8px}to{background-size:300% 300%}}@keyframes reveal{80%{letter-spacing:8px}to{background-size:300% 300%}}@-webkit-keyframes glow{40%{text-shadow:0 0 8px #fff}}@keyframes glow{40%{text-shadow:0 0 8px #fff}}',""]),m.locals={},t.exports=m},280:function(t,e,r){t.exports=r.p+"fonts/LEMONMILK-Regular.55fc243.otf"},281:function(t,e,r){t.exports=r.p+"fonts/LEMONMILK-Bold.ac2b638.otf"},282:function(t,e,r){t.exports=r.p+"fonts/FuturaPTMedium.7af6976.otf"},283:function(t,e,r){t.exports=r.p+"fonts/minionstd-black.8ba079c.otf"},317:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return E})),r.d(e,"getters",(function(){return _})),r.d(e,"mutations",(function(){return M})),r.d(e,"actions",(function(){return A}));var n,o,c,f,l,d,m,v,w,h,y,x,O=r(0),k=r(52),R=(r(189),r(190),r(3)),S=(r(68),r(13)),T=r.n(S),C="http://127.0.0.1:8000/api",j={getProductos:(x=Object(R.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get(C+"/products");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return x.apply(this,arguments)}),getProducto:(y=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat(C,"/products/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return y.apply(this,arguments)}),getUsers:(h=Object(R.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get(C+"/usuarios");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return h.apply(this,arguments)}),deleteProducto:(w=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.delete("".concat(C,"/productos/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return w.apply(this,arguments)}),createUser:(v=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.post(C+"/usuarios",e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return v.apply(this,arguments)}),saveProducto:(m=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.post(C+"/productos",e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return m.apply(this,arguments)}),updateProducto:(d=Object(R.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.put("".concat(C,"/productos/").concat(e),r);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t,e){return d.apply(this,arguments)}),getPedidos:(l=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat(C,"/usuarios/").concat(e,"/pedidos"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return l.apply(this,arguments)}),guardarCompra:(f=Object(R.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.post("".concat(C,"/usuarios/").concat(e,"/pedidos"),r);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t,e){return f.apply(this,arguments)}),getCategories:(c=Object(R.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get(C+"/categories");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return c.apply(this,arguments)}),getProductsCategory:(o=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat(C,"/products_category/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return o.apply(this,arguments)}),getTratamientosCategory:(n=Object(R.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat(C,"/tratamientos_category/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return n.apply(this,arguments)})},P=j;O.a.use(k.a);var E=function(){return{productos:[],categories:[]}},_={productos:function(t){return t.productos},categories:function(t){return t.categories}},M={SET_PRODUCTOS:function(t,data){t.productos=data},SET_CATEGORIES:function(t,data){t.categories=data}},A={getProductos:function(t){var e=t.commit;P.getProductos().then((function(t){return e("SET_PRODUCTOS",t)})).catch((function(t){return console.log(t)}))},getCategories:function(t){var e=t.commit;P.getCategories().then((function(t){return e("SET_CATEGORIES",t)})).catch((function(t){return console.log(t)}))}}}},[[207,10,2,11]]]);