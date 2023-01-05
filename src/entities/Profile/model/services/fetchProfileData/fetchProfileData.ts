import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      return response.data
    } catch (e) {
      return rejectWithValue('Вы ввели не верный логин или пароль')
    }
  }
)
