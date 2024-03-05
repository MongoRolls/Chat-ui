import React, { useState } from "react";
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

import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";

import { Route, Routes, useLocation } from "react-router-dom";
import Settings from "components/Settings";
import BlockedList from "components/BlockedList";
import VideoCall from "components/VideoCall";
import { useTransition } from "react";
import { animated } from "react-spring";

function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [videoCalling, setVideoCalling] = useState(false);

  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(-100px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100px,0,1)" },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledChatApp {...rest}>
        <Nav>
          <NavBar />
        </Nav>
        <Sidebar>
          {transitions && (
            <animated.div style={transitions.props}>
              <Routes location={transitions.item}>
                <Route path="/" element={<MessageList />} />
                <Route path="/contacts" element={<ContactList />} />
                <Route path="/files" element={<FileList />} />
                <Route path="/notes" element={<NoteList />} />
                <Route path="/settings/*" element={<EditProfile />} />
              </Routes>
            </animated.div>
          )}
        </Sidebar>
        <Content>
          {videoCalling && (
            <VideoCall onHangOffClicked={() => setVideoCalling(false)} />
          )}
          <Routes>
            <Route
              path="/*"
              element={
                <Conversation
                  onAvatarClick={() => setShowDrawer(true)}
                  onVideoClick={() => setVideoCalling(true)}
                />
              }
            ></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/settings/blocked" element={<BlockedList />}></Route>
          </Routes>
        </Content>
        <Drawer show={showDrawer}>
          <Profile onCloceClick={() => setShowDrawer(false)} />
        </Drawer>
      </StyledChatApp>
    </ThemeProvider>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
