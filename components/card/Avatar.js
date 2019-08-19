import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = ({avatarurl}) => {
    return (
        <AvatarImg src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80" alt=""/>
    )
}

const AvatarImg = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 10px;
    margin-right: 1em;
`

Avatar.propTypes = {
    avatarurl: PropTypes.string
}

export default Avatar