import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { profileReducer } from 'entities/Profile'

interface ProfilePage {
  className?: string
}

const redusers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePage> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <DinamicModuleLoader reducers={redusers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Профиль')}</div>
    </DinamicModuleLoader>
  )
}

export default ProfilePage
