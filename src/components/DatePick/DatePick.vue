<template>
  <div>
    <div class="flex flex-col p-8 desktop:flex-row desktop:gap-x-[60px]">
      <CalendarPanel
        key="leftPanel"
        showArrow="left"
        :current="leftPanelCurrent"
        @click="onClick"
        @select="onSelect"
      />
      <CalendarPanel
        key="rightPanel"
        showArrow="right"
        :current="rightPanelCurrent"
        @click="onClick"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs, watch } from 'vue';
import CalendarPanel from './CalendarPanel.vue';

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

function onClick(direction: 'left' | 'right') {
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
  switch (tempDates.value?.length) {
    case 0:
      tempDates.value = [date];
      break;
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

watch(tempDates, (newDates) => {
  if (newDates?.length === 2) {
    emits('update:value', newDates);
  }
});
</script>

<style scoped></style>
