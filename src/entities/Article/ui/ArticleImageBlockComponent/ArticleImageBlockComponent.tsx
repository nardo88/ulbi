import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponent {}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponent> = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [])}>
      ArticleImageBlockComponent
    </div>
  )
}
