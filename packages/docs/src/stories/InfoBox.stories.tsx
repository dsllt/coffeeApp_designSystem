import type { Meta, StoryObj } from '@storybook/react'
import { InfoBox, InfoBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/InfoBox',
  tags: ['autodocs'],
  component: InfoBox,
  args: {
    imgSrc:
      'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
    bookTitle: 'A revolução dos bichos',
    bookAuthor: 'George Orwell',
    rating: 4,
  },
  argTypes: {
    rating: {
      options: [1, 2, 3, 4, 5],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<InfoBoxProps>

export const Primary: StoryObj<InfoBoxProps> = {}