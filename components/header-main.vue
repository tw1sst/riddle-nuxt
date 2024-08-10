<template>
	<van-sticky>
		<div class="header" :class="scrollTop > 16 ? 'header__blur' : ''">
			<div class="header__left">
				<p class="text-sm text-gray-300">👋 С возвращением</p>
				<div class="text-xl font-semibold">Обзор</div>
			</div>

			<div class="header__right">
				<van-badge>
					<MagnifyingGlassIcon class="header__icon" />
				</van-badge>
				<van-badge dot>
					<BellIcon class="header__icon" />
				</van-badge>

				<van-popover
					v-model:show="showPopover"
					placement="bottom-end"
					:actions="actions"
					@select="onSelect"
				>
					<template #reference>
						<van-image class="header__img" :src="userAvatar" />
					</template>
				</van-popover>
			</div>
		</div>
	</van-sticky>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'

const showPopover = ref<boolean>(false)
const scrollTop = ref<number>(0)

const userStore = useUserStore()

const userAvatar =
	'https://ui-avatars.com/api/?name=' +
	userStore.user.name +
	'&size=32&color=7F9CF5&background=EBF4FF'
// const logoImg =
// 	'https://i.ibb.co/BTTzpLt/F874-E38-B-2620-4-E93-9750-FB0-A25-A36-BA0.jpg'

const actions = [
	{ text: 'Option 1' },
	{ text: 'Option 2' },
	{ text: 'Option 3' },
]
const onSelect = (action: any) => showToast(action.text)

onMounted(() => {
	let scrolltopOffset = scrollY
	window.addEventListener('scroll', function () {
		if (scrollY > scrolltopOffset) {
			// console.log('Scroll down')
		} else {
			// console.log('Scroll Up')
		}
		scrolltopOffset = scrollY
		scrollTop.value = scrolltopOffset
	})
})
</script>

<style scoped lang="scss">
.header {
	height: auto;
	padding: 5px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #f6f6f6;
	transition: 0.3s;
	&__blur {
		background: rgba(255, 255, 255, 0.8);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		box-shadow: 0 0.5px 0 0 #c8c7cb;
	}
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
