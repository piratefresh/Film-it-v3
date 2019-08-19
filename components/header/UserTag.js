import styled from 'styled-components';

const UserTag = ({username}) => {
    return (
        <UserTagWrapper>
            <img src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80" alt={username}/>
            <span>{username}</span>
        </UserTagWrapper>
    )
}

const UserTagWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: ${props => props.theme.halfround};
    background: ${props => props.theme.white};
    height:60px;
    span {
        padding: 1em;
    }
    img {
        width: 80px;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: ${props => props.theme.halfround};
        border-bottom-left-radius: ${props => props.theme.halfround};
    }
`

export default UserTag;