<template>
	<div class="header">
		<div class="header__left">
			<p class="text-sm text-gray-300">👋 С возвращением</p>
			<div class="text-xl font-medium">Обзор</div>
		</div>

		<div class="header__right">
			<van-badge>
				<MagnifyingGlassIcon class="header__icon" />
			</van-badge>
			<van-badge dot>
				<BellIcon class="header__icon" />
			</van-badge>
			<van-image class="header__img" :src="userAvatar" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const userStore = useUserStore()
const userAvatar =
	'https://ui-avatars.com/api/?name=' +
	userStore.user.name +
	'&size=32&color=7F9CF5&background=EBF4FF'
// const logoImg =
// 	'https://i.ibb.co/BTTzpLt/F874-E38-B-2620-4-E93-9750-FB0-A25-A36-BA0.jpg'
</script>

<style scoped lang="scss">
.header {
	height: auto;
	background-color: #fff;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&__left {
		display: flex;
		flex-direction: column;
	}
	&__right {
		font-weight: 600;
		display: flex;
		gap: 20px;
		align-items: center;
	}
	&__img {
		width: 32px;
		height: 32px;
		border-radius: 10px;
		overflow: hidden;
	}
	&__icon {
		width: 22px;
		height: 22px;
	}
}
</style>
