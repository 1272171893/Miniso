import React, { Fragment, ChangeEvent, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import Input from "./components/Input/input";
library.add(fas);
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      {false && (
        <Fragment>
          <Icon icon="arrow-down" size="lg" theme="info"></Icon>
          <Button autoFocus>hello</Button>
          <Button disabled>hello</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
            hello
          </Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
            hello
          </Button>
          <Button btnType={ButtonType.Link} href="http://www.baidu.com">
            hello
          </Button>
          <Button
            btnType={ButtonType.Link}
            href="http://www.baidu.com"
            disabled
          >
            hello
          </Button>
          <br />
          <Menu
            defaultIndex="0"
            mode="vertical"
            onSelect={(index) => alert(index)}
            defaultOpenSubMenus={["3"]}
          >
            <MenuItem>cool link1</MenuItem>
            <MenuItem disabled>cool link2</MenuItem>
            <MenuItem>cool link3</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown1</MenuItem>
              <MenuItem>dropdown2</MenuItem>
            </SubMenu>
          </Menu>
        </Fragment>
      )}
      <Input
        placeholder="请输入内容"
        defaultValue='你好啊'
        bordered={false}
        onChange={(e: ChangeEvent<any>) => setValue(e.target.value)}
      ></Input>
      <Input
        placeholder="请输入内容"
        disabled={true}
        bordered={false}
        value={value}
        onChange={(e: ChangeEvent<any>) => console.log(e.target.value)}
      ></Input>
    </div>
  );
}

export default App;
