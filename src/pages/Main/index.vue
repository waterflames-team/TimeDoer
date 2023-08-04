<script lang='ts' setup>
import { ref } from 'vue';

const tabs = [
  {
    title: '规划',
    icon: 'home',
    path: '/main/schedule',
  },
  {
    title: '计时',
    icon: 'timer',
    path: '/main/timer',
  },
  {
    title: '回顾',
    icon: 'history',
    path: '/main/history',
  },
]

const curTab = ref('/main/timer')
</script>

<template>
  <div class="content">
    <div class="tabs">
      <router-link v-for="tab in tabs" :key="tab.title" :to="tab.path" replace
        :class="{ 'font-bold': curTab === tab.path }" class="leading-10" @click="curTab = tab.path">
        {{ tab.title }}
      </router-link>
    </div>
    <div class="h-full w-screen">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  font-family: misan-light;
  @apply flex flex-col gap-5;
}

.tabs {
  @apply flex justify-center gap-4 underline text-3xl my-10;
}
</style>
