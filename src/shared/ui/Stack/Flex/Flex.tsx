import { classNames, Mods } from 'helpers/classNames/classNames'
import { FC, ReactNode } from 'react'
import cls from './Flex.module.scss'

export type FlexJustify = 'center' | 'between' | 'start' | 'end'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '32'

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
}

const justyfiClasses: Record<FlexJustify, string> = {
  between: cls.justifyBetween,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  start: cls.justifyStart,
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.diretionRow,
  column: cls.diretionColumn,
}

export interface FlexProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    align = 'center',
    direction = 'row',
    justify = 'start',
    gap,
    max = true,
  } = props

  const classes = [
    justyfiClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    className,
  ]

  const mods: Mods = {
    [cls.max]: max,
  }

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
}
