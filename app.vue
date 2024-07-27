<template>
<NuxtLayout>
    <NuxtPage />
</NuxtLayout>
</template>

<script setup lang="ts">
const { user, loggedIn } = useJwtAuth()
console.log(user)
</script>

<style lang="scss">
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', Arial, sans-serif;
    user-select: none;
}
</style>
