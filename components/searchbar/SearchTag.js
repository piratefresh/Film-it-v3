import styled from 'styled-components'
import PropTypes from 'prop-types';
import CloseIcon from '../icons/close.icon'

const SearchTag = ({text, theme}) => {
    return (
        <Tag>
            <span>{text}</span>
            <CloseIcon fill="#fff" />
        </Tag>
    )
}

SearchTag.propTypes = {
    text: PropTypes.string,
  };
  
SearchTag.defaultProps = {
    text: "",
};
  
const Tag = styled.div`
    display:flex;
    align-items: center;
    text-align: center;
    background: #455DC7;
    border-radius: 10px;
    padding: 0.3em 0.5em;
    color: ${props => props.theme.white};
    margin-left: 2em;
    svg {
        width: 21px;
        height: 21px;
        margin-left: 0.2em;
    }
`

export default SearchTag;