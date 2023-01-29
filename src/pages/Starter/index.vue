<script lang='ts' setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const titleShow = ref(false)

setTimeout(() => {
  titleShow.value = true
}, 1000)

setTimeout(() => {
  titleShow.value = false
  setTimeout(() => {
    // TODO 判断是否是第一次进入，如果是第一次进入，跳转到主题选择页
    router.push('theme')
  }, 1000)
}, 3000)
</script>

<template>
  <Transition name="bounce">
    <div class="flex flex-col items-center gap-4" v-show="titleShow">
      <div class="flex gap-4">
        <span class="font-[alimama] text-7xl">睹时</span>
        <span class="font-[alimama] text-7xl">TimeDoer</span>
      </div>
      <div class="font-[alimama] text-4xl">用时钟带领一天</div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 1.0s;
}

.bounce-leave-active {
  animation: bounce-in 1.0s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}
</style>
