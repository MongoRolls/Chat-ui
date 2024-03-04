import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledParagraph from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

//ellipsis超长段落是否显示省略号
function Paragraph({ children, ellipsis, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
        {children}
      </StyledParagraph>
    </ThemeProvider>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,

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
  ellipsis: PropTypes.bool,
};

export default Paragraph;
