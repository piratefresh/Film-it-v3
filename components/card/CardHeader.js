import styled from 'styled-components';
import Avatar from './Avatar'
import CardHeaderMeta from './CardHeaderMeta'

const CardHeader = ({text, username, location, avatarurl}) => {
    return (
        <Container>
            <Avatar avatarurl={avatarurl}/>
            <CardHeaderMeta username={username} text={text} location={location} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
`

export default CardHeader;