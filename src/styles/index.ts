import {createStitches } from "@stitches/react";

export const { styled, css, getCssText, globalCss} = createStitches({
  theme: {
    colors: {
      lightRed: 'hsl(0, 100%, 67%)',
      transLightRed: 'hsla(0, 100%, 67%, 0.07)',

      orangeYellow: 'hsl(39, 100%, 56%)',
      transOrangeYellow: 'hsla(39, 100%, 56%,  0.07)',

      greenTeal: 'hsl(166, 100%, 37%)',
      transGreenTeal: 'hsla(166, 100%, 37%, 0.07)',

      cobaltBlue: 'hsl(234, 85%, 45%)',
      transCobaltBlue: 'hsla(234, 85%, 45%, 0.07)',

      lightSlateBlue: 'hsl(252, 100%, 67%)', //background
      lightRoyalBlue: 'hsl(241, 81%, 54%)', //background

      slateBlyueRoyalBlueGrad: 'linear-gradient(hsl(252, 100%, 67%) 0%, hsl(252, 100%, 63%) 0.01%, hsl(241, 81%, 54%) 100%)',

      violetBlue: 'hsla(256, 72%, 46%, 1)', //circle
      persianBlue: 'hsla(241, 72%, 46%, 0)', //circle

      violetBlueGrad: 'linear-gradient(hsla(256, 71%, 46%, 1) 0%, hsla(256, 71%, 46%, 0) 100%, hsla(256, 71%, 46%, 0) 100%)',

      white: 'hsl(0, 0%, 100%)',
      paleBlue: 'hsl(221, 100%, 96%)',
      lightLavender: 'hsl(241, 100%, 89%)',
      darkGrayBlue: 'hsl(224, 30%, 27%)',

      lightBlue: 'hsl(241, 100%, 89%)',
    },
    fonts: {
      default: 'Hanken Grotesk'
    },
    fontWeights: {
      normal: 500,
      bold: 700,
      superBold: 800
    },
    fontSizes: {
      sm: '1rem',
      body: '1.125rem',
      md: '1.5rem',
      mdx2: '2rem',
      lg: '3.5rem',
      xl: '4.5rem'
    },
  },
  media: {
    tablet: '(min-width: 700px)'
  }
})