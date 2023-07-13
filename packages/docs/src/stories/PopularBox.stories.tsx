import type { Meta, StoryObj } from '@storybook/react'
import { PopularBox, PopularBoxProps } from '@POAcoffee/react'

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
} as Meta<PopularBoxProps>

export const Primary: StoryObj<PopularBoxProps> = {}
