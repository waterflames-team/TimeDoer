<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { initStore, initSQL, getStore } from '@/utils/index';

const theme = ref('light')

onMounted(async () => {
  initStore();
  initSQL()
  theme.value = await getStore('theme')
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

  @apply flex justify-center items-center h-screen overflow-hidden break-all
}
</style>

