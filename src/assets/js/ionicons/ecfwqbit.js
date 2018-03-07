/*! Built with http://stenciljs.com */

ionicons.loadStyles("ion-icon","ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}\nion-icon.hydrated{visibility:inherit}");
ionicons.loadComponents("ecfwqbit",function(e,i,n,t){"use strict";function o(e,i,n){function t(){clearTimeout(s),o.onerror=o.onload=null,o.parentNode.removeChild(o),delete r[e]}if((a[e]=a[e]||[]).push(n),!r[e]){r[e]=!0;var o=document.createElement("script");o.charset="utf-8",o.async=!0,o.src=`${i}svg/${e}.js`;var s=setTimeout(t,12e4);o.onerror=o.onload=t,document.head.appendChild(o)}}class s{constructor(){this.ariaLabel="",this.ios="",this.md="",this.name="",this.svgContent=null}get iconName(){if(!this.name)return null;let e=this.name.toLowerCase();const i=this.mode||"md";/^md-|^ios-|^logo-/.test(e)?this.ios&&"ios"===i?e=this.ios:this.md&&"md"===i&&(e=this.md):e=i+"-"+e;const n=e.replace(/[a-z]|-|\d/g,"");return""!==n?(console.error(`invalid characters in ion-icon name: ${n}`),null):e}hostData(){const e={role:"img"};if(this.ariaLabel)e["aria-label"]=this.ariaLabel;else{const i=this.iconName;i&&(e["aria-label"]=i.replace("ios-","").replace("md-","").replace("-outline","").replace(/\-/g," "))}return e}render(){if(this.isServer)return i("div",{class:"icon-inner"});const e=this.iconName;if(!e)return i("div",{class:"icon-inner"});const n=c[e];return n===this.svgContent?i("div",{class:"icon-inner",innerHTML:n}):(o(e,this.publicPath,e=>{this.svgContent=e}),i("div",{class:"icon-inner"}))}}const r={},a=[],c={};window.loadIonicon=function(e,i){delete r[i],c[i]=e;const n=a[i];n&&(n.forEach(i=>{i(e)}),delete a[i])},e["ion-icon"]=s},["ion-icon",[["ariaLabel",1,1,2],["ios",1,1,2],["isServer",3,0,1,"isServer"],["md",1,1,2],["mode",3,0,1,"mode"],["name",1,1,2],["publicPath",3,0,1,"publicPath"],["svgContent",5,0,1]],{theme:"icon"}]);;