import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  BookInfo,
  Content,
  Description,
  Header,
  Image,
  ReviewBoxContainer,
  UserInfo,
} from './style'
import { Avatar } from '../Avatar'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface ReviewBoxProps
  extends ComponentProps<typeof ReviewBoxContainer> {
  userImg?: string
  userName: string
  reviewDate: Date
  rating: number
  imgSrc: string
  coffeeName: string
  coffeeAddress: string
  review: string
}

export function ReviewBox({
  userImg,
  userName,
  reviewDate,
  rating,
  imgSrc,
  coffeeName,
  coffeeAddress,
  review,
}: ReviewBoxProps) {
  return (
    <ReviewBoxContainer>
      <Header>
        <UserInfo>
          <Avatar src={userImg} />
          <div>
            <Heading size={'16p'}>{userName}</Heading>
            <Text css={{ color: '$gray400', fontSize: '$14p' }}>
              {' '}
              {formatDistanceToNow(new Date(reviewDate), {
                addSuffix: true,
                locale: ptBR,
              })}
            </Text>
          </div>
        </UserInfo>
        <Rating ratingStars={rating} />
      </Header>
      <Content>
        <Image src={imgSrc} alt={coffeeName} />
        <Description>
          <BookInfo>
            <Heading size={'16p'}>{coffeeName}</Heading>
            <Text
              size={'14p'}
              css={{ color: '$gray400', fontFamily: '$default' }}
            >
              {coffeeAddress}
            </Text>
          </BookInfo>
          <Text css={{ color: '$gray300', fontSize: '$14p' }}>{review}</Text>
        </Description>
      </Content>
    </ReviewBoxContainer>
  )
}
