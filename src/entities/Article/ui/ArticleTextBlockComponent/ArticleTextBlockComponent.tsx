import { ArticleTextBlock } from 'entities/Article/model/types/article'
import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponent {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponent> = memo(
  ({ className, block }) => {
    return (
      <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block?.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text text={paragraph} key={paragraph} className={cls.paragraph} />
        ))}
      </div>
    )
  }
)
