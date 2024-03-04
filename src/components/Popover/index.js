import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledPopover, { Content, Target, Triangle } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

function Popover({
  children,
  offset = {},
  content,
  onVisible,
  onHide,
  ...rest
}) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (visible) {
      setVisible(false);
      onHide && onHide(); //处理回调
    } else {
      setVisible(true);
      onVisible && onVisible();
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledPopover onClick={handleClick} {...rest}>
        <Content offset={offset} visible={visible}>
          {content}
        </Content>
        <Triangle offset={offset} visible={visible} />
        <Target>{children}</Target>
      </StyledPopover>
    </ThemeProvider>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  content: PropTypes.any,
};

export default Popover;
