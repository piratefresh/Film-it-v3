import React from 'react';
import styled from 'styled-components'

import SearchBar from '../searchbar/SearchBar'
import UserTag from './UserTag'

const Header = () => {
    return (
        <HeaderContainer>
            <SearchBar />
            <UserTag username="Benjamin Duncan"/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 80px;
    padding: 1em;
`

export default Header;