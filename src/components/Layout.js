import React from 'react'
import styled from 'styled-components'
import { above } from '../util'

import Header from './Header'
import Footer from './Footer'

import GlobalStyles from '../util/globalStyles'

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 10vw 1fr 10vw;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header header'
    'main main main'
    'footer footer footer'

    /* ${above.small`
    grid-template-columns: 10vw 1fr 10vw;
    /* max-width: 1920px; */
  `}; */
`

const BodyContent = styled.div`
  grid-area: main;
`

const Layout = props => (
  <>
    <GlobalStyles />
    <Container>
      <Header />
      <BodyContent>{props.children}</BodyContent>
      <Footer />
    </Container>
  </>
)

export default Layout
