import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 忘记prop加花括号了
function SocialIcon({ icon, bgColor, href, ...rest }) {
  return (
    <Button
      size="30px"
      bgColor={bgColor}
      onClick={() => href && window.open(href, "_blank")} //新页面打开
      {...rest}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
    </Button>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.elementType,
  bgColor: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
