import type { Meta, StoryObj } from '@storybook/react'
import { PopularBox, PopularBoxProps } from '@poacoffee/react'

export default {
  title: 'Data display/Popular Box',
  tags: ['autodocs'],
  component: PopularBox,
  args: {
    imgSrc:
      'https://lh3.googleusercontent.com/p/AF1QipMaOguJHFLhc0Vmu5dgd1_y26zPljSNnCMjagU4=s1360-w1360-h1020',
    coffeeName: 'The Coffee',
    coffeeAddress: 'Rua Fernandes Vieira, 656 - Bom Fim',
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
} as Meta<PopularBoxProps>

export const Primary: StoryObj<PopularBoxProps> = {}
