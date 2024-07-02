import styled from 'styled-components'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { GlobalStyles } from './shared/global-styles'
import Banner from './components/banner'
import Gallery from './components/gallery'
import photos from './photos.json'
import { Dispatch, SetStateAction, useState } from 'react'
import ZoomModal from './components/zoom-modal'

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

type Photo = {
  title: string;
  source: string;
  path: string;
  id: string;
  tagId: number;
  favorite?: boolean
}

const App = () => {
  const [galleryPhotos, setGalleryPhotos]: [Photo[], Dispatch<SetStateAction<Photo[]>>] =
    useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const toggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorita: !selectedPhoto.favorite
      })
    }

    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ?
          !photo.favorite : galleryPhoto.favorite
      }
    }))
  }

  return (
    <GradientBackground>
      <GlobalStyles />

      <AppContainer>
        <Header />

        <MainContainer>
          <Sidebar />

          <GalleryContainer>
            <Banner />
            <Gallery
              photos={galleryPhotos}
              selectPhoto={ photo => setSelectedPhoto(photo) }
              toggleFavorite={ toggleFavorite }
            />
          </GalleryContainer>

        </MainContainer>

      </AppContainer>

      <ZoomModal
        selectedPhoto={selectedPhoto}
        onClose={ () => setSelectedPhoto(null) }
        toggleFavorite={ toggleFavorite }
      />
    </GradientBackground>
  )
}

export default App
