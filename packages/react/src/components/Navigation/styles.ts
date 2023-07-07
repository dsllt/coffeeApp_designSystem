import { styled } from '../../styles'

export const NavigationContainer = styled('div', {
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$12p',
  fontSize: '$16p',
  fontFamily: '$default',
  paddingLeft: '$16p',
  width: 'fit-content',
  cursor: 'pointer',

  svg: {
    height: '$24p',
    width: '$24p',
  },

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    selectStatus: {
      default: {
        '&:hover': {
          color: '$gray100',
        },
      },
      selected: {
        fontWeight: '$bold',
        color: '$gray100',
        borderLeft: '4px solid $gray400',

        '&:hover': {
          color: '$gray200',
        },
      },
    },
  },

  defaultVariants: {
    selectStatus: 'default',
  },
})
