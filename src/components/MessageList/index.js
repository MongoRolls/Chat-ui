import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledMessageList, { ChatList } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";

import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Input from "components/Input";
import Icon from "components/Icon";
import MessageCard from "components/MessageCard";

import { ReactComponent as Plus } from "assets/icons/plus.svg";
import face1 from "assets/images/face-male-1.jpg";
import FilterList from "components/FilterList";
import { useTrail, animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

import messageData from "data/messages";

function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    <ThemeProvider theme={theme}>
      <StyledMessageList {...rest}>
        <FilterList
          options={["最新消息优先", "在线好友优先"]}
          actionLabel="创建会话"
        >
          <ChatList>
            {messageData.map((message, index) => (
              <animated.div key={message.id} style={trailAnimes[index]}>
                <MessageCard
                  key={messageData.id}
                  active={message.id === 3}
                  replied={message.replied}
                  avatarSrc={message.avatarSrc}
                  name={message.name}
                  avatarStatus={message.status}
                  statusText={message.statusText}
                  time={message.time}
                  message={message.message}
                  unreadCount={message.unreadCount}
                />
              </animated.div>
            ))}
          </ChatList>
        </FilterList>
      </StyledMessageList>
    </ThemeProvider>
  );
}

function ChatFilter({}) {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息优先</Option>
          <Option>在线好友优先</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="创建会话">
        <Button>
          <Icon icon={Plus} width={12} height={12} />
        </Button>
      </Filter.Action>
    </Filter>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
export { ChatFilter };
