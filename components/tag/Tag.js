import styled from 'styled-components'
import PropTypes from 'prop-types';

const Tag = ({text, color, active, smallBorder, small, dark, className}) => {
    console.log(color)
    return (
        <Container className={className} color={color} active={active} smallBorder={smallBorder} dark={dark} small={small}>
            <span>{text}</span>
        </Container>
    )
}

Tag.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool,
    smallBorder: PropTypes.bool
  };
  
Tag.defaultProps = {
    text: "",
    color: "#455DC7",
    active: false,
    smallBorder: false
};
  

const Container = styled.div`
    display:inline-flex;
    justify-content: center;
    font-size: ${props => props.small ? '0.8em' : '1em'};
    background: ${props => props.active ? props.active : props.color};
    border-radius: ${props => props.smallBorder ? '3px' : '10px'};
    padding: 0.1em 0.2em;
    color: ${props => props.dark ? props.theme.greyText : props.theme.white};
`

export default Tag;