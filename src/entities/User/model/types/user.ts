export interface User {
  id: string
  username: string
}

export interface UseSchema {
  authData?: User
  _inited: boolean
}
