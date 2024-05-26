(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.a.createElement(s,c(c({ref:t},b),{},{components:a})):n.a.createElement(s,c({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),i=(a(0),a(121)),l={title:"Neutralino.clipboard"},c={unversionedId:"api/clipboard",id:"api/clipboard",isDocsHomePage:!1,title:"Neutralino.clipboard",description:"Neutralino.clipboard namespace offers functions to access system clipboard.",source:"@site/docs/api/clipboard.md",slug:"/api/clipboard",permalink:"/docs/api/clipboard",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/clipboard.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.app",permalink:"/docs/api/app"},next:{title:"Neutralino.computer",permalink:"/docs/api/computer"}},o=[{value:"clipboard.getFormat()",id:"clipboardgetformat",children:[{value:"Return String (awaited):",id:"return-string-awaited",children:[]}]},{value:"clipboard.writeText(text)",id:"clipboardwritetexttext",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"clipboard.writeImage(image)",id:"clipboardwriteimageimage",children:[{value:"Input Object: <code>ClipboardImage</code>",id:"input-object-clipboardimage",children:[]}]},{value:"clipboard.readText()",id:"clipboardreadtext",children:[{value:"Return String (awaited):",id:"return-string-awaited-1",children:[]}]},{value:"clipboard.readImage()",id:"clipboardreadimage",children:[{value:"Return Object (awaited):",id:"return-object-awaited",children:[]}]}],b={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Neutralino.clipboard")," namespace offers functions to access system clipboard."),Object(i.b)("h2",{id:"clipboardgetformat"},"clipboard.getFormat()"),Object(i.b)("p",null,"Returns the current data format of the system clipboard.\xa0"),Object(i.b)("h3",{id:"return-string-awaited"},"Return String (awaited):"),Object(i.b)("p",null,"Clipboard format: ",Object(i.b)("inlineCode",{parentName:"p"},"text"),", ",Object(i.b)("inlineCode",{parentName:"p"},"image"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"unknown"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let format = await Neutralino.clipboard.getFormat();\nconsole.log(`Format: ${format}`);\n")),Object(i.b)("h2",{id:"clipboardwritetexttext"},"clipboard.writeText(text)"),Object(i.b)("p",null,"Writes text into the system clipboard.\xa0"),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text")," String: Text to store into the system clipboard.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.clipboard.writeText('Test value');\n")),Object(i.b)("h2",{id:"clipboardwriteimageimage"},"clipboard.writeImage(image)"),Object(i.b)("p",null,"Writes image into the system clipboard.\xa0"),Object(i.b)("h3",{id:"input-object-clipboardimage"},"Input Object: ",Object(i.b)("inlineCode",{parentName:"h3"},"ClipboardImage")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"width"),": Number: Image width."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"height"),": Number: Image height."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bpp"),": Number: Bits per pixel (BPP)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bpr"),": Number: Bytes Per Row (BPR)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redMask"),": Number: Red mask."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"greenMask"),": Number: Green mask."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"blueMask"),": Number: Blue mask."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redShift"),": Number: Red shift."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"greeShift"),": Number: Green shift."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"blueShift"),": Number: Blue shift."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": ArrayBuffer: Raw RGBA binary data of the image in an array buffer.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let image = prepareClipboardImage();\nawait Neutralino.clipboard.writeImage(image);\n")),Object(i.b)("h2",{id:"clipboardreadtext"},"clipboard.readText()"),Object(i.b)("p",null,"Reads and returns text from system clipboard.\xa0"),Object(i.b)("h3",{id:"return-string-awaited-1"},"Return String (awaited):"),Object(i.b)("p",null,"Stored text from the system clipboard."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let clipboardText = await Neutralino.clipboard.readText();\nconsole.log(`Text: ${clipboardText}`);\n")),Object(i.b)("h2",{id:"clipboardreadimage"},"clipboard.readImage()"),Object(i.b)("p",null,"Reads and returns an image from system clipboard.\xa0"),Object(i.b)("h3",{id:"return-object-awaited"},"Return Object (awaited):"),Object(i.b)("p",null,"Returns ",Object(i.b)("a",{parentName:"p",href:"#input-object-clipboardimage"},Object(i.b)("inlineCode",{parentName:"a"},"ClipboardImage"))," object that has the same\nproperties as in the ",Object(i.b)("a",{parentName:"p",href:"#clipboardwriteimageimage"},Object(i.b)("inlineCode",{parentName:"a"},"writeImage()"))," function."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let clipboardImage = await Neutralino.clipboard.readImage();\nconsole.log(`Image: ${clipboardImage}`);\n")))}p.isMDXComponent=!0}}]);