import { useEffect } from 'react';
import Prism from 'prismjs';
// import 'prismjs/plugins/clipboard/prism-clipboard.js';
// import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-dark.css';
import 'prismjs/themes/prism-okaidia.css'; 


const CodeBlock = ({ code }) => {
    useEffect(() => {
        Prism.highlightAll(); // برای اعمال هایلایت بر روی کد
      }, [code]);
  return (
    <div>
    <pre>
      <code className="language-html">
        {code}
      </code>
    </pre>
    <button onClick={() => {
        navigator.clipboard.writeText(code)
    }} className="copy-to-clipboard">Copy</button>
    </div>
  );
};

export default CodeBlock;