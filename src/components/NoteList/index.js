import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledNoteList, { Notes } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";
import noteData from "data/notes";

function NoteList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <ThemeProvider theme={theme}>
      <StyledNoteList {...rest}>
        <FilterList
          options={["最新笔记优先", "最近改动优先"]}
          actionLabel="添加笔记"
        >
          <Notes>
            {noteData.map((note, i) => (
              <animated.div key={note.id} style={trailAnimes[i]}>
                <NoteCard key={note.id} note={note} />
              </animated.div>
            ))}
          </Notes>
        </FilterList>
      </StyledNoteList>
    </ThemeProvider>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
