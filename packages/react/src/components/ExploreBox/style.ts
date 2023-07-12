import { styled } from '../../styles'
import { Box } from '../Box'

export const ExploreBoxContainer = styled(Box, {
  display: 'flex',
  gap: '$40p',
  width: 564,
  flexDirection: 'column',
})

export const BookContainer = styled('div', {
  display: 'flex',
  gap: '$32p',
})

export const CategoryContainer = styled('div', {
  display: 'flex',
  gap: '$64p',
  borderTop: '1px solid $gray600',
  paddingTop: '$24p',
})

export const BookImage = styled('img', {
  width: 172,
  height: 242,
  borderRadius: '$4p',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Category = styled('div', {
  display: 'flex',
  gap: '$16p',
  alignItems: 'center',

  svg: {
    width: '$24p',
    height: '$24p',
    color: '$green100',
  },
})
