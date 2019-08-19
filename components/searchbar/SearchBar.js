import styled from 'styled-components';

import SearchTag from '../searchbar/SearchTag'
import MagnifyIcon from '../icons/magnify.icon'

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <MagnifyIcon />
            <SearchTag text="Voice Artist"></SearchTag>
            <SearchTag text="Voice Artist"></SearchTag>
            <SearchTag text="Voice Artist"></SearchTag>
            <SearchTag text="Voice Artist"></SearchTag>
        </SearchBarContainer>
    )
}

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
`

export default SearchBar;