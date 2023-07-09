import { styled } from '../../styles'

export const TextAreaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 164,
  position: 'relative',
})

export const TextAreaInput = styled('textarea', {
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$white',

  resize: 'vertical',
  position: 'relative',
  height: '100%',
  background: '$gray800',

  boxSizing: 'border-box',
  borderRadius: '$4p',
  border: '1px solid $gray400',
  padding: '$12p $20p',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
    border: '1px solid $green200',
  },
})

export const TextAreaCount = styled('div', {
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '#7C7C8A',
  position: 'relative',
  alignSelf: 'end',
  right: 10,
  bottom: 25,
  marginBottom: -25,

  boxSizing: 'initial',
})
