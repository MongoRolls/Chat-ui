import React from "react";
import Emoji from ".";

export default {
  title: "UI 组件/Emoji",
  components: Emoji,
};

export const Default = () => (
  <div>
    {/* 为了符合标准 */}
    <Emoji label="slience-cry">'😓😭</Emoji>
    <Emoji label="laught-joker">😋🤡</Emoji>
    <Emoji label="robot-cat">🤖😺</Emoji>
  </div>
);
