import React from "react";
import Badge from ".";

import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import { ReactComponent as Option } from "assets/icons/options.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default {
  title: "UI 组件/Badge",
  components: Badge,
};

export const Default = () => <Badge count={5} />;

//存在问题，大小不对，icon修改后不变？
//debug: FontAwesomeIcon  写成FontAwesome,导致把components/Icon里面导出来，导致样式错误
export const DotVariant = () => {
  return (
    <Badge show variant="dot">
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
    </Badge>
  );
};

export const DotVariantIcon = () => {
  return (
    <Badge show variant="dot">
      <Icon icon={Option} width={24} height={24} />
    </Badge>
  );
};
