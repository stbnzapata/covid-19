(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(2),n=s.n(a),o=s(14),r=s.n(o),i=(s(25),s(26),s(3)),l=s.n(i),j=s(5),d=s(15),h=s(16),b=s(19),u=s(18),m=s(17),x=s.n(m),O=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(d.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={datos:[],ultimoelemento:""},e.componentDidMount=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.obtenerdatos();case 1:case"end":return t.stop()}}),t)}))),e.obtenerdatos=Object(j.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.covid19api.com/total/dayone/country/Colombia");case 2:s=t.sent,console.log(s),e.setState({datos:s.data}),e.setState({ultimoelemento:e.state.datos[e.state.datos.length-1]}),console.log(e.state.ultimoelemento);case 7:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("i",{class:"fas fa-head-side-cough fa-7x mt-3"}),Object(c.jsx)("h1",{class:"mx-5 mt-5",children:" reporte covid-19 "})]}),Object(c.jsxs)("table",{className:"table border mt-4",children:[Object(c.jsx)("thead",{className:"bg-white text-center",children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{scope:"col",children:["Pais ",Object(c.jsx)("i",{class:"fas fa-flag ml-3"})]}),Object(c.jsxs)("th",{scope:"col",children:["Contagiados ",Object(c.jsx)("i",{class:"fas fa-virus ml-3"})]}),Object(c.jsxs)("th",{scope:"col",children:["Recuperados ",Object(c.jsx)("i",{class:"fas fa-kiss-wink-heart ml-3"})]}),Object(c.jsxs)("th",{scope:"col",children:["Muertos ",Object(c.jsx)("i",{class:"fas fa-dizzy ml-3"})]})]})}),Object(c.jsx)("tbody",{className:"font-weight-bold",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:this.state.ultimoelemento.Country}),Object(c.jsx)("td",{children:this.state.ultimoelemento.Confirmed}),Object(c.jsx)("td",{children:this.state.ultimoelemento.Recovered}),Object(c.jsx)("td",{children:this.state.ultimoelemento.Deaths})]})})]})]})}}]),s}(a.Component);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(O,{})})};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3114b197.chunk.js.map