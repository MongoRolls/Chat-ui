import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledContactList, { Contacts } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import ContactCard from "components/ContactCard";
import FilterList from "components/FilterList";

function ContactList({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledContactList {...rest}>
        <FilterList
          options={["新添加优先", "按姓名排序"]}
          actionLabel="添加好友"
        >
          <Contacts>
            {new Array(10).fill(0).map((_, i) => (
              <ContactCard key={i} />
            ))}
          </Contacts>
        </FilterList>
      </StyledContactList>
    </ThemeProvider>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
