import React from "react";

import './Input.scss'

export interface InputProps {
  type: 'password' | 'text';
}

export const Input = (props: InputProps) => {
  return <input className="y-input" type={props.type} />
};
