import { useEffect } from "react";

interface EgovViewTemplateProps {
  children?: React.ReactNode;
}

function EgovViewTemplate(props: EgovViewTemplateProps) {
  console.group("EgovViewTemplate");
  console.log("[Start] EgovViewTemplate ------------------------------");
  console.log("EgovViewTemplate [props] : ", props);

  useEffect(() => {
    return () => {};
  }, []);

  console.log("------------------------------EgovViewTemplate [End]");
  console.groupEnd();
  return (
    <div className="container">
      <div className="c_wrap">{props.children}</div>
    </div>
  );
}

export default EgovViewTemplate;
