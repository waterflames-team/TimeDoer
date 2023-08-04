import { ref } from 'vue';
import dayjs from 'dayjs';

export const currentTime = ref('')
export const currentDay = ref('')

setInterval(() => {
  currentTime.value = dayjs().format('HH:mm:ss');
  currentDay.value = dayjs().format('YYYY.MM.DD')
}, 500);

