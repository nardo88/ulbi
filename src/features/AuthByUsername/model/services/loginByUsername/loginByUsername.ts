import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'

// описываем типы входных параметров
interface loginByUsernameProps {
  username: string
  password: string
}

// создание thunk
export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi
    try {
      const response = await extra.api.post<User>('/login', authData)
      if (!response.data) {
        throw new Error()
      }
      // если данные получили то сохраняем в localstorage и записываем в state
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      return rejectWithValue('Вы ввели не верный логин или пароль')
    }
  }
)
