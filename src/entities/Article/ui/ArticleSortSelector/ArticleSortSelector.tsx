import { ArticleSortField } from 'entities/Article/model/types/article'
import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SortOrder } from 'shared/types'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelector {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newOrder: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelector> = (props) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props
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

  const changeSortHandler = useCallback(
    (newSort: string) => {
      onChangeSort(newSort as ArticleSortField)
    },
    [onChangeSort]
  )
  const changeOrderHandler = useCallback(
    (newSort: string) => {
      onChangeOrder(newSort as SortOrder)
    },
    [onChangeOrder]
  )

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        options={sortFieldOptions}
        label={t('Сортировать ПО')}
        onChange={changeSortHandler}
      />
      <Select
        value={order}
        options={orderOptions}
        label={t('по')}
        onChange={changeOrderHandler}
        className={cls.order}
      />
    </div>
  )
}
