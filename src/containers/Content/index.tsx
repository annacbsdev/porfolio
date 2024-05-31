import { StyledContent } from './styles'

type Props = {
  children: React.ReactNode
}

function Content({ children }: Props) {
  return <StyledContent>{children}</StyledContent>
}

export default Content
