import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  BookInfo,
  DataInfo,
  Image,
  InfoContainer,
  PersonalReviewBoxContainer,
} from './style'
import { Rating } from '../Rating'
import { Heading } from '../Heading'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

export interface PersonalReviewBoxProps
  extends ComponentProps<typeof PersonalReviewBoxContainer> {
  imgSrc: string
  bookTitle: string
  bookAuthor: string
  rating: number
  review: string
  reviewDate: Date
}

export function PersonalReviewBox({
  imgSrc,
  bookTitle,
  bookAuthor,
  rating,
  review,
  reviewDate,
}: PersonalReviewBoxProps) {
  return (
    <PersonalReviewBoxContainer>
      <Image src={imgSrc} alt={bookTitle} />
      <InfoContainer>
        <DataInfo>
          <Text css={{ color: '$gray200', fontSize: '$14p' }}>
            {formatDistanceToNow(new Date(reviewDate), {
              addSuffix: true,
              locale: ptBR,
            })}
          </Text>
          <Rating ratingStars={rating} />
        </DataInfo>
        <BookInfo>
          <Heading size={'16p'}>{bookTitle}</Heading>
          <Text
            size={'16p'}
            css={{ color: '$gray400', fontFamily: '$default' }}
          >
            {bookAuthor}
          </Text>
        </BookInfo>
        <Text css={{ color: '$gray300', fontSize: '$14p' }}>{review}</Text>
      </InfoContainer>
    </PersonalReviewBoxContainer>
  )
}
