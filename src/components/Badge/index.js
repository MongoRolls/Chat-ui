import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledBadge, { Count } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

function Badge({
  children,
  show = false,
  count = 0,
  showZero = false,
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledBadge
        variant={children ? "dot" : "default"}
        show={show}
        count={count}
        showZero={showZero}
        {...rest}
      >
        {children || <Count>{count}</Count>}
      </StyledBadge>
    </ThemeProvider>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any,
};

export default Badge;
