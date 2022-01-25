import { useEffect, useState } from "react";
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

export default function Selector(props) {
  const [values, setValues] = useState([]);
  const [changed, setChanged] = useState(true)
  const [selectedOptions, setSelectedOptions] = useState(null);
  let options = [];
  const id = uuidv4();



  useEffect(() => {
    if (typeof props.defaultAnswer != 'undefined') {
      if (props.multiple) {
        let multipleVals = [];
        const options = props.defaultAnswer.split('/');
        options.forEach(item => {
          multipleVals.push({ 'label': item, 'value': item });
        })
        setSelectedOptions(multipleVals);
      } else {
        setSelectedOptions({
          'value': props.defaultAnswer,
          'label': props.defaultAnswer,
        })
      }
    }
    setValues(props.values)
  }, [props]);

  if (!props.select2ready) {
    values.forEach(element => {
      options = [...options, { 'value': element, 'label': element }]
    })
  } else {
    options = props.values;
  }
  const change = (event) => {
    let value = ""
    if (typeof event.value == "undefined") {
      value = Array.from(event, option => option.value);
      value = value.join('/');
    } else {
      value = event.value;
    }
    setSelectedOptions({
      'value': value,
      'label': value
    })
    props.onChange(props.placeholder, value, event.label)
  }

  return (
    <span>
      <label for={props.id} >{props.placeholder}</label>
      {props.multiple && <Select menuPlacement="bottom" id={props.id} menuPosition={'fixed'} options={options} isMulti onChange={change} aria-label="Default select example" />}
      {!props.multiple && <Select value={selectedOptions} menuPlacement="bottom" id={props.id} menuPosition={'fixed'} options={options} onChange={change} aria-label="Default select example" />}

    </span>

  )
}