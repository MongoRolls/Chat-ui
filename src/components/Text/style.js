import styled, { css } from "styled-components";

const TypeVariant = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

const SizeVariant = {
  normal: css`
    ${({ theme }) => theme.normal};
  `,
  medium: css`
    ${({ theme }) => theme.medium}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsmall}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
};
const StyledText = styled.span`
  font-size: ${({ size }) =>
    size ? SizeVariant[size] : SizeVariant["normal"]};
  ${({ type }) => TypeVariant[type]};
  ${({ bold }) => bold && "font-weight: 500"};
`;

export default StyledText;
