import { classNames } from 'helpers/classNames/classNames'
import { FC, HTMLAttributes } from 'react'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface Card extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: CardTheme
}

export const Card: FC<Card> = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  ...otherProps
}) => {
  return (
    <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  )
}
