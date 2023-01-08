import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'

interface ArticleListItem {
  className?: string
  view: ArticleView
}

export const ArticleListItemSceleton: FC<ArticleListItem> = (props) => {
  const { className, view } = props

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
          <Skeleton height={150} className={cls.image} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} border="50%" className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
}
