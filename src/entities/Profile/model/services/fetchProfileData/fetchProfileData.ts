import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi
  try {
    const response = await extra.api.get<Profile>('/profile')

    return response.data
  } catch (e) {
    return rejectWithValue('Вы ввели не верный логин или пароль')
  }
})
