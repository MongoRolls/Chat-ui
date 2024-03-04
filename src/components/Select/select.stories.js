import React from "react";
import Select from ".";
import Option from "components/Option";
export default {
  title: "UI 组件/Input/Select",
  components: Select,
};

export const Default = () => (
  <Select>
    <Option>最新消息优先</Option>
    <Option>在线好友优先</Option>
  </Select>
);

export const FormSelect = () => (
  <Select type="form">
    <Option>广州市</Option>
    <Option>深圳市</Option>
  </Select>
);
