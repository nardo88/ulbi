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

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface IText {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text: FC<IText> = ({
  text,
  title,
  className,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}) => {
  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  }
  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
