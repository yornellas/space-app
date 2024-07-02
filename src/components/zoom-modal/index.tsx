import styled from "styled-components"
import GalleryImage from "../gallery/gallery-image"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledDialog = styled.dialog<{onClose}>`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`

const ZoomModal = ({ selectedPhoto, onClose, toggleFavorite }) =>{
  return (
    <>
      {
        selectedPhoto && <>
          <Overlay />

          <StyledDialog open={ !!selectedPhoto } onClose={ onClose }>
            <GalleryImage
              photo={ selectedPhoto }
              expand={ !!selectedPhoto }
              toggleFavorite={ toggleFavorite }
            />
            <form method="dialog">
              <button formMethod="dialog">
                <img src="/icons/close.png" alt="Icone de fechar" />
              </button>
            </form>
          </StyledDialog>
        </>
      }
    </>
  )
}

export default ZoomModal