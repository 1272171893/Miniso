import React, { useState, useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
}
const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened = (index&&context.mode==="vertical")?openedSubMenus.includes(index):false;
  const [menuOpen, setMenuOpen] = useState(isOpened);
  const handlerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handlerMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };
  const cliclEvents =
    context.mode === "vertical" ? { onClick: handlerClick } : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? { 
          onMouseEnter: (e: React.MouseEvent) => handlerMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handlerMouse(e, false),
         }
      : {};
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  const renderChildren = () => {
    const subMenuClasses = classNames("miniso-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement,{index:`${index}-${i}`}) ;
      }
      console.error(
        "warning:Menu has a child which is not a MenuItem component"
      );
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-item" {...cliclEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
