import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Custom Components
import BodyContent from './pages/components/BodyContent'
import Landing from './pages/landing/index'
// Custom Settings
import * as colors from './constants/colors'

const Canvas = styled.div`
  background: linear-gradient(
    ${colors.cornflowerBlue},
    ${colors.steelBlue},
    ${colors.blueChill}
  );
  height: 100vh;
  font-family: !important ${'CircularStd, Helvetica'};
  text-align: center;
`

function App() {
  return (
    // REACT ROUTER DOM ROOT
    <Canvas className="App">
      <BrowserRouter>
        <BodyContent>
          <Switch>
            <Route exact path='/' component={Landing} />
            {/* <Route path='/' component={NoMatchPage} /> */}
          </Switch>
        </BodyContent>
      </BrowserRouter>
    </Canvas>
  )
}

export default App
