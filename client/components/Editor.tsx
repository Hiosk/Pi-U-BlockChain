import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import "react-quill/dist/quill.snow.css";

const Editor: React.FC<any> = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill value={value} onChange={value => setValue(value)} />
      value: {value}
    </div>
  );
};

export default Editor;