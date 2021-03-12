import Markdown from "markdown-to-jsx";
import AboutMd from "../../md/about.md";
import { useEffect, useState } from "react";
import SimpleCode from "../Simple-code/Simple-code";
import { mdSchemaState, setMd } from "../../utility/importMd";
const About = () => {
  const [state, setState] = useState(mdSchemaState);
  useEffect(() => {
    setMd(AboutMd, setState);
  }, []);
  return (
    <div className='About'>
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

export default About;
