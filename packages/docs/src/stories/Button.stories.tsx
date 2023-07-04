import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@POAcoffee/react'
import { X } from 'phosphor-react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: <X weight="bold" />,
  },
} as Meta

export const Primary: StoryObj = {}
