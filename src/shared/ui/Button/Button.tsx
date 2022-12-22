import { classNames, Mods } from 'helpers/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
  // eslint-disable-next-line no-unused-vars
  CLEAR_INVERTED = 'clearInverted',
  // eslint-disable-next-line no-unused-vars
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  // eslint-disable-next-line no-unused-vars
  BACGROUND = 'background',
  // eslint-disable-next-line no-unused-vars
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  // eslint-disable-next-line no-unused-vars
  M = 'size_m',
  // eslint-disable-next-line no-unused-vars
  L = 'size_l',
  // eslint-disable-next-line no-unused-vars
  XL = 'size_xl',
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<Button> = ({
  children,
  className,
  theme = ButtonTheme.OUTLINE,
  square,
  disabled,
  size = ButtonSize.M,
  ...other
}) => {
  const mods: Mods = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
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
