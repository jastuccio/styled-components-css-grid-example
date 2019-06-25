import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { colors } from './Colors'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    font-family: 'Lato', sans-serif;
    color: ${colors.black}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
  }
`
export default GlobalStyle
