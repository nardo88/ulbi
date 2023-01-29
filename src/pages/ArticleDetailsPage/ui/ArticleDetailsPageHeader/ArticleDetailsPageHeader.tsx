import { getArticleDetailsData } from 'entities/Article'
import { classNames } from 'helpers/classNames/classNames'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import { Button } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'

interface ArticleDetailsPageHeader {
  className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeader> = ({
  className,
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <HStack justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('Редактировать')}</Button>}
    </HStack>
  )
}
