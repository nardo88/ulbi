import { FC, useCallback, useEffect } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import {
  fetchProfileData,
  getProfileForm,
  getProfileError,
  getProfileIsloading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePage {
  className?: string
}

const redusers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePage> = ({ className }) => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsloading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D/gi, '') || 0) }))
    },
    [dispatch]
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch]
  )

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch]
  )

  const onChangeCurrerncy = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value || Currency.RUB }))
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value || Country.Russia }))
    },
    [dispatch]
  )
  return (
    <DinamicModuleLoader reducers={redusers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrerncy={onChangeCurrerncy}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DinamicModuleLoader>
  )
}

export default ProfilePage
