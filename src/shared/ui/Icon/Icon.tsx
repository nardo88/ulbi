import { classNames } from 'helpers/classNames/classNames'
import React, { FC } from 'react'
import cls from './Icon.module.scss'

interface Icon {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<Icon> = ({ className, Svg }) => {
  return <Svg className={classNames(cls.Icon, {}, [className])} />
}
