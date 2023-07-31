import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  BookInfo,
  Image,
  InfoContainer,
  ProfilePersonalReviewBoxContainer,
} from './style'
import { Rating } from '../Rating'
import { Heading } from '../Heading'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

export interface ProfilePersonalReviewBoxProps
  extends ComponentProps<typeof ProfilePersonalReviewBoxContainer> {
  imgSrc: string
  coffeeName: string
  coffeeAddress: string
  rating: number
  review: string
  reviewDate: Date
}

export function ProfilePersonalReviewBox({
  imgSrc,
  coffeeName,
  coffeeAddress,
  rating,
  review,
  reviewDate,
}: ProfilePersonalReviewBoxProps) {
  return (
    <>
      <Text css={{ color: '$gray200', fontSize: '$14p' }}>
        {formatDistanceToNow(new Date(reviewDate), {
          addSuffix: true,
          locale: ptBR,
        })}
      </Text>
      <ProfilePersonalReviewBoxContainer>
        <InfoContainer>
          <Image src={imgSrc} alt={coffeeName} />
          <BookInfo>
            <Heading size={'16p'}>{coffeeName}</Heading>
            <Text
              size={'16p'}
              css={{ color: '$gray400', fontFamily: '$default' }}
            >
              {coffeeAddress}
            </Text>
            <div className="rating">
              <Rating ratingStars={rating} />
            </div>
          </BookInfo>
        </InfoContainer>

        <Text css={{ color: '$gray300', fontSize: '$14p' }}>{review}</Text>
      </ProfilePersonalReviewBoxContainer>
    </>
  )
}

ProfilePersonalReviewBox.displayName = 'ProfilePersonalReviewBox'
