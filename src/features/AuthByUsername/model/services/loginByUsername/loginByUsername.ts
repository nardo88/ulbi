import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// схема данных User
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'

// описываем типы входных параметров
interface loginByUsernameProps {
  username: string
  password: string
}

// создание thunk
export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    )
    if (!response.data) {
      throw new Error()
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    thunkApi.dispatch(userActions.setAuthData(response.data))
    return response.data
  } catch (e) {
    return thunkApi.rejectWithValue('Вы ввели не верный логин или пароль')
  }
})
