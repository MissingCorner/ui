export const addUnit = (value: string | number) => {
  if (typeof value === 'number') {
    return `${value}px`
  }
  return value
}

export type MarginTypes = {
  margin: number | string
  marginTop: number | string
  marginRight: number | string
  marginBottom: number | string
  marginLeft: number | string
  marginVertical: number | string
  marginHorizontal: number | string
}

export type PaddingTypes = {
  padding: number | string
  paddingTop: number | string
  paddingRight: number | string
  paddingBottom: number | string
  paddingLeft: number | string
  paddingVertical: number | string
  paddingHorizontal: number | string
}

export const getMargin = (props: Partial<MarginTypes>, { top = 0, left = 0, bottom = 0, right = 0 } = {}) =>
  (props.margin && addUnit(props.margin)) ||
  `
    ${addUnit(props.marginTop || props.marginVertical || top)}
    ${addUnit(props.marginRight || props.marginHorizontal || right)}
    ${addUnit(props.marginBottom || props.marginVertical || bottom)}
    ${addUnit(props.marginLeft || props.marginHorizontal || left)}
  `

export const getPadding = (props: Partial<PaddingTypes>, { top = 0, left = 0, bottom = 0, right = 0 } = {}) =>
  (props.padding && addUnit(props.padding)) ||
  `
    ${addUnit(props.paddingTop || props.paddingVertical || top)}
    ${addUnit(props.paddingRight || props.paddingHorizontal || right)}
    ${addUnit(props.paddingBottom || props.paddingVertical || bottom)}
    ${addUnit(props.paddingLeft || props.paddingHorizontal || left)}
  `
