import styled from 'styled-components';

const NavLink = ({children}) => {
    return (
        <NavLinkWrapper>
            {children}
        </NavLinkWrapper>
    )
}

const NavLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2em;
    svg {
        margin-right: 1em;
    }
`

export default NavLink