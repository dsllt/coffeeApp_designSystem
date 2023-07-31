import { ComponentProps } from 'react'
import { Input, TextInputContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  mainWidth?: number | string
}

export function TextInput({ ref, mainWidth, ...props }: TextInputProps) {
  return (
    <TextInputContainer style={{ width: mainWidth }}>
      <Input ref={ref} {...props} />
      <MagnifyingGlass size={20} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
