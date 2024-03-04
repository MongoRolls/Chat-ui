import styled from "styled-components";

const InputUnderline = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
  width: 100%;
  background: none;

  font-size: ${({ theme }) => theme.normal};

  &::placeholder {
    color: ${({ theme }) => theme.gray5};
  }

  &:hover,
  &:hover {
    border-bottom-color: ${({ theme }) => theme.primaryColor};
  }
`;

const StyledInputText = styled.div``;

export default StyledInputText;
export { InputUnderline };
