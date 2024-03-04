import React from "react";
import Text from ".";

export default {
  title: "排版/Text",
  components: Text,
};

export const Default = () => <Text>默认</Text>;

export const Secondary = () => (
  <Text type="secondary">次要文本,opacity: 0.3</Text>
);

export const Medium = () => <Text size="medium">medium 大小文体</Text>;

// 填bold默认为true
export const largeAndBold = () => (
  <Text size="large" bold>
    large 大小文体 加粗
  </Text>
);
