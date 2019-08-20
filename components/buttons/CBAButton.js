import styled from 'styled-components';

const CBAButton = ({color, label}) => {
    return (
        <Button color={color}>
            {label}
        </Button>
    )
}

const Button = styled.button`
    border: none;
    background: ${props => props.color};
    color: #fff;
    padding: 1em;
    font-size: 1.2em;
    line-height: 2px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 500;
    margin-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`

export default CBAButton;