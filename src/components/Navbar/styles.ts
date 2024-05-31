import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
  justify-content: space-between;

  a {
    background-color: #e3e3e3;
    padding: 16px;
    text-align: center;
    width: 340px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  a.active {
    background-color: white;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
    a {
      font-size: 12px;
      width: 100%;
    }
  }
`
