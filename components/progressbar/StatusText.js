import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatusText = ({status, label}) => {
    return (
        <StatusTextFont>
           <span>{status}</span>
           <span>{label}</span>
        </StatusTextFont>
    )
}

StatusText.propTypes = {
    status: PropTypes.string,
    label: PropTypes.string.isRequired
  };
  
StatusText.defaultProps = {
    status: "0%",
    label: "Rating"
};

const StatusTextFont = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
    span {
        margin-right: 1em;
    }

`

export default StatusText;