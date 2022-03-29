import React from "react";
import useStore from "../../services/store";

const CheckBox = (props) => {
  const { options, onOptionChecked } = props;
  const stateOptions = useStore((state) => state.options);
  const addOption = useStore((state) => state.addOption);
  const removeOption = useStore((state) => state.removeOption);
  const handleChange = (event) => {
    const target = event.target;
    const isChcked = target.checked;
    if (isChcked) {
      addOption([target.value]);
    } else {
      removeOption(target.value);
    }
    onOptionChecked();
    // console.log(isChcked);
  };
  return (
    <form className="checkbox">
      {options.map((item, index) => (
        <label className="checkbox--item" key={item + index}>
          <input
            type="checkbox"
            value={item}
            name={item}
            onChange={handleChange}
          />
          {item}
        </label>
      ))}
    </form>
  );
};

export default CheckBox;
