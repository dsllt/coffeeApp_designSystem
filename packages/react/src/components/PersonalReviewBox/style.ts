import { styled } from '../../styles'
import { Box } from '../Box'

export const PersonalReviewBoxContainer = styled(Box, {
  display: 'flex',
  gap: '$24p',
  width: 608,
  background: '$gray600',
})
export const Image = styled('img', {
  width: 108,
  height: 152,
  borderRadius: '$4p',
})
export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})
export const DataInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$12p',
})
export const BookInfo = styled('div', {
  marginBottom: '$20p',
})
