// import "./Simple-code.css";
// const SimpleCode = ({ children, props }) => {
//   return <pre className='SimpleCode'>{children}</pre>;
// };

// export default SimpleCode;

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Simple-code.css";
const SimpleCode = ({ children, props }) => {
  if (children.length < 20) return <div className=''>{children}</div>;
  return (
    <div className='SimpleCode'>
      <SyntaxHighlighter showLineNumbers language='php' style={atomOneDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default SimpleCode;
