import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

import { IUser } from '@shared/types'

interface UserState {
  user: IUser | null | undefined,
  accessToken: string | undefined | null,
  isAuthChecked: boolean,
  loginUser: (user: IUser, accessToken: string) => void,
  deleteUser: () => void,
  authCheckFailed: () => void
  authCheckSuccess: (user: IUser) => void,
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        accessToken: undefined,
        isAuthChecked: false,
        loginUser: (newUser, accessToken) => set({ 
          user: newUser,
          accessToken,
          isAuthChecked: true,
        }),
        authCheckSuccess: (newUser) => set({
          user: newUser,
          isAuthChecked: true,
        }),
        authCheckFailed: () => set({
          isAuthChecked: true,
          accessToken: undefined
        }),
        deleteUser: () => set({ user: undefined, accessToken: undefined, isAuthChecked: true })
      }),
      {
        name: 'user-storage',
        partialize: (state) => ({ accessToken: state.accessToken }),
      }
    )
  )
)