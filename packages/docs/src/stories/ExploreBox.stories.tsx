import type { Meta, StoryObj } from '@storybook/react'
import { ExploreBox, ExploreBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/Explore Box',
  tags: ['autodocs'],
  component: ExploreBox,
  args: {
    imgSrc:
      'https://lh3.googleusercontent.com/p/AF1QipMaOguJHFLhc0Vmu5dgd1_y26zPljSNnCMjagU4=s1360-w1360-h1020',
    coffeeName: 'The Coffee',
    coffeeAddress: 'Rua Fernandes Vieira, 656 - Bom Fim',
    rating: 4,
    category: 'Dine-in · Kerbside pickup',
    recommended: 'Cappuccino',
    totalReviews: 3,
  },
  argTypes: {
    rating: {
      options: [1, 2, 3, 4, 5],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<ExploreBoxProps>

export const Primary: StoryObj<ExploreBoxProps> = {}
