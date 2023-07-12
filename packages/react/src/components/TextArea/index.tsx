import { ComponentProps, useState } from 'react'
import { TextAreaContainer, TextAreaCount, TextAreaInput } from './style'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {}

export function TextArea(props: TextAreaProps) {
  const [totalCharacters, setTotalCharacters] = useState(0)

  return (
    <TextAreaContainer>
      <TextAreaInput
        maxLength={450}
        onChange={(e) => setTotalCharacters(e.target.value.length)}
        {...props}
      />
      <TextAreaCount>{totalCharacters}/450</TextAreaCount>
    </TextAreaContainer>
  )
}
