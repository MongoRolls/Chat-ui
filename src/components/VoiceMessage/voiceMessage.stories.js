import React from "react";
import VoiceMessage from ".";

export default {
  title: "UI 组件/VoiceMessage",
  components: VoiceMessage,
};

export const Default = () => <VoiceMessage time="01:34:52" />;
export const Mine = () => <VoiceMessage type="mine" time="01:52" />;
