import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { BookImage, BookInfo, InfoBoxContainer } from './style'

export interface InfoBoxProps extends ComponentProps<typeof InfoBoxContainer> {
  imgSrc: string
  bookTitle: string
  bookAuthor: string
  rating: number
}

export function InfoBox({
  imgSrc,
  bookTitle,
  bookAuthor,
  rating,
}: InfoBoxProps) {
  return (
    <InfoBoxContainer>
      <BookImage src={imgSrc} alt={bookTitle} />
      <BookInfo>
        <div>
          <Heading size={'18p'}>{bookTitle}</Heading>
          <Text
            size={'16p'}
            css={{ color: '$gray400', fontFamily: '$default' }}
          >
            {bookAuthor}
          </Text>
        </div>
        <Rating ratingStars={rating} />
      </BookInfo>
    </InfoBoxContainer>
  )
}
