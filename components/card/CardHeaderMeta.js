import styled from 'styled-components';
import Tag from '../tag/Tag'

const CardHeaderMeta = ({username, price})=> {
    return (
        <Container>
            <span>{username}</span>
            <Tag text={price}></Tag>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default CardHeaderMeta;