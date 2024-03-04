import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledConversation, { MyChatBubble, Conversations } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import NavBar from "components/NavBar";
import ChatBubble from "components/ChatBubble";
import Footer from "components/Footer";
import TitleBar from "components/TitleBar";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";

function Conversation({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledConversation {...rest}>
        <TitleBar />
        <Conversations>
          <ChatBubble time="昨天 下午14：26">Hi 小李，忙什么呢？</ChatBubble>
          <MyChatBubble time="昨天 下午16：30">
            Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
          </MyChatBubble>
          <ChatBubble time="昨天 下午18：30">
            <VoiceMessage time="01:24" />
          </ChatBubble>
          <MyChatBubble time="昨天 下午16：30">
            明天永劫上号，不连赢5把不罢休 🤘
            <Emoji label="smile">🤘</Emoji>
          </MyChatBubble>
        </Conversations>
        <Footer />
      </StyledConversation>
    </ThemeProvider>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
