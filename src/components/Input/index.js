import React from "react";
import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components";
import StyledInput, { InputContainer, Prefix, Suffix } from "./style";
import Icon from "components/Icon";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import InputText from "./InputText";

function Input({ placeholder = "说点什么呀", prefix, suffix, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput placeholder={placeholder} />
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    </ThemeProvider>
  );
}

function Search({ placeholder = "搜点什么看看...", ...rest }) {
  // const theme = useTheme();
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
        // 这里换成fontAwesome库会报错(加了import)
        // 这是因为Icon是我们把本地svg转化成组件,fontAwesome要用
        //<FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />;
      }
      {...rest}
    />
  );
}

Input.Search = Search;
Input.Text = InputText;

Input.propTypes = {
  placeholder: PropTypes.string,
  suffix: PropTypes.any,
  prefix: PropTypes.any,
};

export default Input;
