import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledChatBubble, {
  Bubble,
  BubbleTip,
  MessageText,
  Time,
} from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

import { ReactComponent as BubbleTipIcon } from "assets/icons/bubbleTip.svg";

function ChatBubble({ children, type, time, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledChatBubble type={type} {...rest}>
        <Bubble>
          <BubbleTip
            icon={BubbleTipIcon}
            width={40}
            height={28}
            color="white"
          />
          <MessageText> {children}</MessageText>
        </Bubble>
        <Time>{time}</Time>
      </StyledChatBubble>
    </ThemeProvider>
  );
}

ChatBubble.propTypes = {
  childrenm: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default ChatBubble;
