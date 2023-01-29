import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'

import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import cls from './ArticleDetailsPage.module.scss'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleRecomendations } from '../../model/slices/articleDetailsPageRecomendationsSlice'
import { getArticleRecomendationsIsLoading } from '../../model/selectors/recomendations'
import { fetchArticleRecomendations } from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations'
import { articleDetailsReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPage {}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPage> = () => {
  const { t } = useTranslation('article')
  const { id } = useParams()
  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const recomendations = useSelector(getArticleRecomendations.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const recomendationIsLoading = useSelector(getArticleRecomendationsIsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecomendations())
  }, [dispatch, id])

  if (!id) {
    return (
      <div className={classNames('', {}, [])}>{t('Статья не найдена')}</div>
    )
  }
  return (
    <DinamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [])}>
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text
            size={TextSize.L}
            title={t('Рекомендуем')}
            className={cls.commentTitle}
          />
          <ArticleList
            className={cls.recomendations}
            articles={recomendations}
            isLoading={recomendationIsLoading}
          />
          <Text
            size={TextSize.L}
            title={t('Комментарии')}
            className={cls.commentTitle}
          />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
      </Page>
    </DinamicModuleLoader>
  )
}

export default ArticleDetailsPage
