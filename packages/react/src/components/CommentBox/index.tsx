import { ComponentProps } from 'react'
import { Text } from '../Text'
import { Content, Header, CommentBoxContainer, UserInfo } from './style'
import { Avatar } from '../Avatar'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface CommentBoxProps
  extends ComponentProps<typeof CommentBoxContainer> {
  userImg?: string
  userName: string
  reviewDate: Date
  rating: number
  review: string
}

export function CommentBox({
  userImg,
  userName,
  reviewDate,
  rating,
  review,
}: CommentBoxProps) {
  return (
    <CommentBoxContainer>
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
        <Text css={{ color: '$gray300', fontSize: '$14p' }}>{review}</Text>
      </Content>
    </CommentBoxContainer>
  )
}
