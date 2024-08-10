<template>
	<div>
		<van-nav-bar
			title="Создать школу"
			left-text="Назад"
			@click-left="navigateTo({ path: '/' })"
			left-arrow
		/>

		<van-form @submit="createSchool" class="mt-5">
			<van-cell-group inset>
				<van-field
					v-model="name"
					name="name"
					label="Название школы"
					placeholder="Введите название"
					:rules="[{ required: true, message: 'Обязательное поле' }]"
				/>

				<van-field
					v-model="description"
					name="name"
					label="Описание школы"
					placeholder="Введите описание"
					rows="2"
					autosize
					type="textarea"
					maxlength="255"
					show-word-limit
					:rules="[{ required: true, message: 'Обязательное поле' }]"
				/>

				<van-field
					v-model="nick_name"
					name="nick_name"
					label="Адрес @"
					placeholder="имя_школы"
					:rules="[{ required: true, message: 'Обязательное поле' }]"
				/>

				<van-field name="uploader" label="Логотип школы">
					<template #input>
						<van-uploader v-model="logo" />
					</template>
				</van-field>

				<van-field name="uploader" label="Обложка школы">
					<template #input>
						<van-uploader v-model="cover" />
					</template>
				</van-field>
			</van-cell-group>

			<div style="margin: 16px">
				<van-button
					:loading="isCreateLoading"
					block
					type="primary"
					native-type="submit"
				>
					Создать
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default',
	middleware: 'auth',
})

const { $axios } = useNuxtApp()
const name = ref('')
const description = ref('')
const nick_name = ref('')
const logo = ref([])
const cover = ref([])
const isCreateLoading = ref<boolean>(false)

const createSchool = () => {
	isCreateLoading.value = true
	$axios
		.post('/school', {
			name: name.value,
			description: description.value,
			nick_name: nick_name.value,
		})
		.then(res => {
			if (res.data.status) {
				navigateTo({
					name: 'schools-id',
					params: {
						id: res.data.school.id,
					},
				})
				console.log(res.data.school)
			}
		})
		.catch(err => {
			if (err.response.data.message) {
				showNotify({ type: 'danger', message: err.response.data.message })
			}
		})
}
</script>
