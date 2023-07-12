import { styled } from '../../styles'
import { Box } from '../Box'

export const CommentBoxContainer = styled(Box, {
  width: 608,
  // height: 280,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
})
export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const UserInfo = styled('div', {
  display: 'flex',
  gap: '$16p',
})

export const Content = styled('div', {
  display: 'flex',
  gap: '$24p',
  marginTop: '$32p',
})

export const Image = styled('img', {
  width: 108,
  height: 152,
  borderRadius: '$4p',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookInfo = styled('div', {})
