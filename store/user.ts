import { defineStore } from 'pinia'

export type User = {
  id: string;
  email: string;
  username: string;
  is_email_verified: boolean;
  nick_name: string;
  created_at: string;
}

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: <User> {}
    }
  },
})