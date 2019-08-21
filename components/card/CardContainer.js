import styled from 'styled-components';

const Card = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2em;
    width: 40vw;
    height: 50vh;
`

export default Card;