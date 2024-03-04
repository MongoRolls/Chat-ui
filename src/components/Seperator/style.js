import styled from "styled-components";

const StyledSeperator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

const ContactSection = styled.div`
  display: grid;
  row-gap: 18px;
`;

export default StyledSeperator;
export { ContactSection };
