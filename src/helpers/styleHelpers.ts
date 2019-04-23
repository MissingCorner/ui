import { css } from 'styled-components'

export const addUnit = (value: string | number) => {
  if (typeof value === 'number') {
    return `${value}px`
  }
  return value
}

export type MarginsProps = {
  margin?: number | string
  marginTop?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  marginLeft?: number | string
  marginVertical?: number | string
  marginHorizontal?: number | string
}

export type PaddingsProps = {
  padding?: number | string
  paddingTop?: number | string
  paddingRight?: number | string
  paddingBottom?: number | string
  paddingLeft?: number | string
  paddingVertical?: number | string
  paddingHorizontal?: number | string
}

export const getMargin = (
  props: MarginsProps,
  {
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
  }: {
    top?: string | number
    left?: string | number
    right?: string | number
    bottom?: string | number
  } = {},
) =>
  css`
    margin: ${(props.margin && addUnit(props.margin)) ||
      `
        ${addUnit(props.marginTop || props.marginVertical || top)}
        ${addUnit(props.marginRight || props.marginHorizontal || right)}
        ${addUnit(props.marginBottom || props.marginVertical || bottom)}
        ${addUnit(props.marginLeft || props.marginHorizontal || left)}
      `};
  `

export const getPadding = (
  props: PaddingsProps,
  {
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
  }: {
    top?: string | number
    left?: string | number
    right?: string | number
    bottom?: string | number
  } = {},
) =>
  css`
    padding: ${(props.padding && addUnit(props.padding)) ||
      `
        ${addUnit(props.paddingTop || props.paddingVertical || top)}
        ${addUnit(props.paddingRight || props.paddingHorizontal || right)}
        ${addUnit(props.paddingBottom || props.paddingVertical || bottom)}
        ${addUnit(props.paddingLeft || props.paddingHorizontal || left)}
      `};
  `

export const getMarginPadding = (props: MarginsProps & PaddingsProps) => css`
  ${getMargin(props)};
  ${getPadding(props)};
`
