import styled from 'styled-components';
import InputField from './InputField';
import LabelField from './LabelField';

const FormGroup = () => {
    return (
        <Container>
            <LabelField label="Test" />
            <InputField />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default FormGroup;