<script lang='ts' setup>
import { currentTime } from './utils'
</script>

<template>
  <div class="text-xl">当前时间</div>
  <div class="time">
    {{ currentTime }}
  </div>
</template>

<style lang="scss" scoped>
.time {
  font-family: alimama;
  @apply text-7xl mt-2;
}
</style>