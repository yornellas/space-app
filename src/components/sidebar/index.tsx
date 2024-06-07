import styled from "styled-components"
import ListItem from "./list-item"

const StyledList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const itemsList = [
  {
    href: '',
    text: 'Início',
    activeIcon: '/public/icons/sidebar/home-active.png',
    inactiveIcon: '/public/icons/sidebar/home-inactive.png',
    active: true
  },
  {
    href: '',
    text: 'Mais vistas',
    activeIcon: '/public/icons/sidebar/most-viewed-active.png',
    inactiveIcon: '/public/icons/sidebar/most-viewed-inactive.png',
    active: false
  },
  {
    href: '',
    text: 'Mais curtidas',
    activeIcon: '/public/icons/sidebar/most-liked-active.png',
    inactiveIcon: '/public/icons/sidebar/most-liked-inactive.png',
    active: false
  },
  {
    href: '',
    text: 'Novas',
    activeIcon: '/public/icons/sidebar/new-active.png',
    inactiveIcon: '/public/icons/sidebar/new-inactive.png',
    active: false
  },
  {
    href: '',
    text: 'Surpreenda-me',
    activeIcon: '/public/icons/sidebar/surprise-active.png',
    inactiveIcon: '/public/icons/sidebar/surprise-inactive.png',
    active: false
  },
]

function setItemsList() {
  return itemsList.map((item) => {
    return (<ListItem {...item}/>)
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