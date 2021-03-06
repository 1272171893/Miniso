import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes  } from "react";
import classNames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: ReactNode;
  href?: string;
}
type NativeButtonProps =BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps =BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
//将交叉类型的的属性都变成可选
export type ButtonProps =Partial<NativeButtonProps & AnchorButtonProps>;
export const Button: FC<ButtonProps> = (props) => {
  const { className,disabled, size, btnType, children, href,...restProps } = props;
  //默认是btn类
  const classes = classNames("btn",className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};
export default Button;
