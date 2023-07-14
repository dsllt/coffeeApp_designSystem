import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@poacoffee/react'
import { X } from 'phosphor-react'

export default {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],

  args: {
    children: <X weight="bold" />,
    size: 'default',
    disabled: false,
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['default', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta

export const Primary: StoryObj = {}
