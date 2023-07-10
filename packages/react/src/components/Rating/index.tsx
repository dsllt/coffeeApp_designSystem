import { Star, StarHalf } from 'phosphor-react'
import { RatingContainer, Stars } from './styles'
import { ComponentProps } from 'react'

export interface RatingProps extends ComponentProps<typeof RatingContainer> {
  ratingStars: number
}

export function Rating({ ratingStars }: RatingProps) {
  return (
    <RatingContainer>
      {Number.isInteger(ratingStars)
        ? Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
            return (
              <Stars key={star}>
                <Star weight={ratingStars! >= star ? 'fill' : 'regular'} />
              </Stars>
            )
          })
        : Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
            function verifyHalfStar() {
              if (star - ratingStars < 1) {
                return <StarHalf weight="fill" />
              } else {
                return <Star />
              }
            }
            return (
              <Stars key={star}>
                {star < ratingStars ? (
                  <Star weight={ratingStars! >= star ? 'fill' : 'regular'} />
                ) : (
                  verifyHalfStar()
                )}
              </Stars>
            )
          })}
    </RatingContainer>
  )
}
