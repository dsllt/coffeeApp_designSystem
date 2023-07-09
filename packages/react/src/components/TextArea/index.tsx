import { ComponentProps, useState } from 'react'
import { TextAreaContainer, TextAreaCount, TextAreaInput } from './style'

export interface TextAreaProps
  extends ComponentProps<typeof TextAreaContainer> {}

export function TextArea() {
  const [totalCharacters, setTotalCharacters] = useState(0)

  return (
    <TextAreaContainer>
      <TextAreaInput
        maxLength={450}
        onChange={(e) => setTotalCharacters(e.target.value.length)}
      />
      <TextAreaCount>{totalCharacters}/450</TextAreaCount>
    </TextAreaContainer>
  )
}
