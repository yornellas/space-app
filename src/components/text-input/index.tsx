import styled from "styled-components"

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`

const StyledTextInput = styled.input`
  box-sizing: border-box;
  width: 602px;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid #C98CF1;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 365px;

  @font-face {
    font-family: "Gandhi Sans";
    src: url("/src/componentes/EstilosGlobais/Fontes/GandhiSans-Regular.otf");
  }
  font-family: "Gandhi Sans", sans-serif;
  font-size: 20px;
`

const StyledSearchImage = styled.img`
    position: absolute;
    top: 6px;
    right: 10px;
    width: 35px;
    height: 35px;
`

const TextInput = () => {
  return (
    <StyledContainer>
      <StyledTextInput type="text" placeholder="O que você procura?" />
      <StyledSearchImage src="src/assets/images/search.png" alt="Ícone de lupa" />
    </StyledContainer>
  )
}
export default TextInput