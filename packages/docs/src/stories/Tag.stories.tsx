import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagProps } from '@poacoffee/react'

export default {
  title: 'Surface/Tag',
  tags: ['autodocs'],
  component: Tag,
  args: {
    children: 'Testando o elemento Tag',
  },
  argTypes: {
    selectStatus: {
      options: ['default', 'selected'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TagProps>

export const Primary: StoryObj<TagProps> = {}

export const Selected: StoryObj<TagProps> = {
  args: {
    children: 'Tag selecionada',
    selectStatus: 'selected',
  },
}
