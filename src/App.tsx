import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button autoFocus>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>hello</Button>

    </div>
  );
}

export default App;
