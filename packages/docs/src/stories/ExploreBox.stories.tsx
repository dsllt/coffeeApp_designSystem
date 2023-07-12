import type { Meta, StoryObj } from '@storybook/react'
import { ExploreBox, ExploreBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/ExploreBox',
  tags: ['autodocs'],
  component: ExploreBox,
  args: {
    imgSrc:
      'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
    bookTitle: 'A revolução dos bichos',
    bookAuthor: 'George Orwell',
    rating: 4,
    category: 'Computação, educação',
    numberPages: 160,
    totalReviews: 3,
  },
} as Meta<ExploreBoxProps>

export const Primary: StoryObj<ExploreBoxProps> = {}
