import { styled } from '../../styles'
import { Box } from '../Box'

export const InfoBoxContainer = styled(Box, {
  display: 'flex',
  gap: '$20p',
  width: 353,
  cursor: 'pointer',
  position: 'relative',

  '&:hover': {
    background: '$gray600',
    '.coffeeAddress': {
      color: '$gray300',
    },
  },
})

export const VisitedContainer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  background: '$green300',
  padding: '$4p $12p',
  color: '$green100',
  fontFamily: '$default',
  borderRadius: '0 $4p 0 $4p',
  textTransform: 'uppercase',
  fontSize: '$12p',
})

export const CoffeeImage = styled('img', {
  width: 108,
  height: 152,
  objectFit: 'cover',
  borderRadius: '$4p',
})

export const CoffeeInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
