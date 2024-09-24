"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[1225],{2922:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(4848),r=n(8453);const s={title:"Neutralino.filesystem",toc_max_heading_level:2},a=void 0,l={id:"api/filesystem",title:"Neutralino.filesystem",description:"Neutralino.filesystem namespace contains methods for handling files.",source:"@site/docs/api/filesystem.md",sourceDirName:"api",slug:"/api/filesystem",permalink:"/docs/api/filesystem",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/filesystem.md",tags:[],version:"current",frontMatter:{title:"Neutralino.filesystem",toc_max_heading_level:2},sidebar:"docs",previous:{title:"Neutralino.extensions",permalink:"/docs/api/extensions"},next:{title:"Neutralino.init",permalink:"/docs/api/init"}},d={},c=[{value:"filesystem.createDirectory(path)",id:"filesystemcreatedirectorypath",level:2},{value:"Parameters",id:"parameters",level:3},{value:"filesystem.remove(path)",id:"filesystemremovepath",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"filesystem.writeFile(filename, data)",id:"filesystemwritefilefilename-data",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"filesystem.appendFile(filename, data)",id:"filesystemappendfilefilename-data",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"filesystem.writeBinaryFile(filename, data)",id:"filesystemwritebinaryfilefilename-data",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"filesystem.appendBinaryFile(filename, data)",id:"filesystemappendbinaryfilefilename-data",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"filesystem.readFile(filename)",id:"filesystemreadfilefilename",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Return String (awaited):",id:"return-string-awaited",level:3},{value:"filesystem.readBinaryFile(filename, options)",id:"filesystemreadbinaryfilefilename-options",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Options",id:"options",level:3},{value:"Return Object (awaited):",id:"return-object-awaited",level:3},{value:"filesystem.openFile(filename)",id:"filesystemopenfilefilename",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Return Number (awaited):",id:"return-number-awaited",level:3},{value:"filesystem.updateOpenedFile(id, action, data)",id:"filesystemupdateopenedfileid-action-data",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"filesystem.getOpenedFileInfo(id)",id:"filesystemgetopenedfileinfoid",level:2},{value:"Parameters",id:"parameters-10",level:3},{value:"Return Object (awaited):",id:"return-object-awaited-1",level:3},{value:"filesystem.createWatcher(path)",id:"filesystemcreatewatcherpath",level:2},{value:"Parameters",id:"parameters-11",level:3},{value:"Return Number (awaited):",id:"return-number-awaited-1",level:3},{value:"filesystem.removeWatcher(watcherId)",id:"filesystemremovewatcherwatcherid",level:2},{value:"Parameters",id:"parameters-12",level:3},{value:"Return Number (awaited):",id:"return-number-awaited-2",level:3},{value:"filesystem.getWatchers()",id:"filesystemgetwatchers",level:2},{value:"Return Object (awaited):",id:"return-object-awaited-2",level:3},{value:"FileWatcher",id:"filewatcher",level:3},{value:"filesystem.readDirectory(path, options)",id:"filesystemreaddirectorypath-options",level:2},{value:"Parameters",id:"parameters-13",level:3},{value:"options",id:"options-1",level:3},{value:"Return Object (awaited):",id:"return-object-awaited-3",level:3},{value:"DirectoryEntry",id:"directoryentry",level:3},{value:"filesystem.copy(source, destination)",id:"filesystemcopysource-destination",level:2},{value:"Parameters",id:"parameters-14",level:3},{value:"options",id:"options-2",level:3},{value:"filesystem.move(source, destination)",id:"filesystemmovesource-destination",level:2},{value:"Parameters",id:"parameters-15",level:3},{value:"filesystem.getStats(path)",id:"filesystemgetstatspath",level:2},{value:"Parameters",id:"parameters-16",level:3},{value:"Return Object (awaited):",id:"return-object-awaited-4",level:3},{value:"filesystem.getAbsolutePath(path)",id:"filesystemgetabsolutepathpath",level:2},{value:"Parameters",id:"parameters-17",level:3},{value:"Return String (awaited):",id:"return-string-awaited-1",level:3},{value:"filesystem.getRelativePath(path, base)",id:"filesystemgetrelativepathpath-base",level:2},{value:"Parameters",id:"parameters-18",level:3},{value:"Return String (awaited):",id:"return-string-awaited-2",level:3},{value:"filesystem.getPathParts(path)",id:"filesystemgetpathpartspath",level:2},{value:"Parameters",id:"parameters-19",level:3},{value:"Return Object (awaited):",id:"return-object-awaited-5",level:3}];function o(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Neutralino.filesystem"})," namespace contains methods for handling files."]}),"\n",(0,t.jsx)(i.h2,{id:"filesystemcreatedirectorypath",children:"filesystem.createDirectory(path)"}),"\n",(0,t.jsxs)(i.p,{children:["Creates a directory or multiple directories recursively. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_DIRCRER"})," if directory creation is\nnot possible."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: New directory path."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await Neutralino.filesystem.createDirectory('./newDirectory');\n\nawait Neutralino.filesystem.createDirectory(NL_PATH + '/myFolder/api/fs');\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemremovepath",children:"filesystem.remove(path)"}),"\n",(0,t.jsxs)(i.p,{children:["Removes a directory or file. If the given path is a directory, this function recursively removes all contents\nof the specific directory. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_REMVERR"})," if the removal is not possible."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: Directory or file path."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await Neutralino.filesystem.remove('./tmpDirectory');\nawait Neutralino.filesystem.remove('./tmpFile.txt');\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemwritefilefilename-data",children:"filesystem.writeFile(filename, data)"}),"\n",(0,t.jsxs)(i.p,{children:["Writes a text file. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILWRER"})," for file write errors."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"data"})," String: Content of the file."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await Neutralino.filesystem.writeFile('./myFile.txt', 'Sample content');\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemappendfilefilename-data",children:"filesystem.appendFile(filename, data)"}),"\n",(0,t.jsxs)(i.p,{children:["Appends text content to file. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILWRER"})," for file write errors. If the provided file doesn't exist,\nthis function creates a new file with ",(0,t.jsx)(i.code,{children:"data"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"data"})," String: Content to append."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await Neutralino.filesystem.appendFile('./myFile.txt', 'Sample ');\nawait Neutralino.filesystem.appendFile('./myFile.txt', 'content');\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemwritebinaryfilefilename-data",children:"filesystem.writeBinaryFile(filename, data)"}),"\n",(0,t.jsxs)(i.p,{children:["Writes a binary file. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILWRER"})," for file write errors."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"data"})," ArrayBuffer: Content of the binary file as an\n",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",children:"ArrayBuffer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let rawBin = new ArrayBuffer(1);\nlet view = new Uint8Array(rawBin);\nview[0] = 64; // Saves ASCII '@' to the binary file\n\nawait Neutralino.filesystem.writeBinaryFile('./myFile.bin', rawBin);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemappendbinaryfilefilename-data",children:"filesystem.appendBinaryFile(filename, data)"}),"\n",(0,t.jsxs)(i.p,{children:["Appends binary data to a file. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILWRER"})," for file write errors. If the provided file doesn't exist,\nthis function creates a new file with ",(0,t.jsx)(i.code,{children:"data"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"data"})," ArrayBuffer: Binary content to append as an\n",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",children:"ArrayBuffer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let rawBin = new ArrayBuffer(1);\nlet view = new Uint8Array(rawBin);\nview[0] = 64; // Saves ASCII '@' to the binary file\n\nawait Neutralino.filesystem.appendBinaryFile('./myFile.bin', rawBin);\nawait Neutralino.filesystem.appendBinaryFile('./myFile.bin', rawBin);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemreadfilefilename",children:"filesystem.readFile(filename)"}),"\n",(0,t.jsxs)(i.p,{children:["Reads a text file. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILRDER"})," for file read errors."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"pos"})," Number (optional): File cursor position in bytes."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"size"})," Number (optional): File reader buffer size in bytes."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-string-awaited",children:"Return String (awaited):"}),"\n",(0,t.jsx)(i.p,{children:"File content."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let data = await Neutralino.filesystem.readFile('./myFile.txt');\nconsole.log(`Content: ${data}`);\n\nlet data = await Neutralino.filesystem.readFile('./myFile.txt', {\n    pos: 2,\n    size: 10\n});\nconsole.log(`Content: ${data}`);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemreadbinaryfilefilename-options",children:"filesystem.readBinaryFile(filename, options)"}),"\n",(0,t.jsxs)(i.p,{children:["Reads binary files. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILRDER"})," for file read errors."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"pos"})," Number (optional): File cursor position in bytes."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"size"})," Number (optional): File reader buffer size in bytes."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-object-awaited",children:"Return Object (awaited):"}),"\n",(0,t.jsxs)(i.p,{children:["Content of the binary file as an\n",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",children:"ArrayBuffer"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let data = await Neutralino.filesystem.readBinaryFile('./myFile.bin');\nlet view = new Uint8Array(data);\n\nconsole.log('Binary content: ', view);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemopenfilefilename",children:"filesystem.openFile(filename)"}),"\n",(0,t.jsxs)(i.p,{children:["Creates a readable file stream. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_FILOPER"})," for file open errors."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-number-awaited",children:"Return Number (awaited):"}),"\n",(0,t.jsx)(i.p,{children:"File stream identifier."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let fileId = await Neutralino.filesystem.openFile('./myFile.txt');\nconsole.log(`ID: ${fileId}`);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemupdateopenedfileid-action-data",children:"filesystem.updateOpenedFile(id, action, data)"}),"\n",(0,t.jsxs)(i.p,{children:["Invokes file stream actions. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_UNLTOUP"})," if the framework can't update the stream. Call this method\nto read and seek an opened file (aka a readable stream)."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"id"})," Number: File stream identifier."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"action"})," String: An action to take. Accepts only the following values:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"read"}),": Reads a bytes segment from the file stream."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"readBinary"}),": Behaves the same as ",(0,t.jsx)(i.code,{children:"read"})," but uses the binary read mode."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"readAll"}),": Triggers the ",(0,t.jsx)(i.code,{children:"read"})," action until file stream cursor position reaches\n",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/End-of-file",children:"EOF"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"readAllBinary"}),": Behaves the same as ",(0,t.jsx)(i.code,{children:"readAll"})," but uses the binary read mode."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"seek"}),": Sets the file cursor position."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"close"}),": Closes and frees file handler resources."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"data"})," Object (optional): Additional data for the ",(0,t.jsx)(i.code,{children:"action"}),". Send the buffer size in bytes (default: 256 bytes)\nif the ",(0,t.jsx)(i.code,{children:"action"})," is ",(0,t.jsx)(i.code,{children:"read"}),", ",(0,t.jsx)(i.code,{children:"readBinary"}),", ",(0,t.jsx)(i.code,{children:"readAll"}),", or ",(0,t.jsx)(i.code,{children:"readAllBinary"}),". Send the file stream cursor position if the action is ",(0,t.jsx)(i.code,{children:"seek"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let fileId = await Neutralino.filesystem.openFile('./myFile.txt');\n\nlet content = '';\nNeutralino.events.on('openedFile', (evt) => {\n  if(evt.detail.id == fileId) {\n    switch(evt.detail.action) {\n      case 'data':\n        content += evt.detail.data;\n        break;\n      case 'end':\n        console.log(content);\n        break;\n    }\n  }\n});\n\n// Sets the file stream cursor to 10th byte\nawait Neutralino.filesystem.updateOpenedFile(fileId, 'seek', 10);\n// Reads 2 bytes from the cursor position\nawait Neutralino.filesystem.updateOpenedFile(fileId, 'read', 2);\n// Reads the next bytes until the cursor reaches EOF (buffer size: 2)\nawait Neutralino.filesystem.updateOpenedFile(fileId, 'readAll', 2);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemgetopenedfileinfoid",children:"filesystem.getOpenedFileInfo(id)"}),"\n",(0,t.jsxs)(i.p,{children:["Returns file stream details. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_UNLTFOP"})," if the file stream identifier is not valid."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-10",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"id"})," Number: File stream identifier."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-object-awaited-1",children:"Return Object (awaited):"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"id"})," Number: File stream identifier."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"eof"})," Boolean: Becomes ",(0,t.jsx)(i.code,{children:"true"})," if the stream reached EOF."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"pos"})," Number: File stream cursor position."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lastRead"})," Number: Last read bytes."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let info = await Neutralino.filesystem.getOpenedFileInfo(0);\nconsole.log(info);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemcreatewatcherpath",children:"filesystem.createWatcher(path)"}),"\n",(0,t.jsxs)(i.p,{children:["Creates a filesystem watcher. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_UNLCWAT"})," for watcher creation failures. If there is an existing\nactive watcher for the given path, this function returns the existing watcher identifier."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-11",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: Directory path."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-number-awaited-1",children:"Return Number (awaited):"}),"\n",(0,t.jsx)(i.p,{children:"File watcher identifier."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let watcherId = await Neutralino.filesystem.createWatcher(NL_PATH);\nNeutralino.events.on('watchFile', (evt) => {\n    if(watcherId == evt.detail.id) {\n        console.log(evt.detail);\n    }\n});\nconsole.log(`ID: ${watcherId}`);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemremovewatcherwatcherid",children:"filesystem.removeWatcher(watcherId)"}),"\n",(0,t.jsxs)(i.p,{children:["Removes a filesystem watcher. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_NOWATID"})," for watcher removal failures."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-12",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"watcherId"})," Number: File watcher identifier."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-number-awaited-2",children:"Return Number (awaited):"}),"\n",(0,t.jsx)(i.p,{children:"File watcher identifier."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let watcherId = await Neutralino.filesystem.createWatcher(NL_PATH);\nconsole.log(`ID: ${watcherId}`);\nawait Neutralino.filesystem.removeWatcher(watcherId);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemgetwatchers",children:"filesystem.getWatchers()"}),"\n",(0,t.jsx)(i.p,{children:"Returns information about created file watchers."}),"\n",(0,t.jsx)(i.h3,{id:"return-object-awaited-2",children:"Return Object (awaited):"}),"\n",(0,t.jsxs)(i.p,{children:["An array of ",(0,t.jsx)(i.code,{children:"FileWatcher"})," objects."]}),"\n",(0,t.jsx)(i.h3,{id:"filewatcher",children:"FileWatcher"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"id"})," Number: Watcher identifier."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: File watcher path."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let watchers = await Neutralino.filesystem.getWatchers();\nfor(let watcher of watchers) {\n    console.log(watcher);\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemreaddirectorypath-options",children:"filesystem.readDirectory(path, options)"}),"\n",(0,t.jsxs)(i.p,{children:["Reads directory contents. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_NOPATHE"})," if the path doesn't exist."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-13",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: File/directory path."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"options-1",children:"options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"recursive"})," Boolean: Read sub-directories recursively. The default value is ",(0,t.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-object-awaited-3",children:"Return Object (awaited):"}),"\n",(0,t.jsxs)(i.p,{children:["An array of ",(0,t.jsx)(i.code,{children:"DirectoryEntry"})," objects."]}),"\n",(0,t.jsx)(i.h3,{id:"directoryentry",children:"DirectoryEntry"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"entry"})," String: file name."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"type"})," String: The type of the entry (",(0,t.jsx)(i.code,{children:"FILE"})," or ",(0,t.jsx)(i.code,{children:"DIRECTORY"}),")."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let entries = await Neutralino.filesystem.readDirectory(NL_PATH);\nconsole.log('Content: ', entries);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemcopysource-destination",children:"filesystem.copy(source, destination)"}),"\n",(0,t.jsxs)(i.p,{children:["Copies a file or directory to a new destination. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_COPYERR"})," if the system cannot copy the path."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-14",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"source"})," String: Source path."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"destination"})," String: Destination path."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"options-2",children:"options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"recursive"})," Boolean: Copy sub-directories recursively. The default value is ",(0,t.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"overwrite"})," Boolean: Overwrite an existing file with the same name. The default value is ",(0,t.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"skip"})," Boolean: Skip an existing file with the same name. The default value is ",(0,t.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await Neutralino.filesystem.copy('./source.txt', './destination.txt');\nawait Neutralino.filesystem.copy('./myDir', './myDirCopy');\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemmovesource-destination",children:"filesystem.move(source, destination)"}),"\n",(0,t.jsxs)(i.p,{children:["Moves a file or directory to a new destination. Throws ",(0,t.jsx)(i.code,{children:"NE_FS_MOVEERR"})," if the system cannot rename the path."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-15",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"source"})," String: Source path."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"destination"})," String: Destination path."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"await Neutralino.filesystem.move('./source.txt', './destination.txt');\nawait Neutralino.filesystem.move('./myDir', './myFolder');\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemgetstatspath",children:"filesystem.getStats(path)"}),"\n",(0,t.jsxs)(i.p,{children:["Returns file statistics for the given path. If the given path doesn't exist or is inaccessible,",(0,t.jsx)(i.code,{children:"NE_FS_NOPATHE"})," is thrown.\nTherefore, you can use this method to check for the existance of a file or directory."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-16",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: File or directory path."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-object-awaited-4",children:"Return Object (awaited):"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"size"})," Number: Size in bytes."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"isFile"})," Boolean: ",(0,t.jsx)(i.code,{children:"true"})," if the path represents a normal file."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"isDirectory"})," Boolean: ",(0,t.jsx)(i.code,{children:"true"})," if the path represents a directory."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"createdAt"})," Number: On Windows, returns Unix milliseconds of the file creation time \u2014 On Unix or Unix-like platforms, returns Unix milliseconds of the last ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Inode",children:"inode"})," modification time."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"modifiedAt"})," Number: Unix milliseconds of the last file modification time."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let stats = await Neutralino.filesystem.getStats('./sampleVideo.mp4');\nconsole.log('Stats:', stats);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemgetabsolutepathpath",children:"filesystem.getAbsolutePath(path)"}),"\n",(0,t.jsx)(i.p,{children:"Returns the absolute path for a given path. This function works with paths that don't exist on the system."}),"\n",(0,t.jsx)(i.h3,{id:"parameters-17",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: Path."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-string-awaited-1",children:"Return String (awaited):"}),"\n",(0,t.jsx)(i.p,{children:"Absolute path."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let path = await Neutralino.filesystem.getAbsolutePath('./myFolder');\nconsole.log(path);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemgetrelativepathpath-base",children:"filesystem.getRelativePath(path, base)"}),"\n",(0,t.jsx)(i.p,{children:"Returns the relative path for a given path and base. This function works with paths that\ndon't exist on the system."}),"\n",(0,t.jsx)(i.h3,{id:"parameters-18",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: Path."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"base"})," String (optional): Base path that is used for calculating the relative path\nwith the ",(0,t.jsx)(i.code,{children:"path"})," parameter. ",(0,t.jsx)(i.a,{href:"/docs/api/global-variables#predefined-global-variables",children:(0,t.jsx)(i.code,{children:"NL_CWD"})})," is used\nby default if this parameter is not provided."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-string-awaited-2",children:"Return String (awaited):"}),"\n",(0,t.jsx)(i.p,{children:"Relative path."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let path = await Neutralino.filesystem.getRelativePath('./myFolder');\nconsole.log(path);\n\npath = await Neutralino.filesystem.getRelativePath('./myFolder', '/home/user');\nconsole.log(path);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"filesystemgetpathpartspath",children:"filesystem.getPathParts(path)"}),"\n",(0,t.jsx)(i.p,{children:"Parses a given path and returns its parts."}),"\n",(0,t.jsx)(i.h3,{id:"parameters-19",children:"Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," String: Path."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"return-object-awaited-5",children:"Return Object (awaited):"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"rootName"})," String: Root path name."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"rootDirectory"})," String: Root path directory."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"rootPath"})," String: Root path."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"relativePath"})," String: Path relative to the root path."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"parentPath"})," String: Parent path or the directory path without filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filename"})," String: Filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"extension"})," String: File extension."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"stem"})," String: Filename segment without extension."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"let pathParts = await Neutralino.filesystem.getPathParts('./myFolder/myFile.txt');\nconsole.log('Parts:', pathParts);\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var t=n(6540);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);