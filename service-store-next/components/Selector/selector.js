import { useEffect, useState } from "react";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

export default function Selector(props) {
  const [values, setValues] = useState([]);
  const [changed, setChanged] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState(null);
  let options = [];
  const id = uuidv4();

  useEffect(() => {
    if (typeof props.defaultAnswer != "undefined") {
      if (props.multiple) {
        let multipleVals = [];
        const options = props.defaultAnswer.split("/");
        options.forEach((item) => {
          multipleVals.push({ label: item, value: item });
        });
        setSelectedOptions(multipleVals);
      } else {
        setSelectedOptions({
          value: props.defaultAnswer,
          label: props.defaultAnswer,
        });
      }
    }
    setValues(props.values);
  }, [props]);

  if (!props.select2ready) {
    values.forEach((element) => {
      if (typeof element == "undefined") {
        return;
      }
      options = [
        ...options,
        {
          value: element,
          label: props.hasCleanView
            ? element.substr(element.indexOf(" ") + 1)
            : element,
        },
      ];
    });
  } else {
    options = props.values;
  }
  const change = (event) => {
    let value = "";
    if (typeof event.value == "undefined") {
      value = Array.from(event, (option) => option.value);
      value = value.join("/");
    } else {
      value = event.value;
    }
    setSelectedOptions({
      value: value,
      label: props.hasCleanView
        ? event.label.substr(event.label.indexOf(" ") + 1)
        : event.label,
    });
    console.log("Selectorjs 63 value:", value);
    console.log("Selectorjs 63 event.label:", event.label);
    console.log(
      "event.label.substr(event.label.indexOf(' ') + 1)",
      event.label.substr(event.label.indexOf(" ") + 1)
    );

    props.onChange(props.placeholder, value, event.label);
  };

  return (
    <span>
      <label htmlFor={props.id}>{props.placeholder}</label>
      {props.multiple && (
        <Select
          menuPlacement="bottom"
          id={props.id}
          menuPosition={"fixed"}
          options={options}
          isMulti
          onChange={change}
          aria-label="Default select example"
        />
      )}
      {!props.multiple && (
        <Select
          value={selectedOptions}
          menuPlacement="bottom"
          id={props.id}
          menuPosition={"fixed"}
          options={options}
          onChange={change}
          aria-label="Default select example"
        />
      )}
    </span>
  );
}
