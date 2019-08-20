import styled from 'styled-components';
import Tag from '../tag/Tag'

const CardHeaderMeta = ({username, text, location})=> {
    return (
        <Container>
            <span>{username}</span>
            <span className="location">{location}</span>
            <Tag small text={text} color="#455DC7"></Tag>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    .location {
        font-size: 0.8em;
    }
`

export default CardHeaderMeta;