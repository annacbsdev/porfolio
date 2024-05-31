//recursos
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

//temas e estilos
import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import {
  blueGreenTheme,
  purplePinkTheme,
  greyWhiteTheme,
  yellowPinkTheme
} from './themes'
import { Theme } from './themes'
import EstiloGlobal, {
  BackgroundChangeContainer,
  BodyContainer
} from './styles'

//componentes
import Header from './containers/Header'
import Navbar from './components/Navbar'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(blueGreenTheme)
  const [selectedButton, setSelectedButton] = useState(1)

  const handleThemeChange = (theme: Theme, buttonNumber: number) => {
    setSelectedTheme(theme)
    setSelectedButton(buttonNumber)
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <EstiloGlobal />
      <BodyContainer>
        <BackgroundChangeContainer>
          <h3>&gt; alterar fundo: </h3>
          <Button
            onClick={() => handleThemeChange(blueGreenTheme, 1)}
            gradientLeft={blueGreenTheme.gradientLeft}
            gradientRight={blueGreenTheme.gradientRight}
            selected={selectedButton === 1}
          />

          <Button
            onClick={() => handleThemeChange(yellowPinkTheme, 2)}
            gradientLeft={yellowPinkTheme.gradientLeft}
            gradientRight={yellowPinkTheme.gradientRight}
            selected={selectedButton === 2}
          />

          <Button
            onClick={() => handleThemeChange(greyWhiteTheme, 3)}
            gradientLeft={greyWhiteTheme.gradientLeft}
            gradientRight={greyWhiteTheme.gradientRight}
            selected={selectedButton === 3}
          />

          <Button
            onClick={() => handleThemeChange(purplePinkTheme, 4)}
            gradientLeft={purplePinkTheme.gradientLeft}
            gradientRight={purplePinkTheme.gradientRight}
            selected={selectedButton === 4}
          />
        </BackgroundChangeContainer>
        <Header />
        <Navbar />
        <Outlet />
      </BodyContainer>
    </ThemeProvider>
  )
}

export default App
