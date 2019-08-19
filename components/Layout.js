import React, {Fragment} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Meta from './meta/Meta'
import Nav from './nav/Nav';
import Header from './header/Header'

import theme from './theme'


export default ({children}) => (
    <ThemeProvider theme={theme}>
        <Fragment>
        <Meta />
        <Container>
            <Nav />
            <div className="content">
                <Header></Header>
                {children}
            </div>
        </Container>
        </Fragment>
    </ThemeProvider>
)

const Container = styled.div`
    display: grid;
    grid-template-columns: [sidenav] minmax(100px, 250px) [content] 1fr; 
`