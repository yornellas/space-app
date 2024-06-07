import styled from "styled-components";

type ListItemProps = {
  href: string | undefined
  text: string
  activeIcon: string
  inactiveIcon: string
  active: boolean
}

const StyledListItem = styled.li`
  font-size: 24px;

  a {
    text-decoration: none;
    color: #D9D9D9;

    display: flex;
    align-items: center;
    gap: .5rem;

    &.active,
    &:hover {
      font-family: 'GandhiSansBold';
      color: #7B78E5 !important;
    }
  }
`

const ListItem = (
  { href, activeIcon, inactiveIcon, text, active }: ListItemProps
) => {
  return (
    <StyledListItem>
      <a href={ href } className={ active ? 'active' : ''}>
        <img src={ active ? activeIcon : inactiveIcon } alt="" />
        { text }
      </a>
    </StyledListItem>
  )
}

export default ListItem