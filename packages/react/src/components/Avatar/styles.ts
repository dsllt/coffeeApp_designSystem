import { styled } from '../../styles'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  height: '$40p',
  width: '$40p',
  display: 'inline-block',
  overflow: 'hidden',
  border: '2px solid $gray600',
})

export const AvatarImage = styled(Avatar.Image, {
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray400',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
