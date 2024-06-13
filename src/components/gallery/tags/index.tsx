import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  color: #D9D9D9;
  font-size: 24px;
  padding: 2rem 0;
`

const StyledButton = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  border: 2.5px solid transparent;
  border-radius: 10px;
  color: #D9D9D9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  box-sizing: border-box;
  padding: 8px 12px;

  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = () => {
  return (
    <TagsContainer>
      <h3>Busque por tags:</h3>
      {
        tags.map((tag) => <StyledButton key={ tag.id }>{ tag.title }</StyledButton>)
      }
    </TagsContainer>
  )
}

export default Tags

