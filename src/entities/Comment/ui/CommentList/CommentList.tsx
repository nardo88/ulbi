import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { VStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentList {
  className?: string
  comments: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentList> = memo(
  ({ className, comments, isLoading }) => {
    const { t } = useTranslation()
    return (
      <VStack gap="16" className={classNames('', {}, [className])}>
        {comments?.length ? (
          comments?.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Text text={t('Комментарии отсутствуют')} />
        )}
      </VStack>
    )
  }
)
