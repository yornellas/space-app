import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 211px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="Logotipo do app" />
    </StyledHeader>
  )
}

export default Header