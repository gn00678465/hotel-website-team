<template>
  <label
    for=""
    class="w-full max-w-[197px] rounded-lg border border-neutral-black bg-neutral-white p-4"
  >
    <span class="font-regular block text-tiny leading-normal tracking-normal text-neutral-80">{{
      label
    }}</span>
    <input
      type="text"
      class="tracking-header font-regular inline-block bg-neutral-transparent text-body leading-normal outline-none"
      :value="date"
      readonly
  /></label>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  label: string;
  date: string;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  label: '',
  date: '',
});

const { label, date } = toRefs(props);
</script>

<style scoped></style>
