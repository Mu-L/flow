import{o as e}from"./index.566a0f72.js";import{u as t,d as n}from"./base64Conver.bb012c73.js";function o(e,n,o,i){t(e).then((e=>{a(e,n,o,i)}))}function a(e,t,o,a){i(n(e),t,o,a)}function i(e,t,n,o){const a=new Blob(void 0!==o?[o,e]:[e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,t);else{const e=window.URL.createObjectURL(a),n=document.createElement("a");n.style.display="none",n.href=e,n.setAttribute("download",t),void 0===n.download&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(e)}}function r({url:t,target:n="_blank",fileName:o}){const a=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,i=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return!1;if(a||i){const e=document.createElement("a");if(e.href=t,e.target=n,void 0!==e.download&&(e.download=o||t.substring(t.lastIndexOf("/")+1,t.length)),document.createEvent){const t=document.createEvent("MouseEvents");return t.initEvent("click",!0,!0),e.dispatchEvent(t),!0}}return-1===t.indexOf("?")&&(t+="?download"),e(t,{target:n}),!0}export{i as a,a as b,o as c,r as d};
