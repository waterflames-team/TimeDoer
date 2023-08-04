<script lang='ts' setup>
import { computed, ref } from 'vue';

const fq = ref(60 * 25)
const active = ref(false)

const fqTime = computed(() => {
  const minute = ('0' + Math.floor(fq.value / 60)).slice(-2);
  const second = ('0' + fq.value % 60).slice(-2);
  const fqTimeStr = `${minute}:${second}`;
  return fqTimeStr;
})

setInterval(() => {
  if (!active.value) return
  fq.value -= 1;
}, 1000);

</script>

<template>
  <div class="flex flex-col gap-6 items-center">
    <div class="text-xl flex items-center gap-2">
      番茄钟
    </div>
    <div class="flex gap-4">
      <div class="flex flex-col gap-6 items-center">
        <div class="time">
          {{ fqTime }}
        </div>
        <div class="text-gray-200 text-md">
          选择个番茄
        </div>
      </div>
      <div class="w-32 h-32 bg-[#8cf48c7a] rounded-full flex items-center justify-center">
        <div class="w-28 h-28 bg-[#8CF38C]  rounded-full flex items-center justify-center">
          <span class="text-xl text-white cursor-pointer" @click="active = !active">
            {{ active? '停止计时': '开始计时' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time {
  font-family: alimama;
  @apply text-7xl;
}
</style>