import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledIcon from "./style";
// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import SocialIcon from "./SocialIcon";

function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledIcon color={color} opacity={opacity} {...rest}>
        {IconComponent && <IconComponent width={width} height={height} />}
      </StyledIcon>
    </ThemeProvider>
  );
}

Icon.Social = SocialIcon;
Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
