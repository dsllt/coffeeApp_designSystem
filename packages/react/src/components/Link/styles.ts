import { styled } from '../../styles'

export const LinkContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$default',
  fontWeight: 'bold',
  width: 'fit-content',
  borderRadius: '$4p',
  padding: '$8p',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.1)',
  },

  variants: {
    color: {
      white: {
        color: '$gray200',
      },
      orange: {
        color: '$orange100',
      },
    },
    size: {
      small: {
        fontSize: '$14p',
        gap: '$8p',
      },
      medium: {
        fontSize: '$16p',
        gap: '$12p',
      },
    },
  },

  defaultVariants: {
    color: 'white',
    size: 'small',
  },
})
