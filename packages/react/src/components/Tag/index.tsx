import { ComponentProps } from 'react'
import { TagContainer } from './styles'

export interface TagProps extends ComponentProps<typeof TagContainer> {
  children: string
  selectStatus: 'default' | 'selected'
}

export function Tag({ children, selectStatus, ...props }: TagProps) {
  return (
    <TagContainer selectStatus={selectStatus} {...props}>
      {children}
    </TagContainer>
  )
}

Tag.displayName = 'Tag'
