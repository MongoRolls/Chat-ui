import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledNoteCard, {
  NoteExcerpt,
  NoteImage,
  NotePublishTime,
  NoteTitle,
} from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import note1 from "assets/images/note-1.jpg";

function NoteCard({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNoteCard {...rest}>
        <NoteImage src={note1} />
        <NoteTitle>这是笔记标题</NoteTitle>
        <NoteExcerpt>这是笔记内容摘要</NoteExcerpt>
        <NotePublishTime>2023-12-06</NotePublishTime>
      </StyledNoteCard>
    </ThemeProvider>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
