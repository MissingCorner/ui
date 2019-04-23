import React from 'react'
import merge from 'deepmerge'
import basedStyled, { ThemedStyledInterface, ThemeProvider as StyledThemeProvider } from 'styled-components'
import { colors } from './constants'

type ColorProps = {
  textPrimary: string
  textSecondary: string

  primary: string
  secondary: string

  btnPrimary: string
  btnPrimaryHover: string
  btnPrimaryBorderHover: string
  btnPrimaryActive: string
  btnPrimaryBorderActive: string

  btnSecondary: string
  btnSecondaryHover: string
  btnSecondaryBorderHover: string

  btnSuccess: string
  btnSuccessHover: string
  btnSuccessBorderhover: string
  btnSuccessActive: string
  btnSuccessBorderActive: string

  success: string
  danger: string
  warning: string
  info: string

  dark: string
  light: string
}

// client using the optional ThemeProps
export type ThemeProps = {
  colors?: Partial<ColorProps>
}

// while internally, with the defaultTheme there is no optional props
// so that we can use this one to skip checking if props is undefined or not
type InternalThemeProps = {
  colors: ColorProps
}
const defaultTheme = {
  colors,
}

// Wrapp the ThemeProvider of styled-components
// to merge the defaultTheme with the client provided theme using deepMerge
export const ThemeProvider: React.FC<{ theme?: ThemeProps }> = ({ theme, children, ...rest }) => {
  return (
    <StyledThemeProvider theme={merge(defaultTheme, theme || {})} {...rest}>
      <>{children}</>
    </StyledThemeProvider>
  )
}

export const styled = basedStyled as ThemedStyledInterface<InternalThemeProps>
