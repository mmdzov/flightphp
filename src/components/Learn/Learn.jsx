import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import MenuMd from "../../md/menu.md";
import { importMd, mdSchemaState, setMd } from "../../utility/importMd";
import SimpleCode from "../Simple-code/Simple-code";
import "./Learn.css";

const Learn = () => {
  const [menu, setMenu] = useState(mdSchemaState);
  const [content, setContent] = useState(mdSchemaState);
  useEffect(() => setMd(MenuMd, setMenu), []);
  useEffect(() => importMd(menu.md, setContent), [menu]);
  return (
    <div className='Learn'>
      <div className='menu'>
        <Markdown children={menu.md} />
      </div>
      <div className='mdContainer'>
        <Markdown
          children={content.md}
          options={{
            overrides: {
              code: {
                component: SimpleCode,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Learn;
