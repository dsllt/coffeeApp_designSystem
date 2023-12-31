import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { Text } from '../Text'
import {
  BookContainer,
  BookImage,
  BookInfo,
  Category,
  CategoryContainer,
  ExploreBoxContainer,
} from './style'
import { BookmarkSimple, Coffee } from 'phosphor-react'

export interface ExploreBoxProps
  extends ComponentProps<typeof ExploreBoxContainer> {
  imgSrc: string
  coffeeName: string
  coffeeAddress: string
  rating: number
  category: string
  recommended: string
  totalReviews: number
}

export function ExploreBox({
  imgSrc,
  coffeeName,
  coffeeAddress,
  rating,
  category,
  recommended,
  totalReviews,
}: ExploreBoxProps) {
  return (
    <ExploreBoxContainer>
      <BookContainer>
        <BookImage src={imgSrc} alt={coffeeName} />
        <BookInfo>
          <div>
            <Heading size={'20p'}>{coffeeName}</Heading>
            <Text
              size={'16p'}
              css={{ color: '$gray300', fontFamily: '$default' }}
            >
              {coffeeAddress}
            </Text>
          </div>
          <div>
            <Rating ratingStars={rating} size={20} />
            <Text
              size={'14p'}
              css={{ color: '$gray400', fontFamily: '$default' }}
            >
              {totalReviews} avaliações
            </Text>
          </div>
        </BookInfo>
      </BookContainer>
      <CategoryContainer>
        <Category>
          <BookmarkSimple />
          <div>
            <Text size={'12p'} css={{ color: '$gray300' }}>
              Categoria
            </Text>
            <Heading size={'16p'}>{category}</Heading>
          </div>
        </Category>
        <Category>
          <Coffee />
          <div>
            <Text size={'12p'} css={{ color: '$gray300' }}>
              Recomendado
            </Text>
            <Heading size={'16p'}>{recommended}</Heading>
          </div>
        </Category>
      </CategoryContainer>
    </ExploreBoxContainer>
  )
}

ExploreBox.displayName = 'ExploreBox'
