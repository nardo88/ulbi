import { classNames } from 'helpers/classNames/classNames'
import { CSSProperties, FC } from 'react'
import cls from './Skeleton.module.scss'

interface Skeleton {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton: FC<Skeleton> = (props) => {
  const { border, height, width, className } = props

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }
  return <div className={classNames(cls.Skeleton, {}, [className])} style={style} />
}
