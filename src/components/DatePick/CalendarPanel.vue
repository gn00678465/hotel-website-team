<template>
  <div class="w-[308px]">
    <div class="mb-2 flex items-center justify-between text-h6 font-bold">
      <IcArrowLeft
        class="cursor-pointer"
        :class="showArrow === 'both' || showArrow === 'left' ? 'visible' : 'invisible'"
        :size="24"
        @click="onClickArrow('left')"
      />
      <p>{{ calendar.format }}</p>
      <IcArrowRight
        class="cursor-pointer"
        :class="showArrow === 'both' || showArrow === 'right' ? 'visible' : 'invisible'"
        :size="24"
        @click="onClickArrow('right')"
      />
    </div>
    <ul class="grid grid-cols-7 gap-y-1 text-body">
      <li
        v-for="weekday of weekdays"
        :key="weekday"
        class="px-3 pb-4 pt-2 text-center leading-normal tracking-normal"
      >
        {{ weekday }}
      </li>
      <li
        v-for="date of calendar.monthDate"
        :key="date.date"
        class="reactive px-3 pb-4 pt-2 text-center leading-normal tracking-normal"
        :class="date.other ? 'invisible' : 'visible'"
      >
        {{ new Date(date.date).getDate() }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, unref, watch } from 'vue';
import IcArrowLeft from '@/assets/icons/IcArrowLeft.vue';
import IcArrowRight from '@/assets/icons/IcArrowRight.vue';
import { Calendar } from './utils';
const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

interface Props {
  current: Date;
  showArrow: 'left' | 'right' | 'both';
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  current: () => new Date(),
  showArrow: 'both',
});
const emit = defineEmits<{
  click: [direction: 'left' | 'right'];
}>();

const { current } = toRefs(props);

const calendar = ref(new Calendar({ current: unref(current) }));

function onClickArrow(direction: 'left' | 'right') {
  emit('click', direction);
}

watch(current, (newCurrent) => {
  calendar.value = new Calendar({ current: newCurrent });
});
</script>

<style scoped></style>
