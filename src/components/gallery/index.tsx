import Tags from "./tags"
import Title from "../title"
import styled from "styled-components"

const GalleryContainer = styled.div`
  display: flex;
`

const FluidSection = styled.section`
  flex-grow: 1;
`

const Gallery = () => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
        </FluidSection>
        <Title align="center">Populares</Title>

      </GalleryContainer>
    </>
  )
}

export default Gallery