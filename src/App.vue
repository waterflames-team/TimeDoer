<script lang='ts' setup>
import { onMounted } from 'vue';
import { initStore, initSQL } from '@/utils/index';

import Login from '@/pages/Login/index.vue';

onMounted(() => {
  initStore();
  initSQL()
});
</script>

<template>
  <Suspense>
    <Login />
  </Suspense>
</template>
