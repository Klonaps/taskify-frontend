import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface IUser {
  id: number,
  login: string,
}
interface UserState {
  user: IUser | null | undefined,
  accessToken: string | undefined | null,
  isAuthChecked: boolean,
  setUser: (user: IUser) => void,
  deleteUser: () => void,
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        accessToken: undefined,
        isAuthChecked: false,
        setUser: (newUser) => set(() => ({ 
          user: newUser
        })),
        deleteUser: () => set(() => ({ user: undefined, accessToken: undefined, isAuthChecked: false }))
      }),
      {
        name: 'user-storage',
        partialize: (state) => ({ accessToken: state.accessToken }),
      }
    )
  )
)