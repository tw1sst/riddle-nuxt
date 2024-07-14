<template>
<div class="main">
  <div class="main__headerTitle">
    <h2>Ваши школы</h2>
  </div>

  <div class="main__schools">
    <SchoolCell v-for="school of schoolsStore.schools" :school="school"/>
  </div>
  

</div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/store/user'
import { useSchoolsStore } from '~/store/schools'
import SchoolCell from '~/components/skill/school-cell'

const userStore = useUserStore()
const schoolsStore = useSchoolsStore()

definePageMeta({
  layout: "default",
});

</script>
 
<style scoped lang="scss">
.main {
  height: 100vh;
  width: 100vw;
  padding-top: 60px;
  &__headerTitle {
    padding: 0 20px;
  }
  &__schools {
    margin-top: 20px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  &__card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid #F4F5F7;
    transition: .2s;
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
    &-progress {
      
    }
    &-progressTitle {
      font-size: 12px;
      color: #C5C5C5;
    }
    &-actionButton {
      height: 100%;
    }
    &-badge {
      color: black;
      font-size: 12px;
      background-color: #F4F5F7;
      padding: 5px;
      border-radius: 5px;
    }
  }
}


</style>