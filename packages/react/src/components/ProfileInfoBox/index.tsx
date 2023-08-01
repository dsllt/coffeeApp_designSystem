import { ComponentProps, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { InfoContainer, InfoDescription, InfoPiece } from './style'

export interface ProfileInfoBoxProps
  extends ComponentProps<typeof InfoContainer> {
  icon: string | ReactNode
  heading: string
  text: string
}

export function ProfileInfoBox({ icon, heading, text }: ProfileInfoBoxProps) {
  return (
    <InfoContainer>
      <InfoPiece>
        {icon}
        <InfoDescription>
          <Heading size={'16p'}>{heading}</Heading>
          <Text size={'14p'} className="descriptionText">
            {text}
          </Text>
        </InfoDescription>
      </InfoPiece>
    </InfoContainer>
  )
}

ProfileInfoBox.displayName = 'ProfileInfoBox'
