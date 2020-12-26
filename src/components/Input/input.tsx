import React, { FC } from "react";
import classNames from "classnames";
export enum InputType {
    input = "input",
    TextArea = "textArea",
}
export enum InputSize {
    Large = "lg",
    Small = "sm",
}

interface InputProps {
    className?: string;
    disabled?: boolean;
    type?: InputType;
    size?: InputSize;
    placeholder?: string;
}
export const Input: FC<InputProps> = (props) => {
    const { type = "input", className, size, disabled, ...restProps } = props;
    const classes = classNames("miniso-input", className, {
        [`input-${type}`]: type,
        [`btn-${size}`]: size,
        disabled: disabled,
    });

    return (
        <input className={classes} type="input" {...restProps}></input>
    );
};
export default Input;
