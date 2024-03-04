import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledMessageCard, {
  Name,
  Status,
  Time,
  Message,
  MessageText,
  UnreadBadge,
} from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
import { ReactComponent as Replied } from "assets/icons/replied.svg";

function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledMessageCard active={active} {...rest}>
        <Avatar status={avatarStatus} src={avatarSrc} />
        <Name>{name}</Name>
        <Status>{statusText}</Status>
        <Time>{time}</Time>
        <Message replied={replied}>
          {replied && (
            <Icon
              width={16}
              height={14}
              icon={Replied}
              color={active ? theme.inactiveColorDark : theme.inactiveColor}
              opacity={active ? 0.4 : 1}
              styled={{ justifyContent: "start" }}
            />
          )}
          <MessageText>{message}</MessageText>
          <UnreadBadge count={unreadCount} />
        </Message>
      </StyledMessageCard>
    </ThemeProvider>
  );
}

MessageCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
  childrenm: PropTypes.any,
};

export default MessageCard;
