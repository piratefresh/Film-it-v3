import styled from 'styled-components';
import PropTypes from 'prop-types';
import StatusText from './StatusText';
import Tag from '../tag/Tag';

const ProgressBar = ({rating}) => {
    return (
        <Container>
            <StatusText label="Rating" status={rating} />
            <Meter>
                <span style={{width: rating}}></span>
            </Meter>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    align-items: center;
`
const Meter  = styled.div`
    height: 6px;
	position: relative;
	background: #DCE0E3;
    border-radius: 8px;
    width: 100%;
    span {
        display: block;
        height: 100%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #6BB438;
        position: relative;
        overflow: hidden;
    }
    span:after {
        content: "";
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        background-image: -o-linear-gradient(-45deg, #56aa1c 25%, transparent 25%, transparent 50%, #56aa1c 50%, #56aa1c 75%, transparent 75%, transparent);
        z-index: 1;
        background-size:            20px 20px;
        animation: move 2s linear infinite;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
}
`

ProgressBar.propTypes = {
    width: PropTypes.string,
  };
  
ProgressBar.defaultProps = {
    width: "0%",
};
  
export default ProgressBar;