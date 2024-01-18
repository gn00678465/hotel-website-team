<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      :viewBox="`0 0 1920 ${80 + count * space}`"
      fill="none"
    >
      <defs>
        <path
          id="curve-h"
          d="M1920 74.8338C1850.65 80.4951 1664.98 85.2301 1477.02 58.8791C1242.06 25.9405 1040.15 -13.1742 706.079 4.32449C372.006 21.8232 248.411 43.4391 -0.0019368 23.8818"
          :stroke="color"
        />
      </defs>
      <use v-for="n of count" :key="n" :y="0 + n * space" xlink:href="#curve-h" />
    </svg>
  </div>
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
