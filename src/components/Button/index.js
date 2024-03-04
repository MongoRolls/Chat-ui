import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledButton from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

//type 类型颜色
function Button({
  children,
  type = "primary",
  shape = "circle",
  size = "30px",
  bgColor,
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        type={type}
        shape={shape}
        size={size}
        bgColor={bgColor}
        {...rest}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
}

Button.propTypes = {
  childrenm: PropTypes.any,
  type: PropTypes.oneOf(["primary"]),
  shape: PropTypes.oneOf(["circle", "rect"]),
  size: PropTypes.string,
};

export default Button;
