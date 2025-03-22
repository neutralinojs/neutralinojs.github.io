import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Playground = () => {
  const [code, setCode] = useState(
    `// Sample Neutralinojs code\nNeutralino.init();\nNeutralino.window.setTitle("Hello from the Playground!");\nNeutralino.os.showMessageBox("Welcome", "This is a mock message box!");\nNeutralino.filesystem.readFile("sample.txt", (data) => {\n  console.log("File content:", data);\n}, () => {\n  console.log("Failed to read file");\n});`
  );
  const [outputMessages, setOutputMessages] = useState([]);

  const addMessage = (message, type = 'success') => {
    setOutputMessages((prev) => [...prev, { message, type }]);
  };

  const runCode = () => {
    setOutputMessages([]);
    try {
      const Neutralino = {
        init: () => addMessage('Initialized Neutralino', 'success'),
        window: {
          setTitle: (title) => addMessage(`Window title set to: ${title}`, 'success'),
        },
        os: {
          showMessageBox: (title, content) =>
            addMessage(`MessageBox: ${title} - ${content}`, 'success'),
        },
        filesystem: {
          readFile: (path, successCallback, errorCallback) => {
            if (path === 'sample.txt') {
              successCallback('This is a mock file content!');
            } else {
              errorCallback();
            }
          },
        },
      };
      const console = {
        log: (...args) => addMessage(`Console: ${args.join(' ')}`, 'info'),
      };
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (e) {
      addMessage(`Error: ${e.message}`, 'error');
    }
  };

  return (
    <div className="playground-container">
      <div className="playground-content">
        <div className="playground-editor">
          <h3 className="playground-editor-header">Code Editor</h3>
          <Editor
            height="500px"
            language="javascript"
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
            loading={<div>Loading editor...</div>}
          />
          <button className="playground-run-button" onClick={runCode}>
            Run Code
          </button>
        </div>
        <div className="playground-output-container">
          <h3 className="playground-output-header">Output</h3>
          <div className="playground-output">
            {outputMessages.length === 0 ? (
              <span className="playground-output-placeholder">Run your code to see the output...</span>
            ) : (
              outputMessages.map((msg, index) => (
                <div key={index} className={`playground-output-message playground-output-${msg.type}`}>
                  {msg.message}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;