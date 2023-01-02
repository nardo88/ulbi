import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import { Code } from 'shared/ui/Code/Code'
import { ArticleCodeBlock } from '../../model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponent {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponent> = memo(
  ({ className, block }) => {
    return (
      <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
        <Code text={block.code} />
      </div>
    )
  }
)
