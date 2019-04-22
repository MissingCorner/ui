import styled from 'styled-components'
import { getMargin, getPadding, MarginTypes, PaddingTypes } from '../helpers/styleHelpers'

type StartCenterEnd = 'flex-start' | 'center' | 'flex-end'

type Props = {
  column: boolean
  align: StartCenterEnd | 'stretch' | 'baseline'
  justify: StartCenterEnd | 'space-between' | 'space-around' | 'space-evenly'
} & MarginTypes &
  PaddingTypes

const Flex = styled('div')<Props>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify};
  margin: ${props => getMargin(props)};
  padding: ${props => getPadding(props)};
`

export { Flex }
