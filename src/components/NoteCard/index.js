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

function NoteCard({ note, children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNoteCard {...rest}>
        <NoteImage src={note.image} />
        <NoteTitle>{note.title}</NoteTitle>
        <NoteExcerpt>{note.Excerpt}</NoteExcerpt>
        <NotePublishTime>{note.PUblishAt}</NotePublishTime>
      </StyledNoteCard>
    </ThemeProvider>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
