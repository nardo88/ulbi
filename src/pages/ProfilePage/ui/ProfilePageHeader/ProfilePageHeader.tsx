import { FC, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeader {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeader> = ({ className }) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCanceled = useCallback(() => {
    dispatch(profileActions.canselEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
    dispatch(profileActions.setReadonly(true))
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCanceled}>
            {t('Отменить')}
          </Button>
          <Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  )
}
