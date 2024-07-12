import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {
      id: 1,
      name: "Денис Зорин",
      email: "likovdenis12@gmail.com",
      nickName: "@zorin36",
      diamonds: 214,
      riddleCoins: 136.84,
    }
  })
})