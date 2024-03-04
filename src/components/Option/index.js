import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledOption from "./style"

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Option({children,...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledOption {...rest}>
       {children}
      </StyledOption>
    </ThemeProvider>
  );
}

Option.propTypes = {
  childrenm: PropTypes.any
};

export default Option;
