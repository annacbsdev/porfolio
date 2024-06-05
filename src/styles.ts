import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }
  body{
    background-image: linear-gradient(to right, ${(props) => props.theme.gradientLeft}, ${(props) => props.theme.gradientRight} );
    @media (max-width: 1024px) {
      margin: 16px;
    }
  }
`

export default EstiloGlobal

export const BodyContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 16px;
`

export const BackgroundChangeContainer = styled.div`
  width: 300px;
  background-color: white;
  height: 40px;
  display: flex;
  padding: 10px;
  border-radius: 100px;
  align-items: center;
  overflow-y: hidden;

  h3 {
    font-size: 12px;
    font-weight: normal;
  }
`
