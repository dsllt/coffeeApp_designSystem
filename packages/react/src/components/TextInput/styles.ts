import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  border: '1px solid $gray500',
  borderRadius: '$4p',
  padding: '$16p $20p',
  display: 'flex',
  justifyContent: 'space-between',

  svg: {
    color: '$gray500',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',

    svg: {
      color: '$green200',
    },
  },
})

export const Input = styled('input', {
  background: 'transparent',
  border: 'none',
  width: '100%',
  color: '$gray200',

  '&::placeholder': {
    color: '$gray500',
  },

  '&:focus': {
    outline: 'none',
    '&::placeholder': {
      color: '$green200',
    },
  },
})
