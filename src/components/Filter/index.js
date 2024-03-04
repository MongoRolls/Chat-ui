import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledFilter, { Filters, Action } from "./style";
import Text from "components/Text";
// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Filter({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledFilter {...rest}>{children}</StyledFilter>
    </ThemeProvider>
  );
}

Filter.Filters = ({ children, label, ...rest }) => (
  <Filters {...rest}>
    <Text type="secondary">{label}：</Text>
    {children}
  </Filters>
);
Filter.Action = ({ children, label, ...rest }) => (
  <Action {...rest}>
    <Text type="secondary">{label}</Text>
    {children}
  </Action>
);

Filter.propTypes = {
  children: PropTypes.any,
};
export default Filter;
