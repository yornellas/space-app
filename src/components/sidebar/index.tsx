import styled from "styled-components"
import ListItem from "./list-item"

const StyledList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const itemsList = [
  {
    id: 1,
    href: '',
    text: 'Início',
    activeIcon: '/icons/sidebar/home-active.png',
    inactiveIcon: '/icons/sidebar/home-inactive.png',
    active: true
  },
  {
    id: 2,
    href: '',
    text: 'Mais vistas',
    activeIcon: '/icons/sidebar/most-viewed-active.png',
    inactiveIcon: '/icons/sidebar/most-viewed-inactive.png',
    active: false
  },
  {
    id: 3,
    href: '',
    text: 'Mais curtidas',
    activeIcon: '/icons/sidebar/most-liked-active.png',
    inactiveIcon: '/icons/sidebar/most-liked-inactive.png',
    active: false
  },
  {
    id: 4,
    href: '',
    text: 'Novas',
    activeIcon: '/icons/sidebar/new-active.png',
    inactiveIcon: '/icons/sidebar/new-inactive.png',
    active: false
  },
  {
    id: 5,
    href: '',
    text: 'Surpreenda-me',
    activeIcon: '/icons/sidebar/surprise-active.png',
    inactiveIcon: '/icons/sidebar/surprise-inactive.png',
    active: false
  },
]

function setItemsList() {
  return itemsList.map((item) => {
    return (<ListItem {...item} key={ item.id }/>)
  })
}

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <StyledList>
            { setItemsList() }
          </StyledList>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar