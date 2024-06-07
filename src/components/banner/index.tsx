import styled from "styled-components"

const StyledBackground = styled.figure`
  background-image: url('src/assets/images/banner.png');
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`

const StyledText = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 300px;
  padding: 0 64px;
`

const Banner = () => {
  return (
    <StyledBackground>
      <span>
        <StyledText>A galeria mais completa do espaço!</StyledText>
      </span>
    </StyledBackground>
  )
}

export default Banner