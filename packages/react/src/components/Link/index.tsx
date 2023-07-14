import { ComponentProps } from 'react'
import { LinkContainer } from './styles'
import { CaretRight } from 'phosphor-react'

export interface LinkProps extends ComponentProps<typeof LinkContainer> {
  children: string
  size: 'small' | 'medium'
  color: 'white' | 'orange'
}

export function Link({ children, size, color }: LinkProps) {
  return (
    <LinkContainer size={size} color={color}>
      <CaretRight />
      {children}
      <CaretRight />
    </LinkContainer>
  )
}

Link.displayName = 'Link'
