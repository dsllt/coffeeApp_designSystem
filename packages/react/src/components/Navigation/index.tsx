import { NavigationContainer } from './styles'
import { ComponentProps } from 'react'

export interface NavigationProps
  extends ComponentProps<typeof NavigationContainer> {
  icon: string
  children: string
  selectStatus: 'default' | 'selected'
}

export function Navigation({ icon, children, selectStatus }: NavigationProps) {
  return (
    <NavigationContainer selectStatus={selectStatus}>
      {icon} {children}
    </NavigationContainer>
  )
}
