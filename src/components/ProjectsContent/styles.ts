import styled from 'styled-components'

export const StyledProjectList = styled.div`
  margin-top: 24px;

  .projects_item {
    display: flex;
    /* width: 800px; */
    padding: 24px 0;
    border-bottom: 2px dotted black;

    p {
      font-size: 14px;
    }

    .description {
      max-width: 480px;
      padding-left: 16px;
      ul {
        margin: 8px 0;
        display: flex;
        li {
          background-color: lightgrey;
          font-size: 16px;
          margin-right: 8px;
          border-radius: 8px;
          padding: 4px 8px;
        }
      }
    }

    img {
      width: 240px;
      height: 180px;
      object-fit: cover;
      border: 2px solid black;
      display: block;
    }

    .image_container {
      position: relative;
      display: inline-block;
      width: 240px;
      height: 180px;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .overlay_link {
      color: white;
      font-family: 'Roboto Condensed';
      font-size: 20px;
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }

    .image_container:hover .overlay {
      opacity: 1;
    }
  }

  @media (max-width: 500px) {
    .projects_item {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .description {
        text-align: center;
        padding: 0;

        h3 {
          font-size: 16px;
          margin-top: 8px;
        }

        p {
          font-size: 14px;
        }

        ul {
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          li {
            font-size: 14px;
          }
        }
      }
    }
  }
`
