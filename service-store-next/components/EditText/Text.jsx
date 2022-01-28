import React from "react";
import { useEffect, useState } from "react";
import { EditText } from "react-edit-text";

const Text = (props) => {
  const [text, setText] = useState(props.defaultValue);

  useEffect(() => {
    setText(props.value);
  }, [props]);

  console.log("PROPS", props);

  return (
    <div style={{ whiteSpace: "wrap" }}>
      <EditText
        id={props.part}
        type={props.part == "date" ? "date" : "text"}
        name={props.part}
        placeholder={props.ph}
        inline
        value={text}
        // defaultValue={props.defaultValue}
        style={{ width: "500px", color: "purple" }}
        onSave={props.onSave}
        onChange={setText}
        readonly={props.readonly}
      />
    </div>
  );
};

export default Text;
