import type { Meta, StoryObj } from '@storybook/react'
import { PersonalReviewBox, PersonalReviewBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/PersonalReviewBox',
  tags: ['autodocs'],
  component: PersonalReviewBox,
  args: {
    imgSrc:
      'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
    bookTitle: 'A revolução dos bichos',
    bookAuthor: 'George Orwell',
    rating: 4,
    review:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu...',
    reviewDate: new Date('2023-07-10'),
  },
} as Meta<PersonalReviewBoxProps>

export const Primary: StoryObj<PersonalReviewBoxProps> = {}
