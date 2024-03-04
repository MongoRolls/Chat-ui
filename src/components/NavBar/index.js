import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";

import profileImage from "assets/images/face-male-1.jpg";
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import "styled-components/macro";
import { ThemeProvider } from "styled-components";
import theme from "theme";

function NavBar({ ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online" />

        <MenuItems>
          <MenuItem showBadge active icon={faCommentDots} />

          <MenuItem icon={faUsers} />
          <MenuItem icon={faFolder} />
          <MenuItem icon={faStickyNote} />
          <MenuItem icon={faEllipsisH} />
          <MenuItem
            icon={faCog}
            css={`
              align-self: end;
            `}
          />
        </MenuItems>
      </StyledNavBar>
    </ThemeProvider>
  );
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
