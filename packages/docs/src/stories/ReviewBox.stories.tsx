import type { Meta, StoryObj } from '@storybook/react'
import { ReviewBox, ReviewBoxProps } from '@poacoffee/react'

export default {
  title: 'Data display/Review Box',
  tags: ['autodocs'],
  component: ReviewBox,
  args: {
    userImg: 'https://github.com/diego3g.png',
    userName: 'Jaxson Dias',
    reviewDate: new Date('2023-07-10'),
    rating: 4,
    imgSrc:
      'https://lh3.googleusercontent.com/p/AF1QipMaOguJHFLhc0Vmu5dgd1_y26zPljSNnCMjagU4=s1360-w1360-h1020',
    coffeeName: 'The Coffee',
    coffeeAddress: 'Rua Fernandes Vieira, 656 - Bom Fim',
    review:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu...',
  },
  argTypes: {
    rating: {
      options: [1, 2, 3, 4, 5],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<ReviewBoxProps>

export const Primary: StoryObj<ReviewBoxProps> = {}
