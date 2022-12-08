import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassworf: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: {},
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
