import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Button autoFocus>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>hello</Button>
      <br/>
      <Menu defaultIndex={0} onSelect={(index)=>alert(index)}>
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem disabled index={1}>cool link2</MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
