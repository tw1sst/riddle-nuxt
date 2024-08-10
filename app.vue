<template>
	<NuxtLayout>
		<Loading v-if="loadingPage" />

		<NuxtPage v-else />
	</NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import Loading from '~/components/loadingFull.vue'

const userStore = useUserStore()
const { $axios } = useNuxtApp()
const { $jwtAuth } = useNuxtApp()
const { token, loggedIn } = useJwtAuth()
const loadingPage = ref<boolean>(true)

onMounted(() => {
	if (loggedIn.value) {
		$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.value
		checkAuth()
	} else {
		navigateTo({ name: 'auth-login' })
		loadingPage.value = false
	}
})

// логика следующая: срок жизни нашего токена специально большой (неделя).
// Перед каждым обновлением страницы отправляется запрос на рефреш.
// Запрос подтягивает актуальные данные юзера и заодно обновляет токен
// таким обрзом, чтобы юзера снова кинуло на авторизацию, он должен не заходить в
// приложение ровно неделю. При любом входе токен автоматом обновится, либо данные очистятся и
// его кинет на логин

async function checkAuth() {
	$axios
		.post('/auth/refresh')
		.then(res => {
			if (res.data.user) {
				$axios.defaults.headers.common['Authorization'] =
					'Bearer ' + res.data.token
				userStore.user = res.data.user

				$jwtAuth.setTokenAndUser({
					token: res.data.token,
					user: res.data.user,
				})
			}
		})
		.catch(err => {
			// если токену уже кабзда, выходим и кидаем на логин
			logout()
		})
		.finally(() => {
			loadingPage.value = false
		})
}

async function logout() {
	try {
		await $jwtAuth.logout()
	} catch (e) {
		// your error handling
	}
}
</script>

<style lang="scss">
body {
	font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
		Arial, sans-serif;
	user-select: none;
}
</style>
