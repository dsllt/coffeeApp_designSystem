import type { Meta, StoryObj } from '@storybook/react'
import { InfoBox, InfoBoxProps } from '@poacoffee/react'

export default {
  title: 'Data display/InfoBox',
  tags: ['autodocs'],
  component: InfoBox,
  args: {
    imgSrc:
      'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
    coffeeName: 'A revolução dos bichos',
    coffeeAddress: 'George Orwell',
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
export const Visited: StoryObj<InfoBoxProps> = {
  args: {
    imgSrc:
      'https://lh3.googleusercontent.com/p/AF1QipMaOguJHFLhc0Vmu5dgd1_y26zPljSNnCMjagU4=s1360-w1360-h1020',
    coffeeName: 'The Coffee',
    coffeeAddress: 'Rua Fernandes Vieira, 656 - Bom Fim',
    rating: 4,
    visited: true,
  },
}
