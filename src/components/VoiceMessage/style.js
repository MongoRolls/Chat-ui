import styled, { css } from "styled-components";
import StyledButton from "components/Button/style";
import StyledIcon from "components/Icon/style";
import StyledText from "components/Text/style";

const TypeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;
      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    & > ${StyledIcon} path {
      fill: white;
    }
    & > ${StyledText} {
      color: white;
    }
  `,
};
const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }

  ${({ type }) => type && TypeVariants[type]}
`;

export default StyledVoiceMessage;
