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
import { Link, matchPath, useLocation } from "react-router-dom";

function NavBar({ ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online" />

        <MenuItems>
          <MenuItem to="/" showBadge icon={faCommentDots} />
          <MenuItem to="/contacts" icon={faUsers} />
          <MenuItem to="/files" icon={faFolder} />
          <MenuItem to="/notes" icon={faStickyNote} />
          <MenuItem icon={faEllipsisH} />
          <MenuItem
            to="/settings"
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

function MenuItem({ to = "#", icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(
    {
      path: to,
      end: true,
    },
    loc.pathname
  );

  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
