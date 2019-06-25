import React from 'react'
import styled from 'styled-components'
import { above, colors } from '../util'

const StyledFooter = styled.footer`
  background: ${colors.black};
  width: 100vw;
  position: relative;
  bottom: 0;
  grid-area: footer;

  ${above.small`
    margin-top: 3rem;
  `}
`

const FooterWrapper = styled.div`


  /* ${above.small`
    grid-area: main;
  /* flex-grow: 1; */
  `} */
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <p>Created by Batman</p>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer
