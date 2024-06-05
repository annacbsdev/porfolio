import { StyledAboutContent } from './styles'
import pdfFile from '../../assets/curriculo.pdf'
import note2 from '../../assets/note2.png'

function AboutContent() {
  return (
    <StyledAboutContent>
      <h3>&lt; Olá, eu sou a Anna! /&gt;</h3>
      <p className="objetivo">
        Objetivo profissional: Desenvolvedora Front-End
      </p>

      <img src={note2} />
      <ul>
        <li>• Apaixonada por design e tecnologia </li>
        <li>• Programando desde 2021</li>
        <li>• Estudando e me aprimorando constantemente</li>
        <li>• Buscando meu primeiro emprego como desenvolvedora</li>
      </ul>
      <hr />
      <p className="skills">
        Criatividade | Bom raciocínio lógico | Facilidade de aprender
      </p>
      <button>
        <a
          href={pdfFile}
          download="curriculo_anna.pdf"
          className="download-button"
        >
          Baixar Currículo
        </a>
      </button>
      <p className="caption">
        Este portfólio foi feito por mim com o uso de React e styled components!
        <br />
        <a href="https://github.com/annacbsdev/porfolio">Ver repositório</a>
      </p>
    </StyledAboutContent>
  )
}

export default AboutContent
