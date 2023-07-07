import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@POAcoffee/react'

export default {
  title: 'Typography/Text',
  tags: ['autodocs'],
  component: Text,
  args: {
    children: 'Testando o elemento Text',
    size: '16p',
  },
  argTypes: {
    size: {
      options: [
        '10p',
        '12p',
        '14p',
        '16p',
        '18p',
        '20p',
        '24p',
        '32p',
        '36p',
        '48p',
        '64p',
        '72p',
        '96p',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
