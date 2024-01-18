<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 80 1068"
    fill="none"
  >
    <defs>
      <path
        id="curve-v"
        d="M5.16621 1218.15C-0.495123 1174.15 -5.23006 1056.35 21.1209 937.097C54.0595 788.031 93.1742 659.927 75.6755 447.974C58.1769 236.021 36.561 157.606 56.1183 -0.000123114"
        :stroke="color"
      />
    </defs>
    <use v-for="n of count" :key="n" :x="0 + n * space" xlink:href="#curve-v" />
  </svg>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { useMediaQuery } from '@vueuse/core';

interface Props {
  color: string;
  count: number;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  count: 1,
  color: '#BF9D7D',
});

const isMobile = useMediaQuery('(max-width: 768px)');
const { color, count } = toRefs(props);

const space = computed(() => (isMobile.value ? 7.48 : 12));
</script>

<style scoped></style>
