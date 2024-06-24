const ZoomModal = ({ selectedPhoto }) =>{
  return (
    <>
      <dialog open={ !!selectedPhoto }>
        <p>Hello</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </>
  )
}

export default ZoomModal