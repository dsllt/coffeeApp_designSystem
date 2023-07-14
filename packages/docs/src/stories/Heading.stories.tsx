import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@poacoffee/react'

export default {
  title: 'Typography/Heading',
  tags: ['autodocs'],
  component: Heading,
  args: {
    children: 'Testando o elemento Heading',
    size: '20p',
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    size: '20p',
  },
}
