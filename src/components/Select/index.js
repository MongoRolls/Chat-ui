import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledSelect from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import LabelContainer from "components/LabelContainer";

function Select({ label, type, children, ...rest }) {
  const selectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
  return (
    <ThemeProvider theme={theme}>
      {label ? (
        <LabelContainer>selectWithoutLabel</LabelContainer>
      ) : (
        selectWithoutLabel
      )}
    </ThemeProvider>
  );
}

Select.propTypes = {
  type: PropTypes.oneOf(["form"]),
  children: PropTypes.any,
};

export default Select;
