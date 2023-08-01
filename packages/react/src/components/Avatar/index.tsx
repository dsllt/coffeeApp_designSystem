import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  containerWidth: number
  containerHeight: number
}

export function Avatar({
  containerWidth,
  containerHeight,
  ...props
}: AvatarProps) {
  return (
    <AvatarContainer style={{ width: containerWidth, height: containerHeight }}>
      <AvatarImage {...props} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
