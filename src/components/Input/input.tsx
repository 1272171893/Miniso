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
  bordered?: boolean | string;
}
type NativeButtonProps = InputPop & InputHTMLAttributes<HTMLElement>;
type AnchorButtonProps = InputPop & AnchorHTMLAttributes<HTMLElement>;
export type InputProps = Partial<NativeButtonProps & AnchorButtonProps>;
export const Input: FC<InputProps> = (props) => {
  const { type = "input", className, size, disabled, ...restProps } = props;
  const { bordered = true } = props;
  const classes = classNames("miniso-input", className, {
    [`input-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: disabled,
    no_border: !bordered,
  });
  return <input className={classes} {...restProps}></input>;
};
export default Input;
