import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme
  className?: string
  children?: ReactNode
}

export const AppLink: FC<AppLinkProps> = memo(
  ({ children, to, className, theme = AppLinkTheme.PRIMARY, ...other }) => {
    return (
      <Link
        to={to}
        {...other}
        className={classNames(cls.link, {}, [cls[theme], className])}
      >
        {children}
      </Link>
    )
  }
)
