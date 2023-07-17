import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export interface TextInputProps extends ComponentProps<typeof Input> {}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ ...props }, ref) => {
    return (
      <TextInputContainer>
        <Input ref={ref} {...props} />
        <MagnifyingGlass size={20} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
