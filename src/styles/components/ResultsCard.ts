import { styled } from "..";

export const ResultsCard = styled('div', {
  width: '100%',
  minHeight: '100vh',
  maxWidth: '46rem',
  marginInline: 'auto',
  backgroundColor: '$white',

  '@tablet': {
    display: 'flex',
    minHeight: '32rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '32px',
    overflow: 'hidden',
  }
})

export const ResultsCardHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 0 2.5rem 0',
  backgroundImage: '$slateBlyueRoyalBlueGrad',
  borderRadius: '0 0 32px 32px',

  minHeight: '45vh',
  width: '100%',

  h1: {
    color: '$lightBlue',
    fontSize: '$body',
    textAlign: 'center',
    marginBottom: '1.75rem'
  },

  '@tablet': {
    justifyContent: 'start',
    borderRadius: '32px',

    h1: {
      fontSize: '$md',
      marginBottom: '2rem'
    }
  }
})

export const ResultScore = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  background: '$violetBlueGrad',
  width: '8.75rem',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  marginBottom: '1.875rem',

  'span:first-child': {
    fontSize: '$lg',
    fontWeight: '$superBold',
    color: '$white'
  },

  'span:last-child': {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$lightBlue'
  },

  '@tablet': {
    width: '12.5rem',

    'span:first-child': {
      fontSize: '$xl',
    }
  }
})

export const ResultInfo = styled('div', {
  textAlign: 'center',
  width: '90%',
  maxWidth: '16.25rem',
  margin: '0 auto',

  h2: {
    color: '$white',
    fontSize: '$md',
    marginBottom: '0.5rem'
  },

  p: {
    color: '$lightBlue',
    fontSize: '$sm'
  },

  '@tablet': {
    h2: {
      fontSize: '$mdx2',
      marginBottom: '0.875rem'
    },

    p: {
      fontSize: '$body'
    }
  }
})

export const ResultsCardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  
  padding: '1.25rem 2rem',

  minHeight: '55vh',

  h2: {
    fontSize: '$body',
    color: '$darkGrayBlue',
    marginBottom: '1.5rem',
    marginLeft: '5px'
  },

  '@tablet': {
    padding: '1.5rem 2rem',
    h2: {
      fontSize: '$md'
    }
  },
})

export const SkillsResultContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1.5rem'
})

export const SkillResult = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$sm',
  padding: '1rem',
  borderRadius: '12px',
  width: '100%',

  '&>span:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontWeight: '$normal'
  },

  '&>span:last-child': {
    color: '$darkGrayBlue',
    fontWeight: '$bold',

    '.text-muted': {
      opacity: 0.6
    }
  },

  variants: {
    category: {
      Reaction: {
        color: '$lightRed',
        backgroundColor: '$transLightRed',
      },

      Memory: {
        color: '$orangeYellow',
        backgroundColor: '$transOrangeYellow',
      },

      Verbal: {
        color: '$greenTeal',
        backgroundColor: '$transGreenTeal',
      },

      Visual: {
        color: '$cobaltBlue',
        backgroundColor: '$transCobaltBlue',
      }
    }
  },


  '@tablet': {
    fontSize: '$body'
  }
})

export const Button = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$bold',
  fontSize: '$body',
  height: '3.5rem',
  width: '100%',
  color: '$white',
  backgroundColor: '$darkGrayBlue',
  borderRadius: '100px',
  marginTop: 'auto',
  marginBottom: '2rem',
  marginInline: 'auto',

  '&:hover': {
    background: '$slateBlyueRoyalBlueGrad',
    cursor: 'pointer'
  }
})