import { FC, useEffect } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsloading,
  getProfileReadonly,
  ProfileCard,
  profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePage {
  className?: string
}

const redusers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePage> = ({ className }) => {
  const dispatch = useAppDispatch()
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsloading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  return (
    <DinamicModuleLoader reducers={redusers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard data={data} isLoading={isLoading} error={error} readonly={readonly} />
      </div>
    </DinamicModuleLoader>
  )
}

export default ProfilePage
