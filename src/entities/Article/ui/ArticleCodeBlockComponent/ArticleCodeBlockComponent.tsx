import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponent {}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponent> = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [])}>
      ArticleCodeBlockComponent
    </div>
  )
}
