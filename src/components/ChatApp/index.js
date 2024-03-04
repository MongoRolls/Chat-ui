import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";

function ChatApp({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledChatApp {...rest}>
        <Nav>
          <NavBar />
        </Nav>
        <Sidebar>
          <MessageList />
        </Sidebar>
        <Content>
          <Conversation />
        </Content>
        <Drawer>
          <Profile />
        </Drawer>
      </StyledChatApp>
    </ThemeProvider>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
