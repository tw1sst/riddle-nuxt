<template>
	<div class="main">
		<Header />

		<div class="main__categories mt-5">
			<div v-for="category of categories" class="main__categories-item">
				<div class="main__categories-title">{{ category.title }}</div>
				<div class="main__categories-sub">{{ category.sub }}</div>
				<component
					:is="category.icon"
					class="main__categories-icon"
					:style="{ color: category.color }"
				/>
			</div>
		</div>

		<div class="main__headerTitle pt-5 px-5">
			<h1 class="text-lg font-bold">Ваши школы</h1>
		</div>

		<div v-if="loadingSchools" class="main__schools-skeleton">
			<van-skeleton v-for="item of 3">
				<template #template>
					<div
						:style="{ display: 'flex', width: '100%', marginBottom: '20px' }"
					>
						<van-skeleton-image
							:style="{ width: '58px', height: '58px', borderRadius: '10px' }"
						/>
						<div :style="{ flex: 1, marginLeft: '16px' }">
							<van-skeleton-paragraph />
							<van-skeleton-paragraph />
						</div>
					</div>
				</template>
			</van-skeleton>
		</div>

		<div v-else class="main__schools">
			<SchoolCell v-for="school of schoolsStore.schools" :school="school" />
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	BriefcaseIcon,
	CakeIcon,
	CommandLineIcon,
	PaintBrushIcon,
	TrophyIcon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import Header from '~/components/header-main.vue'
import SchoolCell from '~/components/skill/school-cell'
import { useSchoolsStore } from '~/store/schools'
import { useUserStore } from '~/store/user'

const { $axios } = useNuxtApp()
const userStore = useUserStore()
const schoolsStore = useSchoolsStore()
const loadingSchools = ref<boolean>(true)

definePageMeta({
	layout: 'default',
	middleware: 'auth',
})

const categories = [
	{
		id: 1,
		title: 'Разработка',
		sub: 'Курсов: 41',
		icon: CommandLineIcon,
		color: '#1402DC',
	},
	{
		id: 2,
		title: 'Бизнес',
		sub: 'Курсов: 18',
		icon: BriefcaseIcon,
		color: '#1EC761',
	},
	{
		id: 3,
		title: 'Кулинария',
		sub: 'Курсов: 26',
		icon: CakeIcon,
		color: '#2784FC',
	},
	{
		id: 4,
		title: 'Творчество',
		sub: 'Курсов: 32',
		icon: PaintBrushIcon,
		color: '#F75555',
	},
	{
		id: 5,
		title: 'Спорт',
		sub: 'Курсов: 214',
		icon: TrophyIcon,
		color: '#FCB226',
	},
]

$axios.get('/school').then(res => {
	if (res.data.status) {
		schoolsStore.schools = res.data.schools
	}
	loadingSchools.value = false
})
</script>

<style scoped lang="scss">
.main {
	height: 100vh;
	width: 100vw;
	&__headerTitle {
		margin-bottom: 10px;
	}
	&__schools {
		border-top: 1px solid #f4f5f7;
		display: flex;
		flex-direction: column;
		&-skeleton {
			margin-top: 20px;
			padding: 10px 0;
		}
	}
	&__categories {
		display: grid;
		padding: 0 20px;
		gap: 10px;
		grid-template-columns: 1fr 1fr 1fr;
		&-item {
			background-color: #f4f5f7;
			height: 100px;
			border-radius: 10px;
			overflow: hidden;
			position: relative;
			padding: 10px;
			transition: 0.2s;
			&:last-child {
				grid-column: 4 / 2;
			}
			&:hover {
				opacity: 0.7;
			}
			&:active {
				.main__categories-icon {
					height: 98px;
					opacity: 1;
				}
			}
		}
		&-title {
			font-size: 14px;
			font-weight: 600;
		}
		&-sub {
			font-size: 14px;
			position: relative;
		}
		&-icon {
			height: 88px;
			position: absolute;
			right: -30px;
			bottom: -30px;
			opacity: 0.5;
			transition: 0.3s;
			user-select: none;
		}
	}
	&__card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 10px;
		padding: 10px 20px;
		border-bottom: 1px solid #f4f5f7;
		transition: 0.2s;
		&:hover {
			opacity: 0.8;
		}
		&-image {
			width: 58px;
			height: 58px;
			display: block;
			border-radius: 10px;
			overflow: hidden;
		}
		&-info {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 100%;
		}
		&-title {
			font-weight: 500;
			display: flex;
			justify-content: space-between;
		}
		&-progressTitle {
			font-size: 12px;
			color: #c5c5c5;
		}
		&-actionButton {
			height: 100%;
		}
		&-badge {
			color: black;
			font-size: 12px;
			background-color: #f4f5f7;
			padding: 5px;
			border-radius: 5px;
		}
	}
}
</style>
