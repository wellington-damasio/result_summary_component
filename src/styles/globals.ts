import { globalCss } from "."

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  img: {
    display: 'block',
    maxWidth: '100%'
  },

  body: {
    backgroundColor: 'hsl(221, 100%, 96%)'
  }
})