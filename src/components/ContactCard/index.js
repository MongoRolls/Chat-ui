import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledContactCard, { Intro, Name } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-1.jpg";

function ContactCard({ contact, children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledContactCard {...rest}>
        <Avatar src={contact.avatar} status={contact.status} />
        <Name>{contact.name}</Name>
        <Intro>{contact.intro}</Intro>
      </StyledContactCard>
    </ThemeProvider>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
