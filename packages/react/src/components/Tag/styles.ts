import { styled } from '../../styles'

export const TagContainer = styled('button', {
  fontFamily: '$default',
  fontSize: '$16p',
  fontWeight: '$regular',
  color: '$orange100',
  border: '2px solid $orange100',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '$8p $16p',
  cursor: 'pointer',

  variants: {
    selectStatus: {
      default: {
        backgroundColor: 'transparent',
        '&:hover': {
          background: '$orange200',
          color: '$white',
          border: '2px solid $orange200',
        },
      },
      selected: {
        backgroundColor: '$orange200',
        color: '$white',
        border: '2px solid $orange200',

        '&:hover': {
          backgroundColor: '$orange100',
          border: '2px solid $orange100',
        },
      },
    },
  },

  defaultVariants: {
    selectStatus: 'default',
  },
})
