import React from "react";
import MessageCard from ".";

import face1 from "assets/images/face-male-1.jpg";
import avatarStories from "components/Avatar/avatar.stories";
export default {
  title: "UI 组件/MessageCard",
  components: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    name="李硕嵋"
    avatarStatus="online"
    statusText="在线"
    time="5 分钟前"
    message="只有自己才是这细碎生活里唯一的光"
    unreadCount={98}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    name="李硕嵋"
    avatarStatus="online"
    statusText="在线"
    time="5 分钟前"
    message="只有自己才是这细碎生活里唯一的光"
    unreadCount={1}
    active
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face1}
    name="李硕嵋"
    avatarStatus="online"
    statusText="在线"
    time="5 分钟前"
    message="只有自己才是这细碎生活里唯一的光"
    unreadCount={2}
    replied
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    name="李硕嵋"
    avatarStatus="online"
    statusText="在线"
    time="5 分钟前"
    message="只有自己才是这细碎生活里唯一的光"
    unreadCount={3}
    active
    replied
  />
);
