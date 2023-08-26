import React, { ChangeEventHandler } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  optionsList: Option[];
};

function Select(props: SelectProps) {
  return (
    <div>
      <label>{props.label}</label>
      <select value={props.value} onChange={props.onChange}>
        {props.optionsList.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
