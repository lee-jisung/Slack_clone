import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../../Config/StateProvider';

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
        {/* Time icon */}
      </div>

      <div className="header__search">
        {/* Search Icon */}
        <SearchIcon />
        <input placeholder="Search ..." />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        {/* help icon */}
      </div>
    </div>
  );
}

export default Header;
