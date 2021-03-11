import Markdown from "markdown-to-jsx";
import AboutMd from "../../md/about.md";
import { useEffect, useState } from "react";
import SimpleCode from "../Simple-code/Simple-code";
const About = () => {
  const [state, setState] = useState({ md: "" });
  useEffect(() => {
    fetch(AboutMd)
      .then((res) => res.text())
      .then((md) => setState({ md }));
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
