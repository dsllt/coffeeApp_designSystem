import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { BookImage, BookInfo, PopularBoxContainer } from './style'

export interface PopularBoxProps
  extends ComponentProps<typeof PopularBoxContainer> {
  imgSrc: string
  coffeeName: string
  coffeeAddress: string
  rating: number
}

export function PopularBox({
  imgSrc,
  coffeeName,
  coffeeAddress,
  rating,
}: PopularBoxProps) {
  return (
    <PopularBoxContainer>
      <BookImage src={imgSrc} alt={coffeeName} />
      <BookInfo>
        <div>
          <Heading size={'16p'}>{coffeeName}</Heading>
          <Text
            size={'14p'}
            css={{ color: '$gray400', fontFamily: '$default' }}
          >
            {coffeeAddress}
          </Text>
        </div>
        <Rating ratingStars={rating} />
      </BookInfo>
    </PopularBoxContainer>
  )
}

PopularBox.displayName = 'PopularBox'
