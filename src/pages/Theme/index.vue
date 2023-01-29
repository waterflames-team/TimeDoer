<script lang='ts' setup>
import { getStore, setStore } from '@/utils';
import { appWindow } from '@tauri-apps/api/window';
import { emit } from '@tauri-apps/api/event';
import { onMounted, ref } from 'vue';

const theme = ref(await getStore('theme'))

const enterAM = ref(false)

const themes = [
  {
    name: '浅色',
    color: '#EBEBEB',
    value: 'light'
  },
  {
    name: '自动',
    color: '#A7A7A7',
    value: 'auto'
  },
  {
    name: '深色',
    color: '#1F2021',
    value: 'dark'
  }
]

const changeTheme = async (value: string) => {
  theme.value = value === 'auto' ? await appWindow.theme() : value
  await setStore('theme', theme.value)

  await emit('changeTheme', theme.value)
  // TODO 处理选择后的动画
}

onMounted(() => {
  enterAM.value = true
})

</script>

<template>
  <Transition name="cover">
    <div class="cover absolute" v-show="enterAM" />
  </Transition>
  <div class="content z-1">
    <div class="text-white text-3xl">选择颜色模式</div>
    <div class="flex justify-between px-40 w-screen">
      <div class="select" v-for="item in themes" :key="item.value" :style="`color:${item.color}`"
        @click="changeTheme(item.value)">
        <div class="i-ic-outline-circle text-5xl" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="next" @click="$router.push('main')"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  @apply flex flex-col justify-center items-center gap-45 my-20
}

.select {
  @apply flex justify-center items-center flex-col hover: cursor-pointer
}

.next {
  @apply i-bi-arrow-right-square-fill text-black text-4xl hover: cursor-pointer
}

.cover {
  background: var(--background-dark);
  @apply h-2000px w-2000px rotate-30 left-[-1620px];
}

.cover-enter-active {
  animation: enter 1.0s ease;
}

.cover-leave-active {
  animation: enter 1.0s reverse;
}

@keyframes enter {
  0% {
    left: -3000px;
  }

  100% {
    left: -1620px;
  }
}
</style>
