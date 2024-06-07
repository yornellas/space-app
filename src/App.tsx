import styled from 'styled-components'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { GlobalStyles } from './shared/global-styles'



const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <Sidebar />
    </GradientBackground>
  )
}

export default App
