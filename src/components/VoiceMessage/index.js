import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledVoiceMessage from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Button from "components/Button";
import Icon from "components/Icon";
import Text from "components/Text";
import { ReactComponent as Play } from "assets/icons/play.svg";
import { ReactComponent as Wave } from "assets/icons/wave.svg";

function VoiceMessage({ children, type, time, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledVoiceMessage type={type} {...rest}>
        <Button size="40px">
          <Icon
            icon={Play}
            color="white"
            width="14px"
            height="16px"
            style={{ transform: "translateX(1px)" }}
          />
        </Button>
        <Icon
          icon={Wave}
          width="100%"
          height="100%"
          color={theme.primaryColor}
        />
        <Text bold>{time}</Text>
      </StyledVoiceMessage>
    </ThemeProvider>
  );
}

VoiceMessage.propTypes = {
  childrenm: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default VoiceMessage;
