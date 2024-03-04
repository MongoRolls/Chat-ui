import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";

export default {
  title: "UI 组件/ChatBubble",
  components: ChatBubble,
  //   storybook里面story组件包裹
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14:26">这是一条其他人发送的消息</ChatBubble>
);

export const Mine = () => (
  <ChatBubble time="昨天 下午16:30" type="mine">
    这是一条我发送的消息<Emoji>😮</Emoji>
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午18:30">
    <VoiceMessage time="02:50" />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble time="昨天 下午18:35" type="mine">
    <VoiceMessage time="02:16" type="mine" />
  </ChatBubble>
);
