<template>
  <div ref="datePickerRef" class="flex items-center gap-x-2" @click="showModal = true">
    <date-input label="入住"></date-input>
    <date-input label="退房"></date-input>
  </div>
  <Teleport to="body">
    <date-picker-modal
      v-model:show="showModal"
      :top="position.top"
      :right="position.right"
    ></date-picker-modal>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue';
import DateInput from './DateInput.vue';
import DatePickerModal from './DatePickerModal.vue';
import { useBoolean, useRect } from '@/hooks';

const datePickerRef = ref<null | HTMLDivElement>(null);
const { bool: showModal } = useBoolean(false);
const position = reactive({ top: 0, right: 0 });
const datePickerRect = useRect(datePickerRef);

watch(showModal, (show) => {
  if (show) {
    if (datePickerRect.value) {
      position.top = datePickerRect.value.top - 32;
      position.right = innerWidth - datePickerRect.value.right + 32 + 17;
    }
  }
});
</script>

<style scoped></style>
