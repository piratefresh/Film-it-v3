import styled from 'styled-components'
import PropTypes from 'prop-types';

const Tag = ({text}) => {
    return (
        <Container>
            <span>{text}</span>
        </Container>
    )
}

Tag.propTypes = {
    text: PropTypes.string,
  };
  
Tag.defaultProps = {
    text: "",
};
  

const Container = styled.div`
    display:flex;
    justify-content: center;
    background: #4285f4;
    border-radius: 10px;
    padding: 0.1em 0.2em;
    color: ${props => props.theme.white};
`

export default Tag;