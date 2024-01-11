<template>
  <label for="" class="rounded-lg border border-neutral-black p-4">
    <span class="font-regular block text-tiny leading-normal tracking-normal text-neutral-80">{{
      label
    }}</span>
    <input
      type="text"
      class="tracking-header font-regular block text-body leading-normal outline-none"
      :value="date"
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
