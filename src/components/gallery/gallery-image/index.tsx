import styled from "styled-components"

type FigureProps = {
  $expand: boolean
}

const StyledGalleryImage = styled.figure<FigureProps>`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  width: ${(props) => (props.$expand ? '90%' : '22rem')};
  margin: 0;

  color: #FFFFFF;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  & > figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    padding: 1rem;

    h3 {
      margin-bottom: 0;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin: 0;
        font-size: 16px;
      }

      span > a{
        padding: 0 .5rem;
        cursor: pointer;
      }
    }
  }
`

const GalleryImage = (
  { photo,
    expand = false,
    onZoom = undefined,
    toggleFavorite
  }) => {
  const favoriteIcon = 'icons/favorite.png'
  const favoriteActiveIcon = 'icons/favorite-active.png'

  return (
    <StyledGalleryImage $expand={ expand } id={ photo.id }>
      <img src={ photo.path } alt={ photo.alt }/>
        <figcaption>
          <h3>{ photo.title }</h3>
          <footer>
            <p>{ photo.source }</p>
            <span>
              <a onClick={() => toggleFavorite(photo)}>
                <img src={ photo.favorite ? favoriteActiveIcon : favoriteIcon } />
              </a>
              {
                !expand &&
                <a  onClick={ () => onZoom(photo) }>
                  <img src='icons/expand.png' />
                </a>
              }
            </span>
          </footer>
        </figcaption>
    </StyledGalleryImage>
  )
}

export default GalleryImage