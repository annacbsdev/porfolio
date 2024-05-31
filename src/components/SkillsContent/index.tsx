import { StyledSkillsContent } from './styles'

//icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaSass,
  FaLess,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBoxOpen
} from 'react-icons/fa'
import { FaArrowsRotate } from 'react-icons/fa6'
import {
  SiTypescript,
  SiJquery,
  SiGulp,
  SiGrunt,
  SiCypress,
  SiFigma
} from 'react-icons/si'

function SkillsContent() {
  const iconSize = 36

  const languages = [
    { id: 1, name: 'HTML', icon: <FaHtml5 size={iconSize} /> },
    { id: 2, name: 'CSS', icon: <FaCss3Alt size={iconSize} /> },
    { id: 3, name: 'JavaScript', icon: <FaJs size={iconSize} /> },
    { id: 4, name: 'TypeScript', icon: <SiTypescript size={iconSize} /> },
    { id: 5, name: 'Python', icon: <FaPython size={iconSize} /> },
    { id: 6, name: 'Sass', icon: <FaSass size={iconSize} /> },
    { id: 7, name: 'Less', icon: <FaLess size={iconSize} /> }
  ]

  const frameworks = [
    { id: 1, name: 'Bootstrap', icon: <FaBootstrap size={iconSize} /> },
    { id: 2, name: 'jQuery', icon: <SiJquery size={iconSize} /> },
    { id: 3, name: 'React', icon: <FaReact size={iconSize} /> },
    { id: 4, name: 'Vue', icon: <FaVuejs size={iconSize} /> },
    { id: 5, name: 'Angular', icon: <FaAngular size={iconSize} /> }
  ]

  const build = [
    { id: 1, name: 'Parcel', icon: <FaBoxOpen size={iconSize} /> },
    { id: 2, name: 'Gulp', icon: <SiGulp size={iconSize} /> },
    { id: 3, name: 'Grunt', icon: <SiGrunt size={iconSize} /> },
    { id: 4, name: 'Node.js', icon: <FaNodeJs size={iconSize} /> },
    { id: 5, name: 'Cypress', icon: <SiCypress size={iconSize} /> },
    { id: 6, name: 'Ajax', icon: <FaArrowsRotate size={iconSize} /> }
  ]

  const colab = [
    { id: 1, name: 'Git', icon: <FaGitAlt size={iconSize} /> },
    { id: 2, name: 'GitHub', icon: <FaGithub size={iconSize} /> },
    { id: 3, name: 'Figma', icon: <SiFigma size={iconSize} /> }
  ]

  return (
    <StyledSkillsContent>
      <ul>
        <li>
          <h3>&gt; Linguagens e Pré-processadores:</h3>
          <ul className="skillList">
            {languages.map((language) => {
              return (
                <li key={language.id}>
                  <span>{language.icon}</span>
                  <p>{language.name}</p>
                </li>
              )
            })}
          </ul>
        </li>
        <li>
          <h3>&gt; Frameworks e Bibliotecas:</h3>
          <ul className="skillList">
            {frameworks.map((fw) => {
              return (
                <li key={fw.id}>
                  <span>{fw.icon}</span>
                  <p>{fw.name}</p>
                </li>
              )
            })}
          </ul>
        </li>
        <li>
          <h3>&gt; Ferramentas de Desenvolvimento e Build:</h3>
          <ul className="skillList">
            {build.map((fw) => {
              return (
                <li key={fw.id}>
                  <span>{fw.icon}</span>
                  <p>{fw.name}</p>
                </li>
              )
            })}
          </ul>
        </li>
        <li>
          <h3>&gt; Ferramentas de Colaboração e Design:</h3>
          <ul className="skillList">
            {colab.map((fw) => {
              return (
                <li key={fw.id}>
                  <span>{fw.icon}</span>
                  <p>{fw.name}</p>
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </StyledSkillsContent>
  )
}

export default SkillsContent
