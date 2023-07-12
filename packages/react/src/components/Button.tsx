import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$4p',
  minWidth: 40,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8p',

  cursor: 'pointer',

  svg: {
    width: '$24p',
    height: '$24p',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px none',
  },

  variants: {
    variant: {
      primary: {
        color: '$orange100',
        backgroundColor: '$gray600',

        '&:not(:disabled):hover': {
          background: '$gray500',
        },
        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        color: '$green100',
        backgroundColor: '$gray600',

        '&:not(:disabled):hover': {
          background: '$gray500',
        },
        '&:disabled': {
          background: '$gray200',
        },
      },
    },
    size: {
      default: {
        height: 40,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
