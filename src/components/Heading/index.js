import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledHeading from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Heading({ children, level, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeading as={`h${level}`} {...rest}>
        {children}
      </StyledHeading>
    </ThemeProvider>
  );
}

Heading.propTypes = {
  childrenm: PropTypes.any,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
