export const mdSchemaState = { md: "" };
export const setMd = async (mdFile, cb) => {
  fetch(mdFile)
    .then((res) => res.text())
    .then((md) => {
      try {
        cb((prev) => ({ ...prev, md: prev?.md?.concat(md ?? "") ?? "" }));
      } catch (e) {}
    });
};
export let importMd = (md, cb = () => {}) => {
  if (md) {
    let menuNames = md.match(/(#)[a-z]*/gi);
    menuNames.map((item) => {
      const extract = item.split("#").join("");
      (async () => {
        try {
          let res = await import(`../md/${extract}.md`);
          const md = await res.default;
          setMd(md, cb);
        } catch (e) {
          throw new Error(e);
        }
      })();
      return false;
    });
  }
};
