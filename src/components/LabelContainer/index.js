import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledLabelContainer from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Text from "components/Text";

function LabelContainer({ children, label, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledLabelContainer {...rest}>
        {label && <Text style={{ marginBottom: "8px" }}>{label} :</Text>}
        {children}
      </StyledLabelContainer>
    </ThemeProvider>
  );
}

LabelContainer.propTypes = {
  children: PropTypes.any,
};

export default LabelContainer;
