import { classNames } from 'helpers/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
  // eslint-disable-next-line no-unused-vars
  OUTLINE = 'outline',
  BACGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<Button> = ({
  children,
  className,
  theme,
  square,
  size = ButtonSize.M,
  ...other
}) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
  }
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  )
}
