<template>
	<div class="login">
		<div class="p-5">
			<h1 class="text-xl font-bold">👋 Авторизация</h1>
			<p class="text-sm mt-2 mb-5">Авторизуйтесь в своем аккаунте</p>
		</div>

		<div class="flex justify-center mb-10">
			<van-image
				width="100"
				height="100"
				class="login__logo"
				:src="logoBluePath"
			/>
		</div>

		<van-form @submit="login">
			<van-cell-group inset>
				<van-field
					v-model="email"
					name="email"
					label="Email"
					placeholder="Ваш Email"
					:rules="[{ required: true, message: 'Поле обязательное' }]"
				/>
				<van-field
					v-model="password"
					type="password"
					name="Password"
					label="Пароль"
					placeholder="Ваш Пароль"
					:rules="[{ required: true, message: 'Поле обязательное' }]"
				/>
			</van-cell-group>
			<div style="margin: 16px" class="flex flex-col gap-3">
				<van-button
					:loading="loginLoading"
					block
					type="primary"
					native-type="submit"
				>
					Войти
				</van-button>
				<van-button
					@click="navigateTo({ name: 'auth-register' })"
					block
					type="default"
				>
					Нет аккаунта? Зарегистрируйтесь
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showNotify } from 'vant'

const { $axios, $jwtAuth } = useNuxtApp()
const email = ref<string>('likovdenis12@gmail.com')
const password = ref<string>('den30012004')
const logoBluePath = ref<string>('http://racourse.ru/logo-blue.jpg')
const loginLoading = ref<boolean>(false)

definePageMeta({
	layout: 'auth',
	middleware: 'guest',
})

async function login() {
	loginLoading.value = true
	if (!email.value || !password.value) return
	try {
		await $jwtAuth.login(
			{
				email: email.value,
				password: password.value,
			},
			res => {
				if (res.user) {
					showNotify({ type: 'success', message: 'Успешная авторизация' })
					navigateTo({ path: '/' })
					location.reload()
				}
			}
		)
	} catch (e) {
		showNotify({ type: 'danger', message: 'Ошибка авторизации' })
	} finally {
		loginLoading.value = false
	}
}
</script>

<style lang="scss" scoped>
.login {
	height: 100vh;
	background-color: #f4f5f7;
	&__logo {
		border-radius: 20px;
		overflow: hidden;
	}
}
</style>
