import styled from 'styled-components'
import Meta from '../components/meta/Meta'
import Card from '../components/card/CardContainer'
import FormGroup from '../components/form/FormGroup'

const SignUp = () => {
    return (
        <>
        <Meta />
            <Container>
                <Card>
                <h1>Film-IT</h1>
                    <FormGroup></FormGroup>
                </Card>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default SignUp;