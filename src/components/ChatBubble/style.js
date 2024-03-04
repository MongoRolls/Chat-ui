import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Text from "components/Text";

import { Secondary } from "stories/Button.stories";
import styled, { css } from "styled-components";

const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`;

const MessageText = styled(Text)``;

const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`;

const TypeVariants = {
  mine: css`
    /* 因为嵌套这里设置子组件就可以了 */
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg); /*翻转小尾巴*/
      right: 0;
      left: unset;

      /* SVG使用path的fill来设置颜色 */
      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    ${Time} {
      text-align: right;
      margin-right: 24px;
      margin-left: 0px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};

const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;
  /* 这里引入TypeVariant进行判断，若有则修改 */
  ${({ type }) => type && TypeVariants[type]}
`;

export default StyledChatBubble;
export { Time, BubbleTip, MessageText, Bubble };
