import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Rating } from '../Rating'
import { Text } from '../Text'
import {
  CoffeeImage,
  CoffeeInfo,
  InfoBoxContainer,
  VisitedContainer,
} from './style'

export interface InfoBoxProps extends ComponentProps<typeof InfoBoxContainer> {
  imgSrc: string
  coffeeName: string
  coffeeAddress: string
  rating: number
  visited: boolean
}

export function InfoBox({
  imgSrc,
  coffeeName,
  coffeeAddress,
  rating,
  visited,
  ...props
}: InfoBoxProps) {
  return (
    <InfoBoxContainer {...props}>
      {visited ? <VisitedContainer>descoberto</VisitedContainer> : <></>}

      <CoffeeImage src={imgSrc} alt={coffeeName} />
      <CoffeeInfo>
        <div>
          <Heading size={'18p'}>{coffeeName}</Heading>
          <Text
            size={'16p'}
            css={{
              color: '$gray400',
              fontFamily: '$default',
            }}
            className="coffeeAddress"
          >
            {coffeeAddress}
          </Text>
        </div>
        <Rating ratingStars={rating} />
      </CoffeeInfo>
    </InfoBoxContainer>
  )
}
