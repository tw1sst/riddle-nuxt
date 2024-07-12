<template>
<div class="app"> 
    <slot/>
</div>
</template>
  
  
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
  
  
<style lang="scss" scoped>
.app {
    margin: 48px 0 60px 0;
    box-sizing: border-box;
}
</style>