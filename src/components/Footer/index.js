import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Input from "components/Input";
import Icon from "components/Icon";
import Button from "components/Button";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";

import Emoji from "components/Emoji";
import Popover from "components/Popover";

function Footer({ children, ...rest }) {
  const [emojiIconActive, setemojiIconActive] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <StyledFooter {...rest}>
        <Input
          placeholder="说点什么呀"
          prefix={<Icon icon={ClipIcon} />}
          suffix={
            <IconContainer>
              <Popover
                content={<PopoverContent />}
                offset={{ x: "-25%" }}
                onHide={() => setemojiIconActive(false)}
                onVisible={() => setemojiIconActive(true)}
              >
                <Icon
                  icon={SmileIcon}
                  color={emojiIconActive ? "undefined" : theme.gray3}
                />
              </Popover>
              <Icon icon={MicrophoneIcon} />
              <Button size="52px">
                <Icon
                  icon={PlaneIcon}
                  color="white"
                  styled={{ transform: "translateX(-2px)" }}
                />
              </Button>
            </IconContainer>
          }
        />
      </StyledFooter>
    </ThemeProvider>
  );
}

function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😊</Emoji>
      <Emoji label="grinning">😆</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="indexfingerup">☝️</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="smilewithsunglasses">😎</Emoji>
      <Emoji label="flexedbicep">💪</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
