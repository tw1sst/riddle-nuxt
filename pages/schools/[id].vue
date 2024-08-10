<template>
	<Loading v-if="loadingSchool" />

	<template v-else>
		<van-nav-bar :title="school.name" left-text="Назад" left-arrow>
			<template #title>
				<p>{{ school.name }}</p>
			</template>
			<template #right>
				<StarIcon class="h-5 text-purple-600" />
			</template>
		</van-nav-bar>

		<van-tabs v-model:active="activeTab" sticky>
			<van-tab v-for="tab in schoolTabs" :key="tab.id" :title="tab.name">
				<div v-if="activeTab == 0" class="school__content">
					<van-image
						width="100vw"
						height="10rem"
						fit="cover"
						position="center"
						:src="school.cover_path"
					/>

					<div class="school__content-block p-5">
						<div class="flex gap-3">
							<div class="school__content-head">
								<van-image
									width="48px"
									height="48px"
									fit="cover"
									class="rounded-xl overflow-hidden"
									position="center"
									:src="school.logo_path"
								/>
							</div>
							<div class="flex flex-col">
								<h1 class="text-lg font-medium">
									{{ school.name }}
								</h1>
								<span class="text-sm text-slate-300"
									>@{{ school.nick_name }}</span
								>
							</div>
						</div>

						<span>{{ school.description }}</span>
					</div>
				</div>
			</van-tab>
		</van-tabs>
	</template>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Loading from '~/components/loadingFull.vue'
import { useSchoolsStore } from '~/store/schools'
import { useUserStore } from '~/store/user'
import type { School } from '~/types/schoolTypes'

const route = useRoute()
const { $axios } = useNuxtApp()
const userStore = useUserStore()
const schoolsStore = useSchoolsStore()
const loadingSchool = ref<boolean>(true)
const school = ref<School>(null)
const activeTab = ref<number>(0)

definePageMeta({
	layout: 'default',
	middleware: 'auth',
})

$axios.get('/school/' + route.params.id).then(res => {
	if (res.data.status) {
		school.value = res.data.school
	}
	loadingSchool.value = false
})

const schoolTabs = [
	{
		id: 'overview',
		name: 'Обзор',
	},
	{
		id: 'courses',
		name: 'Курсы',
	},
	{
		id: 'content',
		name: 'Сообщество',
	},
	{
		id: 'gallery',
		name: 'Галерея',
	},
	{
		id: 'market',
		name: 'Маркет',
	},
	{
		id: 'chat',
		name: 'Общение',
	},
]
</script>

<style scoped lang="scss">
.school {
	height: 100vh;
	width: 100vw;
	padding-top: 46px;
	&__content {
		height: 100vh;
		&-block {
			background-color: white;
			border-radius: 10px;
			width: 100%;
			margin-top: -20px;
			position: relative;
		}
	}
}
</style>
