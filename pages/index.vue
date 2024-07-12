<template>
<div class="app">
    dsadsadas 33337777eeee
    
    <van-button type="primary" @click="showToast('toast')">button</van-button>
<VanButton type="success" @click="showNotify('notify')">button</VanButton>
<LazyVanButton type="default">lazy button</LazyVanButton>


<van-swipe-cell>
  <template #left>
    <van-button square type="primary" text="Select" />
  </template>
  <van-cell :border="false" title="Cell" value="Cell Content" />
  <template #right>
    <van-button square type="danger" text="Delete" />
    <van-button square type="primary" text="Collect" />
  </template>
</van-swipe-cell>

<NuxtLink to="/main">
  Main
</NuxtLink>

<Test />

</div>
</template>
  
<script setup>
import { showToast } from 'vant';
import { BeakerIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '~/store/UserStore.js'
import Test from '~/components/test.vue'


const store = useUserStore()
console.log(store)

definePageMeta({
  layout: "account",
});
</script>
 
<style scoped lang="scss">
.app {
  height: 100vh;
  width: 100vw;
}

</style>