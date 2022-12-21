import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeader {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeader> = ({ className }) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      ) : (
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Сохранить')}
        </Button>
      )}
    </div>
  )
}
