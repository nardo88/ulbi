import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/view.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsloading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'

import cls from './ArticleDetails.module.scss'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetails {
  className?: string
  id: string
}

const reducersList: ReducerList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetails> = memo(({ id }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsloading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  // prettier-ignore
  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
    default:
      return null
    }
  }, [])

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <div>
        <Text align={TextAlign.CENTER} title={t('Ошибка загрузки статьи.')} />
      </div>
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text
          title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DinamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [])}>{content}</div>
    </DinamicModuleLoader>
  )
})
