import React, { FC, InputHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
export enum InputType {
  input = "input",
  TextArea = "textarea",
}
export enum InputSize {
  Large = "lg",
  Small = "sm",
}

interface InputPop {
  className?: string;
  disabled?: boolean;
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  defaultValue?: string | undefined;
  value?: string | undefined;
}
type NativeButtonProps = InputPop & InputHTMLAttributes<HTMLElement>;
type AnchorButtonProps = InputPop & AnchorHTMLAttributes<HTMLElement>;
export type InputProps = Partial<NativeButtonProps & AnchorButtonProps>;
export const Input: FC<InputProps> = (props) => {
  const { type = "input", className, size, disabled, ...restProps } = props;
  const classes = classNames("miniso-input", className, {
    [`input-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: disabled,
  });
  return <input className={classes} type="input" {...restProps}></input>;
};
export default Input;
