import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import MenuMd from "../../md/menu.md";
import SimpleCode from "../Simple-code/Simple-code";
import "./Learn.css";

const Learn = () => {
  const [menu, setMenu] = useState({ md: "" });
  const [content, setContent] = useState({ md: "" });
  const setMd = (mdFile, cb) => {
    fetch(mdFile)
      .then((res) => res.text())
      .then((md) => {
        try {
          cb((prev) => ({ ...prev, md: prev?.md?.concat(md ?? "") ?? "" }));
        } catch (e) {}
      });
  };

  useEffect(() => setMd(MenuMd, setMenu), []);
  useEffect(() => {
    if (menu.md) {
      let b = menu.md.match(/(#)[a-z]*/gi);
      b = b.map((item) => {
        let s = item.split("#").join("");
        return s;
      });
      b.map((item) => {
        let sf = import(`../../md/${item}.md`);
        sf.then((res) => res.default).then((md) => setMd(md, setContent));
        return false;
      });
    }
  }, [menu]);
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
