<template>
  <div class="app">
    <slot/>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useSchoolsStore } from '@/store/schools'


</script>


<style lang="scss" scoped>
.app {
  background-color: #F4F5F7;
}
</style>
