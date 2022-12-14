import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile, ValidateProfileError } from '../../types/profile'
import { validateProfile } from '../validateProfile/validateProfile'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi
  const formData = getProfileForm(getState())

  const errors = validateProfile(formData)

  if (errors.length) {
    return rejectWithValue(errors)
  }
  try {
    const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

    return response.data
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
