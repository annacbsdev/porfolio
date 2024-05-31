import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin-top: 16px;
  column-gap: 8px;
  align-items: center;
  img {
    border-radius: 50%;
  }
  img,
  div,
  p {
    text-align: center;
  }

  a {
    color: black;
  }
  .social {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    :hover {
      color: #333;
    }
  }

  .profile_text {
    h3 {
      font-size: 24px;
    }
  }

  .profile_pic {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    div {
      margin-top: 8px;
    }
    .social {
      font-size: 24px;
      flex-direction: row;
      gap: 10px;
    }
  }
`
