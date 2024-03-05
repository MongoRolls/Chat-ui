import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledBlockedList, {
  BlockAvatar,
  BlockName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from "./style";
import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Icon from "components/Icon";
import Text from "components/Text";

import { ReactComponent as closeCircle } from "assets/icons/closeCircle.svg";
import face from "assets/images/face-male-1.jpg";
import { useNavigate } from "react-router-dom";

function BlockedList({ children, ...rest }) {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <StyledBlockedList {...rest}>
        <SettingsMenu>
          <Icon
            icon={ArrowMenuLeft}
            css={`
              cursor: pointer;
            `}
            onClick={() => navigate(-1)}
          />
          <Text size="large">已屏蔽的好友</Text>
        </SettingsMenu>

        <FriendList>
          {new Array(8).fill(0).map((_, i) => {
            return (
              <ClosableAvatar key={i}>
                <BlockAvatar size="105px" src={face} />
                <CloseIcon width={46} height={51} icon={closeCircle} />
                <BlockName>李子</BlockName>
              </ClosableAvatar>
            );
          })}
        </FriendList>
      </StyledBlockedList>
    </ThemeProvider>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
