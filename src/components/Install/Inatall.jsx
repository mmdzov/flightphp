import Markdown from "markdown-to-jsx";
import SimpleCode from "../Simple-code/Simple-code";
import InstallMd from "../../md/install.md";
import { useEffect } from "react";
import { useState } from "react";
const Install = () => {
  const [state, setState] = useState({ md: "" });
  useEffect(() => {
    fetch(InstallMd)
      .then((res) => res.text())
      .then((md) => setState({ md }));
  }, []);
  return (
    <div className=''>
      <Markdown
        children={state.md}
        options={{
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
