<template>
	<div class="tabbar">
		<ul class="tabbar__menu">
			<li
				v-for="item of menuItems"
				:class="$route.name == item?.routeName ? 'tabbar__item-active' : ''"
				@click="
					$router.push({
						name: item?.routeName,
						params: item?.params,
					})
				"
				class="tabbar__item"
			>
				<component class="tabbar__item-icon" :is="item.icon"> </component>
				<span class="tabbar__item-title">{{ item?.title }}</span>
			</li>

			<li class="tabbar__item">
				<van-image class="h-6 rounded-md overflow-hidden" :src="userAvatar" />
				<span class="tabbar__item-title">{{ userStore.user.name }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import {
	AcademicCapIcon,
	ChatBubbleOvalLeftIcon,
	HomeIcon,
	Squares2X2Icon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const userStore = useUserStore()
const userAvatar =
	'https://ui-avatars.com/api/?name=' +
	userStore.user.name +
	'&size=32&color=7F9CF5&background=EBF4FF'

const menuItems = ref([
	{
		title: 'Главная',
		routeName: 'index',
		icon: HomeIcon,
	},
	{
		title: 'Обучение',
		routeName: 'SkillHome',
		icon: AcademicCapIcon,
	},
	{
		title: 'Сервисы',
		routeName: 'Services',
		icon: Squares2X2Icon,
	},
	{
		title: 'Общение',
		routeName: 'Chat',
		icon: ChatBubbleOvalLeftIcon,
	},
	// {
	// 	title: 'Профиль',
	// 	routeName: 'AccountProfile',
	// 	params: {
	// 		id: userStore.user.nick_name,
	// 	},
	// 	icon: UserCircleIcon,
	// },
])
</script>

<style scoped lang="scss">
.tabbar {
	position: fixed;
	bottom: 0;
	width: 100vw;
	background-color: #ffffff;
	padding-bottom: 15px;
	border-top: 1px solid #f6f6f6;
	padding: 10px 0 20px 0;
	z-index: 50;
	&__menu {
		list-style: none;
		display: flex;
		justify-content: space-around;
		height: 100%;
	}
	&__item {
		color: #c5c5c5;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		text-align: center;
		cursor: pointer;
		&-title {
			font-size: 12px;
		}
		&-icon {
			height: 24px;
			width: 24px;
		}
		&-active {
			color: #3e68f8;
		}
	}
}
</style>
