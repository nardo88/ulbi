import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text } from 'shared/ui/Text/Text'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/view.svg'
import { ArticleView, Article } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'

interface ArticleListItem {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem: FC<ArticleListItem> = (props) => {
  const { article, className, view } = props
  const { t } = useTranslation()
  const types = <Text text={article.type.join(', ')} className={cls.types} />

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.image} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          <Text text={String(article.views)} className={cls.view} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  )
}
