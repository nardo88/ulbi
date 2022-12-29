import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsloading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'

import cls from './ArticleDetails.module.scss'

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
  const data = useSelector(getArticleDetailsData)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = <div>Loading...</div>
  } else if (error) {
    content = (
      <div>
        <Text align={TextAlign.CENTER} title={t('Ошибка загрузки статьи.')} />
      </div>
    )
  } else {
    content = <div>Data</div>
  }

  return (
    <DinamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [])}>{content}</div>
    </DinamicModuleLoader>
  )
})
