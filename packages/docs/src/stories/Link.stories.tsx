import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '@poacoffee/react'

export default {
  title: 'Actions/Link',
  component: Link,
  tags: ['autodocs'],

  args: {
    children: 'Link',
    size: 'small',
  },
  argTypes: {
    color: {
      options: ['white', 'orange'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const PrimarySmall: StoryObj = {}
export const PrimaryMedium: StoryObj = {
  args: {
    size: 'medium',
  },
}
export const SecondarySmall: StoryObj = {
  args: {
    color: 'orange',
  },
}
export const SecondaryMedium: StoryObj = {
  args: {
    color: 'orange',
    size: 'medium',
  },
}
