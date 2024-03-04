import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledEmoji from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Emoji({ children, label, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEmoji role="img" aria-label={label} {...rest}>
        {children}
      </StyledEmoji>
    </ThemeProvider>
  );
}

Emoji.propTypes = {
  childrenm: PropTypes.any,
  label: PropTypes.string,
};

export default Emoji;
