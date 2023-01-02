import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponent {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponent> = memo(
  ({ className, block }) => {
    return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} className={cls.image} alt="" />
        {block?.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    )
  }
)
