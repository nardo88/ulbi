import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { classNames } from 'helpers/classNames/classNames'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from 'shared/ui/Text/Text'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import cls from './ArticleDetailsPage.module.scss'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsPage {}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPage> = () => {
  const { t } = useTranslation('article')
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [dispatch, id])

  if (!id) {
    return <div className={classNames('', {}, [])}>{t('Статья не найдена')}</div>
  }
  return (
    <DinamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls.commentTitle} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DinamicModuleLoader>
  )
}

export default ArticleDetailsPage
