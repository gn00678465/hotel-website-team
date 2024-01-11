<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="onClickMask">
      <div class="modal-container" @click.stop>
        <div class="gap flex items-center justify-between">
          <ul class="space-y-2">
            <li class="leading-heading tracking-heading text-h5 font-bold">{{ diffDays }} 晚</li>
            <li
              class="font-regular flex items-center justify-center gap-x-2 text-body leading-normal tracking-normal"
            >
              <span>{{ formatDate(tempDates?.[0]) }}</span
              ><span>-</span><span>{{ formatDate(tempDates?.[1]) }}</span>
            </li>
          </ul>
          <div class="flex items-center gap-x-2">
            <date-input label="入住" :date="formatDate(tempDates?.[0])"></date-input>
            <date-input label="退房" :date="formatDate(tempDates?.[1])"></date-input>
          </div>
        </div>
        <div class="flex flex-col desktop:flex-row desktop:gap-x-[60px]">
          <CalendarPanel
            key="leftPanel"
            showArrow="left"
            :current="leftPanelCurrent"
            :value="tempDates"
            @click="onClickArrow"
            @select="onSelect"
          />
          <CalendarPanel
            key="rightPanel"
            showArrow="right"
            :current="rightPanelCurrent"
            :value="tempDates"
            @click="onClickArrow"
            @select="onSelect"
          />
        </div>
        <div class="flex w-full items-center justify-end gap-x-4">
          <base-button buttonType="ghost" label="" @click="onClear">
            <p class="text-neutral-80">清除日期</p>
          </base-button>
          <base-button label="" @click="onClick">確定日期</base-button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import CalendarPanel from './CalendarPanel.vue';
import DateInput from './DateInput.vue';
import BaseButton from '../BaseButton.vue';
import { diffDate, curryFormatDate } from './utils';
import { useToggleScrollbar } from '@/hooks';

type Props = Partial<{
  value: [number, number] | null;
  show: boolean;
  top: number;
  right: number;
}>;

const props = withDefaults(defineProps<Props>(), {
  value: null,
  show: false,
  top: 0,
  right: 0,
});
const emits = defineEmits<{
  'update:value': [value: [number, number] | null];
  'update:show': [value: boolean];
}>();
const { value, show, top, right } = toRefs(props);

const tempDates = ref<[] | [number] | [number, number] | null>(value.value);

const leftPanelCurrent = ref(new Date());
const rightPanelCurrent = computed(() => {
  const date = new Date(leftPanelCurrent.value);
  return new Date(date.setMonth(date.getMonth() + 1));
});

const diffDays = computed<number>(() => {
  if (tempDates.value && tempDates.value.length === 2) {
    const [start, end] = tempDates.value;
    return diffDate(end, start, 'day');
  }
  return 0;
});

function onClickArrow(direction: 'left' | 'right') {
  if (direction === 'left') {
    onPreMonth();
  }
  if (direction === 'right') {
    onNextMonth();
  }
}

function onSelect(date: number) {
  if (tempDates.value?.length === 2) {
    tempDates.value = [];
  }
  if (tempDates.value === null) {
    tempDates.value = [];
  }
  switch (tempDates.value?.length) {
    case 0: {
      tempDates.value = [date];
      break;
    }
    case 1: {
      const [d] = tempDates.value;
      if (d > date) {
        tempDates.value = [date, d];
      } else {
        tempDates.value = [d, date];
      }
      break;
    }
  }
}

function onPreMonth() {
  leftPanelCurrent.value = new Date(
    leftPanelCurrent.value.setMonth(leftPanelCurrent.value.getMonth() - 1),
  );
}

function onNextMonth() {
  leftPanelCurrent.value = new Date(
    leftPanelCurrent.value.setMonth(leftPanelCurrent.value.getMonth() + 1),
  );
}

function onClick() {
  if (tempDates.value && tempDates.value.length === 2) {
    emits('update:value', [tempDates.value[0], tempDates.value[1]]);
    emits('update:show', false);
  }
}

function onClear() {
  tempDates.value = null;
  emits('update:value', tempDates.value);
  emits('update:show', false);
}

function formatDate(date?: number): string {
  return (date && curryFormatDate('YYYY/ MM / DD')(date)) || '-';
}

function onClickMask(e: Event) {
  e.stopImmediatePropagation();
  emits('update:show', false);
}

useToggleScrollbar(show, document.documentElement);
</script>

<style scoped>
.modal-mask {
  z-index: 9998;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  @apply fixed left-0 top-0 h-full w-full;
}

.modal-container {
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.1);
  max-width: 740px;
  top: calc(v-bind(top) * 1px);
  right: calc(v-bind(right) * 1px);
  @apply fixed w-full space-y-10 rounded-[20px] bg-neutral-white p-8;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
</style>
