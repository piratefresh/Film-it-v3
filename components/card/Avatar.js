import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = ({avatarurl}) => {
    return (
        <AvatarImg src={avatarurl} alt=""/>
    )
}

const AvatarImg = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 1em;
`

Avatar.propTypes = {
    avatarurl: PropTypes.string
}

export default Avatar