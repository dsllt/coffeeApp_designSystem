import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@POAcoffee/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            backgroundColor: '$gray600',
          }}
        >
          <Text size={'16p'} style={{ marginBottom: '$16p' }}>
            Observations:{' '}
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {},
  argTypes: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Escreva sua avaliação',
  },
}
