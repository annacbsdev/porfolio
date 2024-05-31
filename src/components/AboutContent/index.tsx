import { StyledAboutContent } from './styles'
import pdfFile from '../../assets/curriculo.pdf'

function AboutContent() {
  return (
    <StyledAboutContent>
      <h3>&lt; Olá, eu sou a Anna! /&gt;</h3>
      <p className="objetivo">
        Objetivo profissional: Desenvolvedora Front-End
      </p>

      <ul>
        <li>• Apaixonada por design e tecnologia </li>
        <li>• Programando desde 2021</li>
        <li>• Estudando e me aprimorando constantemente</li>
        <li>• Buscando meu primeiro emprego como desenvolvedora</li>
      </ul>
      <hr />
      <p>Criatividade | Bom raciocínio lógico | Facilidade de aprender</p>
      <button>
        <a
          href={pdfFile}
          download="curriculo_anna.pdf"
          className="download-button"
        >
          Baixar Currículo
        </a>
      </button>
      <p>
        Este portfólio foi feito por mim com o uso de React e styled components!
        :)
      </p>
    </StyledAboutContent>
  )
}

export default AboutContent
