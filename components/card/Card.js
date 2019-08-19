import styled from 'styled-components';

import Avatar from './Avatar'
import CardHeaderMeta from './CardHeaderMeta'

const Card = ({username, price}) => {
    return (
        <CardContainer>
            <Avatar/>
            <CardHeaderMeta username="Joe Doe" price="$100" />
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: inline-flex;
    background: ${props => props.theme.white};
    height: 400px;
    width: 300px;
    padding: 1em;
    border-radius: 5px;
`
export default Card;