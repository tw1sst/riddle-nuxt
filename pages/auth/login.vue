<template>
  <div class="app">
    login page 2

    <button @click="login()">Login</button>
    {{ user }}

    <button @click="test()">test</button>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import {showNotify} from "vant";
const { $axios } = useNuxtApp()

definePageMeta({
  layout: "auth",
  middleware: 'guest'
});

const { user, loggedIn } = useJwtAuth()
const { $jwtAuth } = useNuxtApp()
const router = useRouter()

async function test() {
  await $axios.post('/api/auth/login', {
    email: 'likovdenis12@gmail.com',
    password: 'den30012004'
  }).then((res) => {
    console.log(res)
    showNotify({ type: 'success', message: JSON.stringify(res) })
  }).catch((e) => {
    console.log(e)
    showNotify({ type: 'danger', message: JSON.stringify(e) })
  })
}


async function login() {
  try {
    await $jwtAuth.login(
        {
          email: 'likovdenis12@gmail.com',
          password: 'den30012004'
        },
        (res) => {
          showNotify({ type: 'success', message: "Успешная авторизация" })
          navigateTo({ path: '/' })
        }
    )
  } catch (e) {
    console.log(e?.message)
    showNotify({ type: 'danger', message: 'хуй' })
  }
}

</script>


<style lang="scss" scoped>
.app {
  background-color: #F4F5F7;
}
</style>
