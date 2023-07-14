import { ComponentProps } from 'react'
import { Input, TextInputContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export interface TextInputProps extends ComponentProps<typeof Input> {}

export function TextInput({ ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      <Input {...props} />
      <MagnifyingGlass size={20} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
