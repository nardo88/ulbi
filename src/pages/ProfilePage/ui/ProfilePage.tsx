import { FC, useEffect } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePage {
  className?: string
}

const redusers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePage> = ({ className }) => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  return (
    <DinamicModuleLoader reducers={redusers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DinamicModuleLoader>
  )
}

export default ProfilePage
