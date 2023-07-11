import { styled } from '../../styles'
import { Box } from '../Box'

export const InfoBoxContainer = styled(Box, {
  display: 'flex',
  gap: '$20p',
  width: 353,
})
export const BookImage = styled('img', {
  width: 108,
  height: 152,
})
export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
