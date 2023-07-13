import type { Meta, StoryObj } from '@storybook/react'
import { NewCommentBox, NewCommentBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/New Comment Box',
  tags: ['autodocs'],
  component: NewCommentBox,
  args: {
    userImg: 'https://github.com/diego3g.png',
    userName: 'Jaxson Dias',
    reviewDate: new Date('2023-07-10'),
    rating: 4,
  },
} as Meta<NewCommentBoxProps>

export const Primary: StoryObj<NewCommentBoxProps> = {}
