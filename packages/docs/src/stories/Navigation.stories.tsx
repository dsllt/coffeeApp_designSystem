import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from '@POAcoffee/react'
import { ChartLineUp } from 'phosphor-react'

export default {
  title: 'Actions/Navigation',
  component: Navigation,
  tags: ['autodocs'],

  args: {
    icon: <ChartLineUp />,
    children: 'Início',
  },
  argTypes: {
    selectStatus: {
      options: ['default', 'selected'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}

export const Selected: StoryObj = {
  args: {
    selectStatus: 'selected',
  },
}
