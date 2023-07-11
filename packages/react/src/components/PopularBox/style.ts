import { styled } from '../../styles'
import { Box } from '../Box'

export const PopularBoxContainer = styled(Box, {
  display: 'flex',
  gap: '$20p',
  width: 324,
})
export const BookImage = styled('img', {
  width: 64,
  height: 94,
  borderRadius: '$4p',
})
export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
