import styled from 'styled-components'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { GlobalStyles } from './shared/global-styles'
import Banner from './components/banner'
import Gallery from './components/gallery'

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  max-width: 100vw;
  width: 95vw;
  margin: 0 auto;
`

const MainContainer = styled.div`
  display: flex;
  gap: 3rem;
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />

      <AppContainer>
        <Header />

        <MainContainer>
          <Sidebar />

          <GalleryContainer>
            <Banner />
            <Gallery />
          </GalleryContainer>

        </MainContainer>

      </AppContainer>

    </GradientBackground>
  )
}

export default App
