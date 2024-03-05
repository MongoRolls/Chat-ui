import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledContactList, { Contacts } from "./style";

// 新版本需要包裹
import { ThemeProvider } from "styled-components";
import theme from "theme";
import ContactCard from "components/ContactCard";
import FilterList from "components/FilterList";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

import contactsData from "data/contacts";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <ThemeProvider theme={theme}>
      <StyledContactList {...rest}>
        <FilterList
          options={["新添加优先", "按姓名排序"]}
          actionLabel="添加好友"
        >
          <Contacts>
            {contactsData.map((contact, i) => (
              <animated.div key={contact.id} style={trailAnimes[i]}>
                <ContactCard key={contact.id} contact={contact} />
              </animated.div>
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
