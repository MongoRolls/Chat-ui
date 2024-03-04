import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledSeperator from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Seperator({ ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledSeperator {...rest}></StyledSeperator>
    </ThemeProvider>
  );
}

Seperator.propTypes = {};

export default Seperator;
