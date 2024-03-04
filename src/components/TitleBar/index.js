import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledTitleBar, { Title, Actions } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import face from "assets/images/face-male-3.jpg";

import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";
import { DropdownItem } from "components/DropDown/style";
import Seperator from "components/Seperator";
import Dropdown from "components/DropDown";

function TitleBar({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledTitleBar {...rest}>
        <Avatar status="offline" src={face} />
        <Title>
          <Paragraph size="large">O.o?</Paragraph>
          <Paragraph type="secondary">
            <Text>离线</Text>
            <Text> 最后阅读: 昨天</Text>
          </Paragraph>
        </Title>

        <Actions>
          <Icon opacity={0.3} icon={Call} />
          <Icon opacity={0.3} icon={Camera} />
          <Dropdown
            content={
              <>
                <DropdownItem>
                  <Paragraph>个人资料</Paragraph>
                </DropdownItem>
                <DropdownItem>
                  <Paragraph>关闭会话</Paragraph>
                </DropdownItem>
                <Seperator />
                <DropdownItem>
                  <Paragraph type="danger">屏蔽此人</Paragraph>
                </DropdownItem>
              </>
            }
          >
            <Icon opacity={0.3} icon={Options} />
          </Dropdown>
        </Actions>
      </StyledTitleBar>
    </ThemeProvider>
  );
}

TitleBar.propTypes = {
  childrenm: PropTypes.any,
};

export default TitleBar;
