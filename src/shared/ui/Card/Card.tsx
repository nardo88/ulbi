import { classNames } from 'helpers/classNames/classNames'
import { FC, HTMLAttributes } from 'react'
import cls from './Card.module.scss'

interface Card extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card: FC<Card> = ({ className, children, ...otherProps }) => {
  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  )
}
