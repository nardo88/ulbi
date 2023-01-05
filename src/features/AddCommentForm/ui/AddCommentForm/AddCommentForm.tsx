import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/AddCommentFormSlice'
import {
  getAddCommentFormText,
  getAddCommentFormError,
} from '../../model/selectors/addCommentFormSelector'

import cls from './AddCommentForm.module.scss'

interface AddCommentForm {
  className?: string
}

const initialReducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentForm> = ({ className }) => {
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )

  const onSendComment = useCallback(() => {
    dispatch()
  }, [dispatch])

  return (
    <DinamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          value={text}
          onChange={onCommentTextChange}
          placeholder={t('Введите текст комментария')}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendComment}>
          {t('Отправить')}
        </Button>
      </div>
    </DinamicModuleLoader>
  )
}

export default AddCommentForm
