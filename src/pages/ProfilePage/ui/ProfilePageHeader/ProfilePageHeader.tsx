import { FC, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { getAuthUserData } from 'entities/User'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeader {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeader> = ({ className }) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useDispatch()
  const authData = useSelector(getAuthUserData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCanceled = useCallback(() => {
    dispatch(profileActions.canselEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    if (profileData?.id) {
      dispatch(updateProfileData())
    }
  }, [dispatch, profileData?.id])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
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
      )}
    </div>
  )
}
