import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Button from "../components/Button/button";
// const styles: React.CSSProperties = {
//   textAlign: "center",
// };

// const CenterDecorator = ( storyFn: any ) =>(<div style={styles}>{storyFn()}</div>)

const defaultButton = () => (
  <Button onClick={action("clicked")}>default button</Button>
);
const ButtonWithSize = () => (
  <>
    <Button size="lg">default button</Button>
    <Button size="sm">default button</Button>
  </>
);
const ButtonWithType = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="https://www.baidu.com">
      link button
    </Button>
  </>
);
storiesOf("Button component", module)
  .addDecorator(withInfo)
  .addParameters({info:{
    text:"this is a very nice components",
    inline:true,
  }})
  .add("默认 Button", defaultButton)
  .add("不同size Button", ButtonWithSize)
  .add("不同type Button", ButtonWithType);
