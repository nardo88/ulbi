import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface IText {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text: FC<IText> = ({
  text,
  title,
  className,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
}) => {
  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
  }
  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
