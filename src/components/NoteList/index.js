import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledNoteList, { Notes } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

function NoteList({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNoteList {...rest}>
        <FilterList
          options={["最新笔记优先", "最近改动优先"]}
          actionLabel="添加笔记"
        >
          <Notes>
            {new Array(10).fill(0).map((_, i) => (
              <NoteCard key={i} />
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
