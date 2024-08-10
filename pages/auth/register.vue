<template>
	<div class="register">
		<div class="p-5">
			<h1 class="text-xl font-bold">🔑 Регистрация</h1>
			<p class="text-sm mt-2 mb-5">Зарегистрируйте новый аккаунт</p>
		</div>

		<div class="flex justify-center mb-10">
			<van-image
				width="100"
				height="100"
				class="register__logo"
				:src="logoBluePath"
			/>
		</div>

		<van-form @submit="register">
			<van-cell-group inset>
				<van-field
					v-model="name"
					name="name"
					label="Имя"
					placeholder="Введите имя пользователя"
					:rules="[{ required: true, message: 'Поле обязательное' }]"
				/>
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
					name="password"
					label="Пароль"
					placeholder="Ваш Пароль"
					:rules="[{ required: true, message: 'Поле обязательное' }]"
				/>
				<van-field
					v-model="c_password"
					type="password"
					name="c_password"
					label="Пароль"
					placeholder="Подтвердите пароль"
					:rules="[{ required: true, message: 'Поле обязательное' }]"
				/>
			</van-cell-group>
			<div style="margin: 16px" class="flex flex-col gap-3">
				<van-button
					:loading="registerLoading"
					block
					type="primary"
					native-type="submit"
				>
					Зарегистрироваться
				</van-button>
				<van-button
					@click="navigateTo({ name: 'auth-login' })"
					block
					type="default"
				>
					Уже есть аккаунт? Войдите
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showNotify } from 'vant'

const { $jwtAuth } = useNuxtApp()
const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const c_password = ref<string>('')
const logoBluePath = ref<string>('http://racourse.ru/logo-blue.jpg')
const registerLoading = ref<boolean>(false)

definePageMeta({
	layout: 'auth',
	middleware: 'guest',
})

async function register() {
	registerLoading.value = true
	if (!name.value || !email.value || !password.value || !c_password.value)
		return
	try {
		await $jwtAuth.signup(
			{
				name: name.value,
				email: email.value,
				password: password.value,
				c_password: c_password.value,
			},
			res => {
				console.log(res)
				showNotify({ type: 'success', message: 'Успешная регистрация' })
				navigateTo({ path: '/' })
			}
		)
	} catch (e) {
		showNotify({ type: 'danger', message: 'Ошибка регистрации' })
	} finally {
		registerLoading.value = false
	}
}
</script>

<style lang="scss" scoped>
.register {
	height: 100vh;
	background-color: #f4f5f7;
	&__logo {
		border-radius: 20px;
		overflow: hidden;
	}
}
</style>
