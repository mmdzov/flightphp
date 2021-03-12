import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Simple-code.css";
const SimpleCode = ({ children }) => {
  return (
    <span className='SimpleCode'>
      <SyntaxHighlighter showLineNumbers language='php' style={atomOneDark}>
        {children}
      </SyntaxHighlighter>
    </span>
  );
};

export default SimpleCode;
