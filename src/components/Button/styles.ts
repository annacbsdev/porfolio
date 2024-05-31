import styled from 'styled-components'

export const ButtonStyled = styled.button<{
  selected: boolean
  gradientLeft: string
  gradientRight: string
}>`
  color: white;
  padding: 16px 16px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 8px;
  background-image: linear-gradient(
    to right,
    ${(props) => props.gradientLeft},
    ${(props) => props.gradientRight}
  );
  border: ${(props) => (props.selected ? '2px solid black' : 'none')};
`
