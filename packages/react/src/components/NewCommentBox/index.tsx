import { ComponentProps, useState } from 'react'
import {
  Content,
  Header,
  NewCommentBoxContainer,
  Rating,
  UserInfo,
} from './style'
import { Avatar } from '../Avatar'
import { Heading } from '../Heading'
import { TextArea } from '../TextArea'
import { Button } from '../Button'
import { Check, Star, X } from 'phosphor-react'

export interface NewCommentBoxProps
  extends ComponentProps<typeof NewCommentBoxContainer> {
  userImg?: string
  userName: string
  rating?: any
}

export function NewCommentBox({
  userImg,
  userName,
  rating,
}: NewCommentBoxProps) {
  const [ratingNumber, setRatingNumber] = useState(0)

  function handleRating(number: number) {
    setRatingNumber(number)
    rating(number)
  }
  return (
    <NewCommentBoxContainer>
      <Header>
        <UserInfo>
          <Avatar src={userImg} />

          <Heading size={'16p'}>{userName}</Heading>
        </UserInfo>
        <Rating>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
            return (
              <button key={star} onClick={() => handleRating(star)}>
                <Star
                  size={26}
                  weight={ratingNumber! >= star ? 'fill' : 'regular'}
                />
              </button>
            )
          })}
        </Rating>
      </Header>
      <TextArea placeholder="Escreva sua avaliação" id="placeholder" />
      <Content>
        <Button>
          <X weight="bold" />
        </Button>
        <Button variant={'secondary'}>
          <Check weight="bold" />
        </Button>
      </Content>
    </NewCommentBoxContainer>
  )
}
