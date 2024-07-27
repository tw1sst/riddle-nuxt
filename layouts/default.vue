<template>
<div class="app">
    <Header />
    <slot/>
    <TabBar />
</div>
</template>


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import Header from '~/components/header-main.vue'
import TabBar from '~/components/tab-bar.vue'
import { useUserStore } from '@/store/user'
import { useSchoolsStore } from '@/store/schools'
const { user, loggedIn } = useJwtAuth()

const userStore = useUserStore()
const schoolsStore = useSchoolsStore()
const route = useRoute()

if (loggedIn) {
  userStore.user = user.value
}

console.log(userStore.user)

// userStore.user = {
//     id: 1,
//     email: "likovdenis12@gmail.com",
//     username: "Денис Зорин",
//     is_email_verified: true,
//     nick_name: "@zorin36",
//     created_at: Date.now()
// }
//
// schoolsStore.schools = [
//     {
//         id: 1,
//         name: "Riddle Skill.English",
//         description: 'Школа современных технологий',
//         owner_id: 1,
//         username: "riddle_en",
//         logo_path: "https://i.ibb.co/FbWTFkW/6-C02-ED28-B1-FA-490-C-AF78-709-CD014-E431.jpg",
//         cover_path: "https://i.ibb.co/F8QdL6z/77608798-0-A77-4-D18-B167-B8-FD23-D02-DF1.jpg",
//         created_at: Date.now(),
//     },
//     {
//         id: 2,
//         name: "Riddle Skill.Dev",
//         description: `Курс по веб-разработке в Рочестерском технологическом институте (RIT)
// 2
// предлагает углубленное изучение веб-разработки, начиная с основ интернета и веб-технологий и заканчивая продвинутыми технологиями.`,
//         owner_id: 1,
//         username: "riddle_dev",
//         logo_path: "https://i.ibb.co/bWB8xCd/FFC03-B0-B-6303-4351-B152-2-A4-AAE64-B41-A.jpg",
//         cover_path: "https://i.ibb.co/X29qBMV/6-F2577-D8-5048-45-CE-BE96-EB0-C21-A43-E4-A.jpg",
//         created_at: Date.now(),
//     },
//     {
//         id: 3,
//         name: "Riddle Skill.Design",
//         description: 'Школа современного дизайна',
//         owner_id: 1,
//         username: "riddle_design",
//         logo_path: "https://i.ibb.co/6rJdwjh/9-F903-B8-F-F555-4-CF5-A5-E2-93226-BEC6-B8-F.jpg",
//         cover_path: "https://i.ibb.co/HLSt5fV/25990-A9-D-5530-4637-BC6-A-1-AE2469-D608-B.jpg",
//         created_at: Date.now(),
//     },
// ]
</script>


<style lang="scss" scoped>
.app {
   background-color: #F4F5F7;
}
</style>
