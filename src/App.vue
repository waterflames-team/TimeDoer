<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { initStore, initSQL, getStore } from '@/utils/index';
import { listen } from '@tauri-apps/api/event';
const theme = ref()

onMounted(async () => {
  initStore();
  initSQL()
  theme.value = await getStore('theme') || 'light';

  // 添加主题更改监听
  await listen('changeTheme', ({ payload }) => {
    theme.value = payload
  })
});
</script>

<template >
  <section :theme="theme" class="content">
    <suspense>
      <router-view />
    </suspense>
  </section>
</template>

<style lang="scss" scoped>
.content {
  background: var(--background);
  color: var(--text);
  font-family: misan-bold;

  @apply flex justify-center items-center h-screen overflow-hidden break-all relative
}
</style>

