(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(6),r=t.n(o),c=(t(13),t(3));t(14);var s=function(e){var a=function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,a(e.alert.type)),": ",a(e.alert.message))))};function i(e){var a={color:"dark"===e.mode?"#6f72d3":"#620f54",backgroundColor:"dark"===e.mode?"#620f54":"#6f72d3"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:a},l.a.createElement("h1",{className:"my-2"},"About US"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item",style:a},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},l.a.createElement("strong",null," About analyzing your text"))),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"This is a free to use utility item.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item",style:a},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},l.a.createElement("strong",null,"Browser compatibility"))),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"It works fine on every Browser.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item",style:a},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},l.a.createElement("strong",null,"Help & Documentation"))),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"Please visit our help site for more details")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))))}var d=t(4),m=t.n(d);function u(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},e.aboutText)),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Customize Themes"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",null," ",l.a.createElement("div",{className:"dropdown-item form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-4"),style:{width:"inherit"}},l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Change theme"),l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:function(){e.toggleMode(null)},role:"switch","aria-checked":"true",id:"flexSwitchCheckDefault"}))),l.a.createElement("li",null,l.a.createElement("hr",{className:"dropdown-divider"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"dropdown-item bg-primary rounded mx-1 my-1",onClick:function(){e.toggleMode("primary")},style:{height:"20px",width:"inherit",cursor:"pointer"}})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"dropdown-item bg-danger rounded mx-1 my-1",onClick:function(){e.toggleMode("danger")},style:{height:"20px",width:"inherit",cursor:"pointer"}})),l.a.createElement("li",null,l.a.createElement("div",{className:"dropdown-item bg-warning rounded mx-1 my-1",onClick:function(){e.toggleMode("warning")},style:{height:"20px",width:"inherit",cursor:"pointer"}})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"dropdown-item bg-info rounded mx-1 my-1",onClick:function(){e.toggleMode("info")},style:{height:"20px",width:"inherit",cursor:"pointer"}})))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link disabled",href:"/"},"Thank you for your visit")))))))}function h(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"#6f72d3":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:o,style:{backgroundColor:"light"===e.mode?"white":"#5ea5eb",color:"dark"===e.mode?"white":"#5ea5eb"},onChange:function(e){r(e.target.value)},id:"MyBox",rows:"6"})),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("converted to uppercase","success")}},"Convert To UPPERCASE"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("converted to lowercase","success")}},"Convert To lowercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-secondary mx-2 my-1",onClick:function(){var a=o.split(/[ ]+/);r(a.join(" ")),e.showAlert("removed extra space ","success")}},"Remove extra spaces"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-1",onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Text copied ","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-danger mx-2 my-1",onClick:function(){r(""),e.showAlert("text deleted","warning")}},"Clear")),l.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"grey"}},l.a.createElement("span",{className:"badge rounded-pill bg-info text-dark"},l.a.createElement("h2",null," Your Text Summary :- ")),l.a.createElement("p",null," Text You provided above have ",o.split(/\s+/).filter(function(e){return 0!==e.length}).length," words ",o.length," characters and it takes ",.008*o.split(" ").filter(function(e){return 0!==e.length}).length," minute to read "),l.a.createElement("span",{className:"badge rounded-pill bg-info text-dark"},l.a.createElement("h3",null,"Preview ")),l.a.createElement("p",null,l.a.createElement("br",null),o.length>0?o:"Nothing to be previewed Enter something to preview it here")))}u.prototype={title:m.a.string.isRequired,aboutText:m.a.string.isRequired},u.defaultProps={title:"set your title",aboutText:"enter about here"};var g=t(7),b=t(1);var p=function(){var e=Object(n.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(null),d=Object(c.a)(r,2),m=d[0],p=d[1],E=function(e,a){p({message:e,type:a}),setTimeout(function(){p(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,l.a.createElement(u,{title:"TextUtilities",mode:t,toggleMode:function(e){document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-info"),document.body.classList.add("bg-"+e),"light"===t?(o("dark"),document.body.style.backgroundColor="#620f54",E("mode changed","success")):(o("light"),document.body.style.backgroundColor="#6f72d3",E("mode changed","success"))},aboutText:"About us"}),l.a.createElement(s,{alert:m}),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",element:l.a.createElement(h,{heading:"Text Utilities -Word counter, Character counter | Uppercase to Lowercase | Lowercase to Uppercase",showAlert:E,mode:t})}),l.a.createElement(b.a,{exact:!0,path:"/About",element:l.a.createElement(i,{mode:t,aboutText:"About"})}))))},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),o(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),E()},8:function(e,a,t){e.exports=t(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.f24cc783.chunk.js.map