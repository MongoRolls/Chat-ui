import React from "react";
import Button from ".";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
export default {
  title: "UI 组件/Button",
  components: Button,
};

export const Default = () => <Button shape="rect">默认按钮</Button>;

export const Circle = () => (
  <Button shape="circle">
    <Icon icon={Plus} width={12} height={12} />
  </Button>
);
