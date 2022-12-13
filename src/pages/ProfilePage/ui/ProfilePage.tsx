import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface ProfilePage {
  className?: string
}

const ProfilePage: FC<ProfilePage> = ({ className }) => {
  const { t } = useTranslation()

  return <div className={classNames('', {}, [className])}>{t('Профиль')}</div>
}

export default ProfilePage
