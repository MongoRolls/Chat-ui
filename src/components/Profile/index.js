import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledProfile, {
  SocialLinks,
  Album,
  AlbumTitle,
  AlbumSection,
  Photo,
  CloseIcon,
} from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Avatar from "components/Avatar";

import face from "assets/images/face-male-3.jpg";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import { faGithub, faWeibo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import Seperator from "components/Seperator";
import { ContactSection } from "components/Seperator/style";
import Text from "components/Text";

import { ReactComponent as Cross } from "assets/icons/cross.svg";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "styled-components/macro";
//  用不了macro的css
// css={`
//   margin: 30px 0;
// `}

function Profile({
  showEditBtn,
  showCloseIcon,
  onEdit,
  status,
  children,
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledProfile {...rest}>
        {showCloseIcon && <CloseIcon icon={Cross} />}

        <Avatar
          src={face}
          size="160px"
          status={status}
          statusIconSize="25px"
          css={`
            grid-area: 1 /1 /3 /2;
            margin: 26px 0;
          `}
        />
        {showEditBtn && (
          <Button
            size="52px"
            onClick={onEdit}
            css={`
              grid-area: 1 /1 /3 /2;
              align-self: end;

              margin-left: 100px;
              z-index: 10;
            `}
          >
            <FontAwesomeIcon icon={faPen} style={{ fontSize: "24px" }} />
          </Button>
        )}

        <Paragraph
          size="xlarge"
          css={`
            margin-bottom: 12px;
          `}
        >
          李嵋
        </Paragraph>
        <Paragraph
          size="medium"
          type="secondary"
          css={`
            margin-bottom: 18px;
          `}
        >
          北京市 朝阳区
        </Paragraph>
        <Paragraph
          css={`
            margin-bottom: 26px;
          `}
        >
          学生,在校学习前端相关知识<Emoji laber="laught">😋</Emoji>
        </Paragraph>
        <SocialLinks>
          <Icon.Social
            icon={faWeibo}
            bgColor="#F06767"
            href="https://www.weibo.com/"
          />
          <Icon.Social icon={faGithub} bgColor="black" />
          <Icon.Social icon={faEnvelope} bgColor="#2483c0" />
        </SocialLinks>
        <Seperator
          css={`
            width: 100%;
            margin: 30px 0;
          `}
        />
        <ContactSection>
          <Description label="联系电话">+86 15107687448</Description>
          <Description label="电子邮箱">xuzhichao1618@qq.com</Description>
          <Description label="个人网站">https://mongorolls.cn</Description>
        </ContactSection>
        <Seperator
          css={`
            width: 100%;
            margin: 30px 0;
          `}
        />
        <AlbumSection>
          <AlbumTitle>
            <Text type="secondary">相册 (31) </Text>
            <a>查看全部 </a>
          </AlbumTitle>
          <Album>
            <Photo src={photo1} alt="" />
            <Photo src={photo2} alt="" />
            <Photo src={photo3} alt="" />
          </Album>
        </AlbumSection>
      </StyledProfile>
    </ThemeProvider>
  );
}

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}: </Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
