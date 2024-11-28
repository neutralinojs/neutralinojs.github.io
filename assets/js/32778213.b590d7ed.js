"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[2360],{2158:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(4848),r=t(8453);const i={title:"Neutralino.app",toc_max_heading_level:2},s=void 0,l={id:"api/app",title:"Neutralino.app",description:"Neutralino.app namespace contains methods related to the current application instance.",source:"@site/docs/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/docs/api/app",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/app.md",tags:[],version:"current",frontMatter:{title:"Neutralino.app",toc_max_heading_level:2},sidebar:"docs",previous:{title:"Native API Overview",permalink:"/docs/api/overview"},next:{title:"Neutralino.clipboard",permalink:"/docs/api/clipboard"}},o={},p=[{value:"app.exit(exitCode)",id:"appexitexitcode",level:2},{value:"Parameters",id:"parameters",level:3},{value:"app.killProcess()",id:"appkillprocess",level:2},{value:"app.restartProcess(options)",id:"apprestartprocessoptions",level:2},{value:"Options",id:"options",level:3},{value:"app.getConfig()",id:"appgetconfig",level:2},{value:"Return Object (awaited):",id:"return-object-awaited",level:3},{value:"app.broadcast(eventName, data)",id:"appbroadcasteventname-data",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"app.readProcessInput(readAll)",id:"appreadprocessinputreadall",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Return String (awaited):",id:"return-string-awaited",level:3},{value:"app.writeProcessOutput(data)",id:"appwriteprocessoutputdata",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"app.writeProcessError(data)",id:"appwriteprocesserrordata",level:2},{value:"Parameters",id:"parameters-4",level:3}];function c(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Neutralino.app"})," namespace contains methods related to the current application instance."]}),"\n",(0,n.jsx)(a.h2,{id:"appexitexitcode",children:"app.exit(exitCode)"}),"\n",(0,n.jsx)(a.p,{children:"Terminates the running application."}),"\n",(0,n.jsx)(a.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"exitCode"})," Number: Process's exit code. The default value is always ",(0,n.jsx)(a.code,{children:"0"})," (success)."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"await Neutralino.app.exit(130);\n\nawait Neutralino.app.exit();\n"})}),"\n",(0,n.jsx)(a.h2,{id:"appkillprocess",children:"app.killProcess()"}),"\n",(0,n.jsxs)(a.p,{children:["Kills the application process. If the application becomes unresponsive,\nyou can use this to terminate the process instantly. It is recommended\nto use the ",(0,n.jsx)(a.code,{children:"exit()"})," method to close your application properly."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"await Neutralino.app.killProcess();\n"})}),"\n",(0,n.jsx)(a.h2,{id:"apprestartprocessoptions",children:"app.restartProcess(options)"}),"\n",(0,n.jsx)(a.p,{children:"Restarts the current application instance."}),"\n",(0,n.jsx)(a.h3,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"args"})," String: Additional command-line arguments that need to be passed to the new application instance's process."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"await Neutralino.app.restartProcess();\n\nawait Neutralino.app.restartProcess({ args: '--restarted' });\n"})}),"\n",(0,n.jsx)(a.h2,{id:"appgetconfig",children:"app.getConfig()"}),"\n",(0,n.jsx)(a.p,{children:"Returns the current application configuration as a JSON object."}),"\n",(0,n.jsx)(a.h3,{id:"return-object-awaited",children:"Return Object (awaited):"}),"\n",(0,n.jsxs)(a.p,{children:["The current application configuration. Sometimes, this configuration object is not identical to your configuration file\nbecause the framework updates the configuration during several situations such as config overriding via CLI arguments\nand using ",(0,n.jsx)(a.code,{children:"0"})," as the port."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"let config = await Neutralino.app.getConfig();\nconsole.log('URL = ', config.url);\n"})}),"\n",(0,n.jsx)(a.h2,{id:"appbroadcasteventname-data",children:"app.broadcast(eventName, data)"}),"\n",(0,n.jsx)(a.p,{children:"Dispatches a new event to all app instances."}),"\n",(0,n.jsx)(a.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"eventName"})," String: Name of the event."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"data"})," Object (optional): Additional data for the event."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"await Neutralino.app.broadcast('myTestEvent', 'Hello');\n\nawait Neutralino.app.broadcast('myTestEvent', {myData: 'Test data'});\n\nawait Neutralino.app.broadcast('myTestEvent');\n"})}),"\n",(0,n.jsx)(a.h2,{id:"appreadprocessinputreadall",children:"app.readProcessInput(readAll)"}),"\n",(0,n.jsx)(a.p,{children:"Reads string data from the standard input stream of the application process."}),"\n",(0,n.jsx)(a.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"readAll"})," Boolean (optional): If this is set to ",(0,n.jsx)(a.code,{children:"true"}),", the framework will read the entire standard stream. Otherwise,\nonly one line will be returned. The default value for this option is ",(0,n.jsx)(a.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"let name = await Neutralino.app.readProcessInput();\nconsole.log(`Hello ${name}`);\n"})}),"\n",(0,n.jsx)(a.h3,{id:"return-string-awaited",children:"Return String (awaited):"}),"\n",(0,n.jsx)(a.p,{children:"Standard input stream data."}),"\n",(0,n.jsx)(a.h2,{id:"appwriteprocessoutputdata",children:"app.writeProcessOutput(data)"}),"\n",(0,n.jsx)(a.p,{children:"Writes string data to the standard output stream of the application process."}),"\n",(0,n.jsx)(a.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"data"})," String: Data to be written."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"await Neutralino.app.writeProcessOutput('Enter your name: ');\nlet name = await Neutralino.app.readProcessInput();\nawait Neutralino.app.writeProcessOutput(`Hello ${name}\\n`);\n"})}),"\n",(0,n.jsx)(a.h2,{id:"appwriteprocesserrordata",children:"app.writeProcessError(data)"}),"\n",(0,n.jsx)(a.p,{children:"Writes string data to the standard error stream of the application process."}),"\n",(0,n.jsx)(a.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"data"})," String: Data to be written."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"await Neutralino.app.writeProcessError('This message goes to stderr');\n"})})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>l});var n=t(6540);const r={},i=n.createContext(r);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);