import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCard {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard: FC<CommentCard> = ({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.text} height={50} width="100%" />
      </div>
    )
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} title={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  )
}
