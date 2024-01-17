<template>
  <div>
    <div class="curve-v relative">
      <svg
        v-for="n in count"
        :key="n"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 80 1068"
        fill="none"
        class="absolute"
        :style="{ left: `calc(${n} * var(--space))` }"
      >
        <path
          d="M5.16621 1218.15C-0.495123 1174.15 -5.23006 1056.35 21.1209 937.097C54.0595 788.031 93.1742 659.927 75.6755 447.974C58.1769 236.021 36.561 157.606 56.1183 -0.000123114"
          :stroke="color"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  color: string;
  width: number;
  height: number;
  count: number;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  count: 1,
  color: '#BF9D7D',
  width: 80,
  height: 1068,
});

const { color, width, height, count } = toRefs(props);
</script>

<style scoped>
.curve-v {
  @apply relative;
  --space: 7.48px;
  @media (min-width: 768px) {
    --space: 12px;
  }
}
</style>
