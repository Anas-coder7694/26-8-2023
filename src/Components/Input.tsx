import React, { ChangeEventHandler } from 'react';

type InputProps = {
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
