<template>
  <div class="flex flex-col p-8 desktop:flex-row desktop:gap-x-[60px]">
    <CalendarPanel key="leftPanel" showArrow="left" :current="leftPanelCurrent" @click="onClick" />
    <CalendarPanel
      key="rightPanel"
      showArrow="right"
      :current="rightPanelCurrent"
      @click="onClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CalendarPanel from './CalendarPanel.vue';

type Props = Partial<{
  value: [number, number] | null;
}>;

const props = withDefaults(defineProps<Props>(), {
  value: null,
});
const emits = defineEmits<{
  'update:value': [value: [number, number]];
}>();

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
</script>

<style scoped></style>
