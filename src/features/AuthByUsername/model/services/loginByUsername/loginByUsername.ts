import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User'

interface loginByUsernameProps {
  username: string
  password: string
}

const loginByUsername = createAsyncThunk<User, loginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>(
        'http://localhost:8000/login',
        authData
      )
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      // при написании конспекта посмотреть что еще доступно в thunkApi
      return thunkApi.rejectWithValue(e)
    }
  }
)
