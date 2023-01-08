import { ArticleView } from 'entities/Article/model/types/article'
import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import bigIcon from 'shared/assets/icons/big.svg'
import smallIcon from 'shared/assets/icons/small.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelector {
  className?: string
  view?: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: bigIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: smallIcon,
  },
]

export const ArticleViewSelector: FC<ArticleViewSelector> = (props) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((item) => (
        <Button theme={ButtonTheme.CLEAR} onClick={onClick(item.view)} key={item.view}>
          <Icon
            Svg={item.icon}
            className={classNames('', { [cls.notSelected]: view !== item.view }, [])}
          />
        </Button>
      ))}
    </div>
  )
}
