import { styled } from '../styles'
import { MarginsProps, PaddingsProps, getMarginPadding, getPadding } from '../helpers/styleHelpers'
import { Rotate360 } from '../styles/animations'
import { colors, transition } from '../styles/constants'
import { rgba, darken } from 'polished'

export type BtnType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'

export type BtnSize = 'large' | 'normal' | 'small'

type ButtonProps = {
  btnType?: BtnType
  size?: BtnSize
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  active?: boolean
  toggle?: boolean
}

const Button = styled('button')<ButtonProps & MarginsProps & PaddingsProps>`
  ${getMarginPadding};
  outline: none;
  ${props => getPadding(props, { left: '.75rem', right: '.75rem', top: '0.375rem', bottom: '0.375rem' })};
  border-radius: .25rem;
  position: relative;
  display: inline-block;
  text-align: center;
  vertical-align: center;
  font-size: 1rem;
  line-height: 1.5;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;
  ${props => props.loading && 'color: transparent !important;'}

  ${props =>
    props.btnType === 'primary' &&
    `
      background: ${props.outline ? 'transparent' : props.theme.colors.btnPrimary};
      color: ${props.outline ? props.theme.colors.btnPrimary : props.theme.colors.light || colors.light};
      border-color: ${props.outline ? props.theme.colors.btnPrimary : 'transparent'};

      &:not([disabled]):hover {
        background: ${props.theme.colors.btnPrimaryHover};
        border-color: ${darken(0.1, props.theme.colors.btnPrimary)};
        color: ${props.outline && props.theme.colors.light};
      }
      &:not([disabled]):active {
        background: ${props.theme.colors.btnPrimaryActive};
        border-color: ${props.theme.colors.btnPrimaryBorderActive};
        color: ${props.theme.colors.light};
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem  ${rgba(colors.btnPrimary, 0.5)};
      }
      &:after {
        border: 2px solid ${props.theme.colors.light};
      }
    `}
  ${props =>
    props.btnType === 'secondary' &&
    `
      background: ${props.theme.colors.btnSecondary};
      color: ${props.theme.colors.light || colors.light};

      &:not([disabled]):hover {
        background: ${props.theme.colors.btnSecondaryHover};
      }

      &:focus {
        box-shadow: 0 0 0 0.2rem ${rgba(colors.btnSecondary, 0.5)};
      }

      &:after {
        border: 2px solid ${props.theme.colors.light};
      }
    `}
    
  transition:
    color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;

  &:disabled {
    opacity: 0.65;
    cursor: default;
  }

  /* Notice: always leave :after at the last */
  &:after {
    ${props => (props.loading ? 'display: block' : 'display: none')};
    position: absolute;
    content: '';
    top: calc(50% - (1em / 2));
    left: calc(50% - (.65em / 2));
    width: .65em;
    height: .65em;
    border-top-color: transparent;
    border-right-color: transparent;
    animation: ${Rotate360} ${transition.slow} infinite linear;
    border-radius: 50%;
  }
`

Button.defaultProps = {
  btnType: 'primary',
  size: 'normal',
  outline: false,
  loading: false,
  disabled: false,
  active: false,
  toggle: false,
}

export default Button
