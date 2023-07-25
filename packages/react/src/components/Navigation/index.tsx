import { NavigationContainer } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface NavigationProps
  extends ComponentProps<typeof NavigationContainer> {
  icon: string | ReactNode
  children: string | ReactNode
  selectStatus: 'default' | 'selected'
}

export function Navigation({
  icon,
  children,
  selectStatus,
  ...props
}: NavigationProps) {
  return (
    <NavigationContainer selectStatus={selectStatus} {...props}>
      {icon} {children}
    </NavigationContainer>
  )
}

Navigation.displayName = 'Navigation'
