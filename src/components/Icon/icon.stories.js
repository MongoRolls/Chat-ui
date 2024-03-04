import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import "story.css";
import {
  faCommentDots,
  faFolder,
  faStickyNote,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeibo } from "@fortawesome/free-brands-svg-icons";

export default {
  title: "Ui 组件/Icon",
  components: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc" />;

export const CustomSize = () => (
  <Icon icon={SmileIcon} width={48} height="48px" color="#cccccc" />
);

// yarn add @fortawesome/react-fontawesome
// yarn add @fortawesome/fonrawesome-svg-core
// yarn add @fortawesome/free-brands-svg-icons
// yarn add @fortawesome/free-regular-svg-icons
// yarn add @fortawesome/free-solid-svg-icons

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />;
};

export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />;
};

export const FontAwesomeSize = () => {
  return (
    <div className="row-elements">
      <FontAwesomeIcon icon={faFolder} style={{ fontSize: "24px" }} />
      <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: "48px" }} />
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "72px" }} />
    </div>
  );
};

export const SocialIcon = () => {
  return (
    <div className="row-elements">
      <FontAwesomeIcon icon={faWeibo} style={{ fontSize: "24px" }} />
    </div>
  );
};
