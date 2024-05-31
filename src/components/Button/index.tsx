import { ButtonStyled } from './styles'

type Props = {
  onClick: () => void
  selected: boolean
  gradientLeft: string
  gradientRight: string
}

const Button = ({ onClick, selected, gradientLeft, gradientRight }: Props) => {
  return (
    <ButtonStyled
      onClick={onClick}
      selected={selected}
      gradientLeft={gradientLeft}
      gradientRight={gradientRight}
    ></ButtonStyled>
  )
}

export default Button
