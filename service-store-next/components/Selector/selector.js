import { useEffect, useState } from "react";
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

export default function Selector(props) {
  const [values, setValues] = useState([]);
  const [changed, setChanged] = useState(true)
  let options = [];
  const id = uuidv4();

  useEffect(() => {
    setValues(props.values)
  }, [props]);

  values.forEach(element => {
    options = [...options, { 'value': element, 'label': element, 'id': props.id }]
  })

  const change = (event) => {
    let value = ""
    if (typeof event.value == "undefined") {
      value = Array.from(event, option => option.value);
      value = value.join('/');
    } else {
      value = event.value;
    }
    props.onChange(props.placeholder, value, event.id)
  }

  return (
    <span>
      <label for={props.id} >{props.placeholder}</label>
      {props.multiple && <Select menuPlacement="bottom" id={props.id} menuPosition={'fixed'} options={options} isMulti onChange={change} aria-label="Default select example" />}
      {!props.multiple && <Select menuPlacement="bottom" id={props.id} menuPosition={'fixed'} options={options} onChange={change}  aria-label="Default select example" />}

    </span>

  )
}