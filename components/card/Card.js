import styled from 'styled-components';

import CardHeader from './CardHeader';
import Progressbar from '../progressbar/Progressbar'
import Tag from '../tag/Tag';
import BorderButton from '../buttons/BorderButton';
import CBAButton from '../buttons/CBAButton';

const Card = ({username, text, location, avatarurl}) => {
    return (
        <CardContainer>
            <CardHeader username={username} text={text} location={location} avatarurl={avatarurl} />
            <Progressbar rating="70%"/>
            <div className="roles">
                <span>Roles</span>
                <div className="tags">
                    <StyledTag color="#F4F6FA" text="Camera Operator" smallBorder dark/>
                    <StyledTag color="#F4F6FA" text="Photographer" smallBorder dark/>
                    <StyledTag color="#F4F6FA" text="Director of photography" smallBorder dark/>
                </div>
            </div>
            <div className="buttons">
                <BorderButton label="Book Now"/>
                <BorderButton label="Pencil"/>
                <CBAButton color="#455DC7" label="Check Availiablity"/>
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.white};
    height: 400px;
    width: 300px;
    padding: 1em;
    border-radius: 5px;
    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const StyledTag = styled(Tag)`
    margin-bottom: 1em;
`


export default Card;