import Tags from "./tags"
import Title from "../title"
import styled from "styled-components"
import GalleryImage from "./gallery-image"

const GalleryContainer = styled.div`
  display: flex;
`

const FluidSection = styled.section`
  flex-grow: 1;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const Gallery = ({ photos = [], selectPhoto, toggleFavorite }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {
              photos.map(photo =>
                <GalleryImage
                  photo={ photo }
                  key={ photo.id }
                  onZoom={ selectPhoto }
                  toggleFavorite={ toggleFavorite }
                />)
            }
          </ImagesContainer>
        </FluidSection>
        <Title $align="center">Populares</Title>
      </GalleryContainer>
    </>
  )
}

export default Gallery