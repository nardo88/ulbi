import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsloading } from '../../model/selectors/getProfileIsloading/getProfileIsloading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import cls from './ProfileCard.module.scss'

interface ProfileCard {
  className?: string
}

export const ProfileCard: FC<ProfileCard> = ({ className }) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsloading)
  const error = useSelector(getProfileError)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
