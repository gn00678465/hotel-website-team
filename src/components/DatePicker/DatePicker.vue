<template>
  <div
    ref="datePickerRef"
    class="hidden w-fit items-center gap-x-2 desktop:flex"
    @click="showModal = true"
  >
    <date-input label="入住" :date="formatDate(dates?.[0])"></date-input>
    <date-input label="退房" :date="formatDate(dates?.[1])"></date-input>
  </div>
  <Teleport to="body">
    <date-picker-modal
      v-model:show="showModal"
      :top="position.top"
      :right="position.right"
      @update:value="(value) => (dates = value)"
    ></date-picker-modal>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue';
import DateInput from './DateInput.vue';
import DatePickerModal from './DatePickerModal.vue';
import { useBoolean, useRect } from '@/hooks';
import { curryFormatDate } from './utils';

const datePickerRef = ref<null | HTMLDivElement>(null);
const { bool: showModal, setTrue: setModalShow } = useBoolean(false);
const position = reactive({ top: 0, right: 0 });
const datePickerRect = useRect(datePickerRef);
const dates = ref<[number, number] | null>(null);

function formatDate(date?: number): string {
  return (date && curryFormatDate('YYYY/ MM / DD')(date)) || '-';
}

function onModalShow() {
  setModalShow();
}

watch(showModal, (show) => {
  if (show) {
    if (datePickerRect.value) {
      position.top = datePickerRect.value.top - 32;
      position.right = window.innerWidth - datePickerRect.value.right - 32;
    }
  }
});

defineExpose({
  onModalShow,
});
</script>

<style scoped></style>
