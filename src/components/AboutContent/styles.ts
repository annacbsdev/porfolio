import styled from 'styled-components'
import note from '../../assets/note.png'

export const StyledAboutContent = styled.div`
  background: url(${note});
  background-size: contain;
  background-repeat: no-repeat;

  img {
    display: none;
  }

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

  .caption {
    font-style: italic;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;

    .caption {
      font-size: 12px;
    }

    hr {
      margin: 20px 0;
    }

    .skills {
      font-size: 12px;
    }

    button {
      font-size: 12px;
    }
    img {
      display: block;
      width: 280px;
      margin-bottom: 16px;
    }
    .objetivo {
      margin: 20px 0;
      text-align: center;
    }
  }
`
