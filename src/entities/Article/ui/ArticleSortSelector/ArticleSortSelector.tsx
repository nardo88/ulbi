import { ArticleSortField } from 'entities/Article/model/types/article'
import { classNames } from 'helpers/classNames/classNames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelector {
  className?: string
}

export const ArticleSortSelector: FC<ArticleSortSelector> = ({ className }) => {
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t]
  )

  const sortFieldOptions = useMemo<SelectOption[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате созданию'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t]
  )

  return (
    <div className={classNames('', {}, [className])}>
      <Select options={sortFieldOptions} label={t('Сортировать ПО')} />
      <Select options={orderOptions} label={t('по')} />
    </div>
  )
}
