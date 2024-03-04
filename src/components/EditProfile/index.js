import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledEditProfile, {
  GenderAndRegion,
  GroupTitle,
  SelectGroup,
  StyledIconInput,
} from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { useState } from "react";
import Profile from "components/Profile";
import Avatar from "components/Avatar";
import Button from "components/Button";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import face from "assets/images/face-male-1.jpg";

import "styled-components/macro";
import Text from "components/Text";
import InputText from "components/Input/InputText";
import LabelContainer from "components/LabelContainer";
import Select from "components/Select";
import Option from "components/Option";
import Radio from "components/Radio";
import Icon from "components/Icon";
import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);

  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        showCloseIcon={false}
      />
    );
  } else
    return (
      <StyledEditProfile {...rest}>
        <Avatar
          src={face}
          size="160px"
          css={`
            grid-area: 1 /1 /3 /2;
            justify-self: center;
            margin-bottom: 12px;
          `}
        />
        <Button
          size="52px"
          css={`
            grid-area: 1 /1 /3 /2;
            align-self: end;
            justify-self: end;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon icon={faCheck} onClick={() => setShowEdit(false)} />
        </Button>
        <GroupTitle>基本信息</GroupTitle>
        <InputText label="昵称" />
        <GenderAndRegion>
          <Radio.Group label="性别">
            <Radio name="gender">男</Radio>
            <Radio name="gender">女</Radio>
            <Radio name="gender">沃尔玛塑料袋</Radio>
          </Radio.Group>
          <LabelContainer label="地区">
            <SelectGroup>
              <Select type="form">
                <Option>省份</Option>
              </Select>
              <Select type="form">
                <Option>城市</Option>
              </Select>
              <Select type="form">
                <Option>区县</Option>
              </Select>
            </SelectGroup>
          </LabelContainer>
        </GenderAndRegion>
        <InputText label="个性签名" />
        <GroupTitle>联系信息</GroupTitle>
        <InputText label="联系电话" />
        <InputText label="电子邮箱" />
        <InputText label="个人网站" />

        <GroupTitle>社交信息</GroupTitle>
        <IconInput icon={faWeibo} bgColor="#F06767" />
        <IconInput icon={faGithub} bgColor="black" />
        <IconInput icon={faEnvelope} bgColor="#2483c0" />
      </StyledEditProfile>
    );
}

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Social icon={icon} bgColor={bgColor} />
      <InputText {...rest} />
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
