<template>
  <div class="calendar-panel relative">
    <slot name="title" :formatDate="calendar.format">
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
    </slot>
    <ul class="grid grid-cols-7 gap-y-1 text-body">
      <template v-if="showWeekdays">
        <li
          v-for="weekday of weekdays"
          :key="weekday"
          class="px-3 pb-4 pt-2 text-center leading-normal tracking-normal"
        >
          {{ weekday }}
        </li>
      </template>
      <li
        v-for="date of calendar.monthDate"
        :key="date.date"
        class="relative z-0 cursor-pointer px-3 pb-2 pt-2 text-center leading-normal tracking-normal desktop:pb-4"
        :class="date.other ? 'invisible' : 'visible' + ' ' + dateClasses(date.date)"
        @click="onSelectDate(date.date)"
      >
        {{ new Date(date.date).getDate() }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, unref, watch, computed } from 'vue';
import IcArrowLeft from '@/assets/icons/IcArrowLeft.vue';
import IcArrowRight from '@/assets/icons/IcArrowRight.vue';
import { Calendar, isSmallThenToday } from './utils';

interface Props {
  width: number | string | 'auto';
  current: Date;
  showArrow: 'left' | 'right' | 'both';
  showWeekdays: boolean;
  weekdays: [string, string, string, string, string, string, string];
  value: [] | [number] | [number, number] | null;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  width: 'auto',
  current: () => new Date(),
  showArrow: 'both',
  showWeekdays: true,
  weekdays: () => ['日', '一', '二', '三', '四', '五', '六'] as const,
});
const emit = defineEmits<{
  click: [direction: 'left' | 'right'];
  select: [value: number];
}>();

const { current, showArrow, value, showWeekdays, weekdays, width } = toRefs(props);

const calendar = ref(new Calendar({ current: unref(current) }));

function onClickArrow(direction: 'left' | 'right') {
  emit('click', direction);
}

function onSelectDate(date: number) {
  if (isSmallThenToday(date)) return;
  emit('select', date);
}

const panelClass = computed(() => {
  if (typeof width.value === 'number') return `${width.value}px`;
  if (typeof width.value === 'string' && (width.value.endsWith('px') || width.value.endsWith('%')))
    return width.value;
  return 'auto';
});

const dateClasses = computed(() => (date: number) => {
  if (value.value) {
    const activeClass = [...value.value].includes(date) ? 'active' : '';
    const rangeClass =
      value.value.length === 2 && date > value.value[0] && date < value.value[1] ? 'range' : '';
    const cursorClass = isSmallThenToday(date) ? 'cursor-not-allowed' : '';
    return [activeClass, rangeClass, cursorClass].join(' ');
  }
  return '';
});

watch(current, (newCurrent) => {
  calendar.value = new Calendar({ current: newCurrent });
});
</script>

<style scoped lang="scss">
.calendar-panel {
  width: v-bind(panelClass);
}

.active:not(.invisible) {
  @apply text-neutral-white;
  &::after {
    content: '';
    transform: translate(-50%, calc(-50%));
    z-index: -1;
    @media (min-width: 768px) {
      transform: translate(-50%, calc(-50% - 4px));
    }
    @apply absolute left-1/2 top-1/2 h-10 w-10 rounded-full bg-neutral-black;
  }
}

.range:not(.invisible) {
  &::after {
    content: '';
    transform: translate(-50%, calc(-50%));
    z-index: -1;
    @media (min-width: 768px) {
      transform: translate(-50%, calc(-50% - 4px));
    }
    @apply absolute left-1/2 top-1/2 h-10 w-full bg-neutral-10;
  }
}
</style>
