import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Portal {
  children: ReactNode // что переносим
  element?: HTMLElement // куда переносим
}

export const Portal: FC<Portal> = ({ children, element = document.body }) => {
  return createPortal(children, element)
}
