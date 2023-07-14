import type { Meta, StoryObj } from '@storybook/react'
import { CommentBox, CommentBoxProps } from '@poacoffee/react'

export default {
  title: 'Data display/Comment Box',
  tags: ['autodocs'],
  component: CommentBox,
  args: {
    userImg: 'https://github.com/diego3g.png',
    userName: 'Jaxson Dias',
    reviewDate: new Date('2023-07-10'),
    rating: 4,
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
} as Meta<CommentBoxProps>

export const Primary: StoryObj<CommentBoxProps> = {}
