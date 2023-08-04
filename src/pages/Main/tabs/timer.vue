<script lang='ts' setup>
import CurrentTime from './components/CurrentTime.vue';
import CountTime from './components/CountTime.vue';
import FanqieTime from './components/FanqieTime.vue';
import Calendar from './components/Calendar.vue';

const cards = [
  {
    height: '180px',
    component: CurrentTime
  },
  {
    height: '290px',
    component: CountTime
  },
  {
    title: '番茄钟',
    height: '235px',
    component: FanqieTime
  },
  {
    title: '日历',
    height: '235px',
    component: Calendar
  },
];
</script>

<template>
  <div class="content">
    <div v-for="card in cards" :key="card.title" class="card" :style="{ height: card.height }">
      <component :is="card.component" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.content {
  @apply flex flex-col gap-8 flex-wrap px-8 max-h-screen;
}

.card {
  font-family: misan-bold;
  @apply bg-white w-450px border-rounded-4 flex flex-col justify-center items-center p-6;
}
</style>
