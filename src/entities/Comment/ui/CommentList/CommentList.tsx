import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

interface CommentList {
  className?: string
  comments: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentList> = memo(({ className, comments, isLoading }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            className={cls.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  )
})
