import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledSwitch, { Checkbox, Slider } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Switch({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledSwitch {...rest}>
        <Checkbox />
        <Slider />
      </StyledSwitch>
    </ThemeProvider>
  );
}

Switch.propTypes = {
  children: PropTypes.any,
};

export default Switch;
