import React from 'react'

import styled from 'styled-components'
import { above, colors, font } from '../util'

const Sheader = styled.header`
  background: ${colors.brightWhite};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  color: ${colors.black};

  display: grid;
  /* grid-template-columns: 25vw 1fr 55vw; */
  grid-template-rows: 1fr;
  /* grid-template-areas: 'logo mid nav'; */
  place-items: center;
  width: 100vw;
  height: 10vh;

  position: Fixed;
  top: 0;
`
const SLink = styled.a`

/* activeClassName = "active" */
  color: ${colors.black};
  ${font.size4};
  margin-right: 1.3rem;
  text-decoration: none;

  &:hover {
    color: ${colors.gray_dark};
  }

  &.active {
    color: ${colors.red};
  }
`

const Stitlelink = styled.a`
  color: ${colors.black};
  text-decoration: none;
  ${font.size3};
  text-align: center;

  ${above.small`
    ${font.size6};
  `}
`

const Sul = styled.ul`
  /* color: inherit; */
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;

  grid-area: nav;
  /* align-content: center; */
  list-style-type: none;
  margin: 0;
`

const Sli = styled.li`
  display: inline-block;
`

const Snav = styled.nav`
  grid-area: nav;
`

const Header = () => (
  <Sheader>
    <h1>
      <Stitlelink to="/">Batman</Stitlelink>
    </h1>
    <Snav>
      <Sul>
        <Sli>
          <SLink to="/">Home</SLink>
        </Sli>
        <Sli>
          <SLink to="/projects/">Projects</SLink>
        </Sli>
        <Sli>
          <SLink to="/blog/">Blog</SLink>
        </Sli>
        <Sli>
          <SLink to="/about/">About</SLink>
        </Sli>
        {/* <Sli>
          <SLink to="#contact">Contact</SLink>
        </Sli> */}
      </Sul>
    </Snav>
  </Sheader>
)

export default Header
