import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
  S = 'size_s',
}

interface IText {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
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

  const HeaderType = mapSizeToHeaderTag[size]

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <HeaderType className={cls.title}>{title}</HeaderType>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
