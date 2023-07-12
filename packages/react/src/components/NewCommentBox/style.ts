import { styled } from '../../styles'
import { Box } from '../Box'

export const NewCommentBoxContainer = styled(Box, {
  width: 608,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',

  '#inputID::placeholder': {
    color: 'red',
  },
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$24p',
})

export const UserInfo = styled('div', {
  display: 'flex',
  gap: '$16p',
  alignItems: 'center',
})

export const Content = styled('div', {
  display: 'flex',
  gap: '$8p',
  marginTop: '$12p',
  justifyContent: 'flex-end',
})
export const Rating = styled('div', {
  display: 'flex',

  button: {
    all: 'unset',
    background: 'transparent',

    '&:hover': {
      background: 'transparent',
    },
  },

  svg: {
    color: '$orange100',
    cursor: 'pointer',
  },
})
