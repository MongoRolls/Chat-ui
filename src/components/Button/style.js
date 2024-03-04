import styled, { css } from "styled-components";

const shapeVariant = {
  circle: css`
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  rect: css`
    padding: 12px 18px;
    border-radius: 6px;
  `,
};

const typeVariant = {
  primary: css`
    /* background-color: #4f9DDE; 这里不用加双引号 */
    background-color: ${({ theme }) => theme.primaryColor};

    color: white;
  `,
};
const StyledButton = styled.button`
  border: none;
  outline: none; //去掉选中框
  cursor: pointer; //鼠标小手
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  ${({ shape }) => shapeVariant[shape]};
  ${({ type }) => typeVariant[type]};
  ${({ bgColor }) => `background-color: ${bgColor}`};

  transform: scale(1);
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export default StyledButton;
