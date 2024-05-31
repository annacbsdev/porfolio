import { Link, useLocation } from 'react-router-dom'
import { StyledNavbar } from './styles'

type Props = {
  href: string
  children: string
}

function CustomLink({ href, children }: Props) {
  const { pathname } = useLocation()
  return (
    <Link to={href} className={pathname === href ? 'active' : ''}>
      {children}
    </Link>
  )
}

function Navbar() {
  return (
    <StyledNavbar>
      <CustomLink href="/">Sobre mim</CustomLink>
      <CustomLink href="/skills">Habilidades</CustomLink>
      <CustomLink href="/projects">Projetos</CustomLink>
    </StyledNavbar>
  )
}
export default Navbar
