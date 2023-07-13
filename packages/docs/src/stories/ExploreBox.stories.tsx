import type { Meta, StoryObj } from '@storybook/react'
import { ExploreBox, ExploreBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/ExploreBox',
  tags: ['autodocs'],
  component: ExploreBox,
  args: {
    imgSrc:
      'https://lh3.googleusercontent.com/p/AF1QipMaOguJHFLhc0Vmu5dgd1_y26zPljSNnCMjagU4=s1360-w1360-h1020',
    bookTitle: 'The Coffee',
    bookAuthor: 'Rua Fernandes Vieira, 656 - Bom Fim',
    rating: 4,
    category: 'Dine-in · Kerbside pickup',
    recommended: 'Cappuccino',
    totalReviews: 3,
  },
} as Meta<ExploreBoxProps>

export const Primary: StoryObj<ExploreBoxProps> = {}
