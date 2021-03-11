import Markdown from "markdown-to-jsx";

const MdTemp = ({ md, tag, component }) => {
  return (
    <Markdown
      children={md}
      options={{
        overrides: {
          [tag]: {
            component: component,
          },
        },
      }}
    />
  );
};

export default MdTemp;
