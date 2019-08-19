import React from 'react'
import Link from './Link'
import styled from 'styled-components';

import NavLinkWrapper from './NavLink'
import OverviewIcon from '../icons/overview.icon';
import RecruitIcon from '../icons/recruit.icon'
import ReminderIcon from '../icons/reminder.icon'
import MessageIcon from '../icons/message.icon'
import SettingsIcon from '../icons/settings.icon';

const links = [
  { href: '/', label: 'Overview', icon: <OverviewIcon  className="icon" /> },
  { href: '/Recruit', label: 'Recruit', icon: <RecruitIcon  className="icon" />  },
  { href: '/Reminder', label: 'Reminder', icon: <ReminderIcon  className="icon" />  },
  { href: '/Message', label: 'Message', icon: <MessageIcon  className="icon" />  },
  { href: '/Settings', label: 'Settings', icon: <SettingsIcon  className="icon" />  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <StyledNav>
    <ul>
      {links.map(({ key, href, label, icon }) => (
        <NavLinkWrapper  key={key}>
          {icon}
          <Link href={href} label={label}>
          </Link>
        </NavLinkWrapper>
      ))}
    </ul>
  </StyledNav>
)

const StyledNav = styled.nav`
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(36,50,66,.15);
  width: 250px;
  height: 100vh;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 100%;
    margin-left: 2em;
  }
  .icon {
    width: 30px;
    height: 30px;
    fill: #BAC4D6;
  }
`

export default Nav
