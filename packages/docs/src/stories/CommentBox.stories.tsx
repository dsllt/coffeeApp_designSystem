import type { Meta, StoryObj } from '@storybook/react'
import { CommentBox, CommentBoxProps } from '@POAcoffee/react'

export default {
  title: 'Data display/CommentBox',
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
} as Meta<CommentBoxProps>

export const Primary: StoryObj<CommentBoxProps> = {}
