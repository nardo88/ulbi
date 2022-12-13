import { AppDispatch } from 'app/providers/StorePropvider'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
