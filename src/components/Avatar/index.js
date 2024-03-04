import React from "react";
import PropTypes from "prop-types";
import face1 from "../../assets/images/face-male-1.jpg";
import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style";
import styled from "styled-components";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

function Avatar({
  src,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledAvatar {...rest}>
        {status && (
          <StatusIcon status={status} size={statusIconSize}></StatusIcon>
        )}

        <AvatarClip size={size}>
          <AvatarImage src={src} alt="" />
        </AvatarClip>
      </StyledAvatar>
    </ThemeProvider>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};

export default Avatar;
