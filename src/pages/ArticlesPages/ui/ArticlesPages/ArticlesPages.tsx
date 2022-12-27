import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPages.module.scss'

interface ArticlesPages {}

const ArticlesPages: FC<ArticlesPages> = () => {
  const { t } = useTranslation('article')
  return <div className={classNames('', {}, [])}>ArticlesPages</div>
}

export default memo(ArticlesPages)
