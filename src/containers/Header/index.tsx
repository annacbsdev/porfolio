import { StyledHeader } from './styles'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import profile from '../../assets/profile.jpg'

function Header() {
  return (
    <StyledHeader>
      <img src={profile} className="profile_pic" />
      <div className="profile_text">
        <h3>Anna Claudia Barros</h3>
        <p>&lt;&gt;</p>
        <p>Desenvolvedora Front-end</p>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/anna-claudia-barros-silveira/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/annacbsdev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </StyledHeader>
  )
}

export default Header
