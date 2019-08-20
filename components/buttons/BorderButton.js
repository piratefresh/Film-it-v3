import styled from 'styled-components';

const BorderButton = ({label}) => {
    return (
        <Container>
            {label}
        </Container>
    )
}

const Container = styled.button`
    border: ${props => `2px solid ${props.theme.grey}`};
    color: ${props => props.theme.blue};
    padding: 1em;
    font-size: 1.2em;
    line-height: 2px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 500;
    background: transparent;
    margin-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`

export default BorderButton;