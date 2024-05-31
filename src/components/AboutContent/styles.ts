import styled from 'styled-components'
import note from '../../assets/note.png'

export const StyledAboutContent = styled.div`
  background: url(${note});
  background-size: cover;
  background-repeat: no-repeat;

  .objetivo {
    font-weight: bold;
    margin: 40px 0;
  }

  h3 {
    font-weight: normal;
  }

  hr {
    width: 500px;
    height: 2px;
    border: none;
    background-color: black;
    margin: 50px 0;
  }

  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 24px;
    font-size: 16px;
    margin: 40px 0;

    a {
      color: white;
      text-decoration: none;
    }
  }
`
