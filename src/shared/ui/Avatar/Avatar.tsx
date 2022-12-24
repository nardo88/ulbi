import { classNames, Mods } from 'helpers/classNames/classNames'
import { CSSProperties, FC, useMemo } from 'react'
import cls from './Avatar.module.scss'

interface Avatar {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: FC<Avatar> = ({ className, src, alt, size }) => {
  const mods: Mods = {}

  const style = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size])
  return (
    <img
      style={style}
      className={classNames(cls.Avatar, mods, [className])}
      alt={alt || ''}
      src={src}
    />
  )
}
