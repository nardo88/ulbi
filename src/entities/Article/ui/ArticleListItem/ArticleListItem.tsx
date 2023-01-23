import { classNames } from 'helpers/classNames/classNames'
import { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text } from 'shared/ui/Text/Text'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import EyeIcon from 'shared/assets/icons/view.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { ArticleView, Article, ArticleBlockType, ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleListItem {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItem> = (props) => {
  const { article, className, view, target = '_blank' } = props
  const { t } = useTranslation()
  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.view} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (item) => item.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

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
          <img src={article.img} alt={article.title} className={cls.image} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink to={RoutePath.article_details + article.id} target={target}>
              <Button>{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      to={RoutePath.article_details + article.id}
      target={target}
      className={classNames('', {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.image} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  )
}
