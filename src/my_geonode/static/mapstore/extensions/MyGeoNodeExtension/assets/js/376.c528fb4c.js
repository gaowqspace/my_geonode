(self.webpackChunkMyGeoNodeExtension=self.webpackChunkMyGeoNodeExtension||[]).push([[376],{325:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(852),s=n.n(r),o=n(703),i=n(195),c=n(580),a=n.n(c);function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=i.FormattedMessage;class m extends s().Component{constructor(){super(...arguments),u(this,"renderFormattedMsg",(e=>{let{msgId:t,msgParams:n,children:r}=e;return r&&"function"==typeof r?s().createElement(l,{id:t,values:n},(e=>r(e))):s().createElement(l,{id:t,values:n})})),u(this,"renderMsg",(e=>{let{msgId:t,children:n}=e;return n&&"function"==typeof n?n(t):s().createElement("span",null,t||"")}))}render(){return this.context.intl?this.renderFormattedMsg(this.props):this.renderMsg(this.props)}}u(m,"propTypes",{msgId:a().string.isRequired,msgParams:a().object}),u(m,"contextTypes",{intl:a().object});const d=m,p={name:"MyGeoNodeExtension",component:(0,o.connect)((()=>({})))((function(){return s().createElement("div",{className:"extension"},s().createElement(d,{msgId:"extension.message"}))})),reducers:{},epics:{},containers:{}}}}]);