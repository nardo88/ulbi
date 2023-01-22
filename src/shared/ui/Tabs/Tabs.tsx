import { classNames } from 'helpers/classNames/classNames'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

interface Tabs {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (value: TabItem) => void
}

export const Tabs: FC<Tabs> = ({ className, tabs, value, onTabClick }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab: TabItem) => (
        <Card
          onClick={() => onTabClick(tab)}
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          className={cls.tab}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
