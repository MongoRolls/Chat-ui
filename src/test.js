import styled from "styled-components";
import React from "react";

const StyledTest = styled.div`
  width: 300 px;
  height: 300 px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.green};
  }
`;

function Test() {
  return <StyledTest>无用的测试,可删除</StyledTest>;
}

export default Test;
