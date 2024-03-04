import React from "react";
import Input from ".";

import Icon from "components/Icon";
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
export default {
  title: "UI 组件/Input",
  components: Input,
};

export const Default = () => <Input />;

export const Search = () => <Input.Search />;

export const withAffix = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#cccccc" />}
    suffix={<Icon icon={SmileIcon} color="#cccccc" />}
  />
);

export const FontAwesome = () => (
  <Input
    prefix={
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "18px" }} />
    }
  />
);

export const InputTextWithLable = () => <Input.Text label="昵称" />;

export const InputTextWithoutLable = () => <Input.Text />;
