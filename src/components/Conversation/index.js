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
import { useSpring } from "react-spring";

function Conversation({ onAvatarClick, onVideoClick, children, ...rest }) {
  const tbarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3D(0px.0px,0px)",
    from: { opacity: 0, transform: "translate3D(0px,-50px,0)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3D(0px.0px,0px)",
    from: { opacity: 0, transform: "translate3D(50px,-0px,0)" },
    delay: 800,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3D(0px.0px,0px)",
    from: { opacity: 0, transform: "translate3D(0px,50px,0)" },
    delay: 950,
  });
  return (
    <ThemeProvider theme={theme}>
      <StyledConversation {...rest}>
        <TitleBar
          onAvatarClick={onAvatarClick}
          onVideoClick={onVideoClick}
          animeProps={tbarAnimeProps}
        />
        <Conversations style={convsAnimeProps}>
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
        <Footer animeProps={ftAnimeProps} />
      </StyledConversation>
    </ThemeProvider>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
