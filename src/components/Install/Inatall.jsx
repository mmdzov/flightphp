import Markdown from "markdown-to-jsx";
import SimpleCode from "../Simple-code/Simple-code";
import InstallMd from "../../md/install.md";
import { useEffect } from "react";
import { useState } from "react";
import { mdSchemaState, setMd } from "../../utility/importMd";
const Install = () => {
  const [state, setState] = useState(mdSchemaState);
  useEffect(() => setMd(InstallMd, setState), []);
  return (
    <div className=''>
      <Markdown
        children={state.md}
        options={{
          forceBlock: true,
          overrides: {
            code: {
              component: SimpleCode,
            },
          },
        }}
      />
    </div>
  );
};

export default Install;
