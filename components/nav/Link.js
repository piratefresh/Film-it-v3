import styled from 'styled-components';
import PropTypes from 'prop-types';
import NextLink from 'next/link'

const Link = ({href, label}) => {
    return(
        <NextLink href={href ? href: "/"}>
            <StyledLink>{label}</StyledLink>
        </NextLink>
    )
}

const StyledLink = styled.a`
    text-decoration: none;
    color: #000;
    cursor: pointer;
`
Link.defaultProps = {
    href: "/"
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string
}

export default Link;