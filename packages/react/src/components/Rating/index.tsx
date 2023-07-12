import { Star, StarHalf } from 'phosphor-react'
import { RatingContainer, Stars } from './styles'
import { ComponentProps } from 'react'

export interface RatingProps extends ComponentProps<typeof RatingContainer> {
  ratingStars: number
  size?: number
}

export function Rating({ ratingStars, size = 16 }: RatingProps) {
  return (
    <RatingContainer>
      {Number.isInteger(ratingStars)
        ? Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
            return (
              <Stars key={star}>
                <Star
                  weight={ratingStars! >= star ? 'fill' : 'regular'}
                  size={size}
                />
              </Stars>
            )
          })
        : Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
            function verifyHalfStar() {
              if (star - ratingStars < 1) {
                return <StarHalf weight="fill" size={size} />
              } else {
                return <Star size={size} />
              }
            }
            return (
              <Stars key={star}>
                {star < ratingStars ? (
                  <Star
                    weight={ratingStars! >= star ? 'fill' : 'regular'}
                    size={size}
                  />
                ) : (
                  verifyHalfStar()
                )}
              </Stars>
            )
          })}
    </RatingContainer>
  )
}
