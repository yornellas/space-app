import GalleryImage from "../gallery/gallery-image"

const ZoomModal = ({ selectedPhoto }) =>{
  return (
    <>
      {
        selectedPhoto && <dialog open={ !!selectedPhoto }>
          <GalleryImage
            photo={ selectedPhoto }
            expand={ true }
          />
          <p>Hello</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>
      }
    </>
  )
}

export default ZoomModal