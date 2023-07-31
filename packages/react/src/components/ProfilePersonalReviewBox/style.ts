import { styled } from '../../styles'
import { Box } from '../Box'

export const ProfilePersonalReviewBoxContainer = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$24p',
  width: 608,
  marginTop: '$8p',
})

export const Image = styled('img', {
  width: 108,
  height: 152,
  borderRadius: '$4p',
})

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$24p',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '.rating': {
    marginTop: 'auto',
  },
})
