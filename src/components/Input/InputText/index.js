import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledInputText, { InputUnderline } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import LabelContainer from "components/LabelContainer";

function InputText({ label, children, placeholder = "请输入内容", ...rest }) {
  const input = <InputUnderline type="text" placeholder={placeholder} />;
  return (
    <ThemeProvider theme={theme}>
      <StyledInputText {...rest}>
        {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
      </StyledInputText>
    </ThemeProvider>
  );
}

InputText.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
