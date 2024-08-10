<template>
  <div class="loading">
    <van-loading size="42" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped lang="scss">
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
