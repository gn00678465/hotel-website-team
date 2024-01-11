<template>
  <div class="space-y-10">
    <div class="flex flex-col p-8 desktop:flex-row desktop:gap-x-[60px]">
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
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import CalendarPanel from './CalendarPanel.vue';
import BaseButton from '../BaseButton.vue';

type Props = Partial<{
  value: [number, number] | null;
}>;

const props = withDefaults(defineProps<Props>(), {
  value: null,
});
const emits = defineEmits<{
  'update:value': [value: [number, number] | null];
}>();
const { value } = toRefs(props);

const tempDates = ref<[] | [number] | [number, number] | null>(value.value);

const leftPanelCurrent = ref(new Date());
const rightPanelCurrent = computed(() => {
  const date = new Date(leftPanelCurrent.value);
  return new Date(date.setMonth(date.getMonth() + 1));
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
  }
}

function onClear() {
  tempDates.value = null;
  emits('update:value', tempDates.value);
}
</script>

<style scoped></style>
