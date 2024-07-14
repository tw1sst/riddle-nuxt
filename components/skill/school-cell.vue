<template>
  <van-swipe-cell>
    <div class="cell">
      <van-image
        width="58"
        height="58"
        block
        class="cell__image"
        :src="school.logo_path"
      />
      <div class="cell__info">
        <div class="cell__title">
          {{ school.name }}
          <div class="cell__badge">
            17 уроков
          </div>
        </div>
        <div class="cell__progressTitle">
            {{ school.id * 30 }}% пройдено
          </div>
        <div class="cell__progress">
          <van-progress 
            :show-pivot="false"
            :percentage="school.id * 30" />
        </div>
      </div>
    </div>

    <template #right>
      <van-button square text="Выйти" type="danger" class="delete-button cell__actionButton" />
    </template>
  </van-swipe-cell>
</template>


<script setup lang="ts">
import { useSchoolsStore } from '~/store/schools'
import type { School } from '~/store/schools'

const props = defineProps({
  school: <School>{},
})

const schoolsStore = useSchoolsStore()
</script>


<style lang="scss" scoped>
.cell {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid #F4F5F7;
  transition: .2s;
  &:hover {
    opacity: 0.8;
  }
  &__image {
    width: 58px;
    height: 58px;
    display: block;
    border-radius: 10px;
    overflow: hidden;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }
  &__title {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
  }
  &__progress {
    
  }
  &__progressTitle {
    font-size: 12px;
    color: #C5C5C5;
  }
  &__actionButton {
    height: 100%;
  }
  &__badge {
    color: black;
    font-size: 12px;
    background-color: #F4F5F7;
    padding: 5px;
    border-radius: 5px;
  }
}
</style>