import type { Meta, StoryObj } from '@storybook/react'
import { PersonalReviewBox, PersonalReviewBoxProps } from '@poacoffee/react'

export default {
  title: 'Data display/Personal Review Box',
  tags: ['autodocs'],
  component: PersonalReviewBox,
  args: {
    imgSrc:
      'https://lh3.googleusercontent.com/p/AF1QipMaOguJHFLhc0Vmu5dgd1_y26zPljSNnCMjagU4=s1360-w1360-h1020',
    coffeeName: 'The Coffee',
    coffeeAddress: 'Rua Fernandes Vieira, 656 - Bom Fim',
    rating: 4,
    review:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu...',
    reviewDate: new Date('2023-07-10'),
  },
  argTypes: {
    rating: {
      options: [1, 2, 3, 4, 5],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<PersonalReviewBoxProps>

export const Primary: StoryObj<PersonalReviewBoxProps> = {}
