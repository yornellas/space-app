import styled from "styled-components"
import TextInput from "../text-input"

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 211px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="Logotipo do app" />
      <TextInput />
    </StyledHeader>
  )
}

export default Header