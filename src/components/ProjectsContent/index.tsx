import memorygame from '../../assets/projects/memorygame.png'
import githubimage from '../../assets/projects/github.png'
import contactlist from '../../assets/projects/contatos.png'
import todolist from '../../assets/projects/todolist.png'
import disneyplus from '../../assets/projects/disneyplus.png'

import { StyledProjectList } from './styles'
import { FaEye, FaGithub } from 'react-icons/fa'

const projectsList = [
  {
    id: 1,
    name: 'Jogo da Memória temático',
    repository: 'https://github.com/annacbsdev/memory-game',
    site: 'https://memory-game-liart-two.vercel.app',
    image: memorygame,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Projeto feito por conta própria, um jogo da memória com temas diferentes, para treinar a lógica do JavaScript.'
  },
  {
    id: 2,
    name: 'Site com API do GitHub',
    repository: 'https://github.com/annacbsdev/exercicio-ajax',
    site: 'https://exercicio-ajax-kappa.vercel.app',
    image: githubimage,
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    description:
      'Site para pesquisar usuários do GitHub e suas informações. Implementação do AJAX para requisições assíncronas da API do GitHub. O site funciona por uma barra de pesquisa com o nome do usuário, que o localiza e exibe suas informações dinamicamente.'
  },
  {
    id: 3,
    name: 'Lista de Contatos',
    repository: 'https://github.com/annacbsdev/projeto5-lista-contatos',
    site: 'https://projeto5-lista-contatos.vercel.app',
    image: contactlist,
    technologies: ['React', 'styled-components'],
    description:
      'Lista de contatos interativa, com as funcionalidades de adicionar, editar e remover um contato.'
  },
  {
    id: 4,
    name: 'Lista de tarefas',
    repository: 'https://github.com/annacbsdev/todolistpersonal',
    site: 'https://todolist-alpha-hazel.vercel.app',
    image: todolist,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Lista de tarefas interativa para melhor controle de atividades. Feita por conta própria para melhorar a manipulação do DOM.'
  },
  {
    id: 5,
    name: 'Clone do Disney+',
    repository: 'https://github.com/annacbsdev/projeto-disney-plus',
    site: 'https://projeto-disney-plus-rho.vercel.app',
    image: disneyplus,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Gulp'],
    description:
      'Site responsivo clone do Disney+, com o uso do Gulp para minificar arquivos e JavaScript para manipular elementos.'
  }
]

function ProjectsContent() {
  return (
    <StyledProjectList>
      <ul>
        {projectsList.map((project) => (
          <li className="projects_item" key={project.id}>
            <div className="image_container">
              <img src={project.image} alt={project.name} />
              <div className="overlay">
                <a
                  href={project.site}
                  target="_blank"
                  className="overlay_link"
                  rel="noreferrer"
                >
                  <FaEye />
                  Visitar site
                </a>
                <a
                  href={project.repository}
                  target="_blank"
                  className="overlay_link"
                  rel="noreferrer"
                >
                  <FaGithub />
                  Ver repositório
                </a>
              </div>
            </div>
            <div className="description">
              <h3>{project.name}</h3>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledProjectList>
  )
}

export default ProjectsContent
