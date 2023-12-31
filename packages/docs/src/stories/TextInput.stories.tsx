import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@poacoffee/react'

export default {
  title: 'Form/Text Input',
  tags: ['autodocs'],
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Buscar livro avaliado',
    mainWidth: 307,
  },
}
