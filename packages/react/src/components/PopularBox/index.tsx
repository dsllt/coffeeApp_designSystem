import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { BookImage, BookInfo, PopularBoxContainer } from './style'

export interface PopularBoxProps
  extends ComponentProps<typeof PopularBoxContainer> {
  imgSrc: string
  bookTitle: string
  bookAuthor: string
  rating: number
}

export function PopularBox({
  imgSrc,
  bookTitle,
  bookAuthor,
  rating,
}: PopularBoxProps) {
  return (
    <PopularBoxContainer>
      <BookImage src={imgSrc} alt={bookTitle} />
      <BookInfo>
        <div>
          <Heading size={'16p'}>{bookTitle}</Heading>
          <Text
            size={'14p'}
            css={{ color: '$gray400', fontFamily: '$default' }}
          >
            {bookAuthor}
          </Text>
        </div>
        <Rating ratingStars={rating} />
      </BookInfo>
    </PopularBoxContainer>
  )
}
