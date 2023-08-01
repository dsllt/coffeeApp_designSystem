import { styled } from '../../styles'

export const InfoContainer = styled('div', {})

export const InfoPiece = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$20p',

  svg: {
    height: '$32p',
    width: '$32p',
    color: '$green100',
  },
})

export const InfoDescription = styled('div', {
  '.descriptionText': {
    color: '$gray200',
  },
})
