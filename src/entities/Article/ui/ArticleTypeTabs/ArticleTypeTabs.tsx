import { ArticleTypes } from 'entities/Article/model/types/article'
import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'

interface ArticleTypeTabs {
  className?: string
  value: string
  onChangeType: (type: ArticleTypes) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabs> = ({ className, value, onChangeType }) => {
  const { t } = useTranslation()
  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleTypes.ALL, content: t('Все') },
      { value: ArticleTypes.IT, content: t('IT') },
      { value: ArticleTypes.ECONOMICS, content: t('Экономика') },
      { value: ArticleTypes.SCIENCE, content: t('Наука') },
    ],
    [t]
  )

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleTypes)
    },
    [onChangeType]
  )

  return (
    <Tabs
      onTabClick={onTabClick}
      value={value}
      tabs={typeTabs}
      className={classNames('', {}, [className])}
    />
  )
}
