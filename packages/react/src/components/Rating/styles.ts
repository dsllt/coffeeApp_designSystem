import { styled } from '../../styles'

export const RatingContainer = styled('div', {
  display: 'flex',
  color: '$orange100',
})
export const Stars = styled('div', {
  variants: {
    active: {
      true: {
        svg: {
          fill: '$orange100',
        },
      },
    },
  },
})
