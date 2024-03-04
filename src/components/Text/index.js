import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledText from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Text({ children, type = "primary", size = "normal", bold, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledText type={type} size={size} bold={bold} {...rest}>
        {children}
      </StyledText>
    </ThemeProvider>
  );
}

Text.propTypes = {
  childrenm: PropTypes.any,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
  bold: PropTypes.bool,
};

export default Text;
