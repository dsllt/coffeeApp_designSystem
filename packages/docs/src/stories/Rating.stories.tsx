import type { Meta, StoryObj } from '@storybook/react'
import { Box, Rating, RatingProps } from '@POAcoffee/react'

export default {
  title: 'Form/Rating',
  tags: ['autodocs'],
  component: Rating,
  args: {
    ratingStars: 0,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<RatingProps>

export const Primary: StoryObj<RatingProps> = {}
export const Full: StoryObj<RatingProps> = {
  args: {
    ratingStars: 3.5,
  },
}
