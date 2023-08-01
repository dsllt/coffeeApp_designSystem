import type { Meta, StoryObj } from '@storybook/react'
import { ProfileInfoBox, ProfileInfoBoxProps } from '@poacoffee/react'
import { BookOpen } from 'phosphor-react'

export default {
  title: 'Data display/Profile Info Box',
  tags: ['autodocs'],
  component: ProfileInfoBox,
  args: {
    icon: <BookOpen />,
    heading: '3853',
    text: 'Páginas ligas',
  },
  argTypes: {},
} as Meta<ProfileInfoBoxProps>

export const Primary: StoryObj<ProfileInfoBoxProps> = {}
