<script lang='ts' setup>
import { currentDay } from './utils'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <div class="text-xl">
      日历
    </div>
    <div class="time">{{ currentDay }}</div>
    <div class="text-gray-200 text-xl">鼓励语</div>
  </div>
</template>

<style lang="scss" scoped>
.time {
  font-family: alimama;
  @apply text-7xl;
}
</style>