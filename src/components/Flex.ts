import styled from 'styled-components'
import { MarginsProps, PaddingsProps, getMarginPadding } from '../helpers/styleHelpers'

type StartCenterEnd = 'flex-start' | 'center' | 'flex-end'

type Props = Partial<MarginsProps & PaddingsProps> & {
  column?: boolean
  align?: StartCenterEnd | 'stretch' | 'baseline'
  justify?: StartCenterEnd | 'space-between' | 'space-around' | 'space-evenly'
  fullWidth?: boolean
}

const Flex = styled('div')<Props>`
  ${getMarginPadding};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify};
`

export { Flex }
