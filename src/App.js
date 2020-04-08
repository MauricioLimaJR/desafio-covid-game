import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
// Custom Components
import BodyContent from './pages/components/BodyContent'
import Footer from './pages/components/Footer'
import Gameboard from './pages/gameboard/index'
import Header from './pages/components/Header'
import Landing from './pages/landing/index'
import Theme from './core/theme'
// Others
import * as colors from './constants/colors'

const StyledCanvas = styled.div`
  background-color: ${colors.white};
  font-family: !important ${'Roboto, Regular, Helvetica'};
  overflow: hidden;
  text-align: center;
`

function App() {
  return (
    // REACT ROUTER DOM ROOT
    <StyledCanvas className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Header />

          <BodyContent className="App">
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/jogar' component={Gameboard} />
              <Route path='/' component={Landing} />
            </Switch>
          </BodyContent>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </StyledCanvas>
  )
}

export default App
