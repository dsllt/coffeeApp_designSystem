import type { Meta, StoryObj } from '@storybook/react'
import { PopularBox, PopularBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/PopularBox',
  tags: ['autodocs'],
  component: PopularBox,
  args: {
    imgSrc:
      'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
    bookTitle: 'A revolução dos bichos',
    bookAuthor: 'George Orwell',
    rating: 4,
  },
} as Meta<PopularBoxProps>

export const Primary: StoryObj<PopularBoxProps> = {}
