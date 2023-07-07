import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      '10p': { fontSize: '0.625rem' },
      '12p': { fontSize: '0.75rem' },
      '14p': { fontSize: '0.875rem' },
      '16p': { fontSize: '1rem' },
      '18p': { fontSize: '1.125rem' },
      '20p': { fontSize: '1.25rem' },
      '24p': { fontSize: '1.5rem' },
      '32p': { fontSize: '2rem' },
      '36p': { fontSize: '2.25rem' },
      '48p': { fontSize: '3rem' },
      '64p': { fontSize: '4rem' },
      '72p': { fontSize: '4.5rem' },
      '96p': { fontSize: '6rem' },
    },
  },

  defaultVariants: {
    size: '20p',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
