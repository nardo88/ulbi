import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponent {}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponent> = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [])}>
      ArticleTextBlockComponent
    </div>
  )
}
