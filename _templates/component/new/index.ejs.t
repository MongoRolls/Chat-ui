---
to: src/components/<%= name %>/index.js
---
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styled<%= name %> from "./style"

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function <%= name %>({children,...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <Styled<%= name %> {...rest}>
       {children}
      </Styled<%= name %>>
    </ThemeProvider>
  );
}

<%= name %>.propTypes = {
  children: PropTypes.any
};

export default <%= name %>;
