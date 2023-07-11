import type { Meta, StoryObj } from '@storybook/react'
import { ReviewBox, ReviewBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/ReviewBox',
  tags: ['autodocs'],
  component: ReviewBox,
  args: {
    userImg: 'https://github.com/diego3g.png',
    userName: 'Jaxson Dias',
    reviewDate: new Date('2023-07-10'),
    rating: 4,
    imgSrc:
      'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
    bookTitle: 'A revolução dos bichos',
    bookAuthor: 'George Orwell',
    review:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu...',
  },
} as Meta<ReviewBoxProps>

export const Primary: StoryObj<ReviewBoxProps> = {}
