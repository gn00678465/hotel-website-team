<template>
  <div>
    <div class="curve-h relative">
      <svg
        v-for="n in count"
        :key="n"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 1060 80"
        fill="none"
        class="absolute"
        :style="{ top: `calc(${n} * var(--space))` }"
      >
        <path
          d="M1218.15 74.8338C1174.15 80.4951 1056.35 85.2301 937.097 58.8791C788.031 25.9405 659.928 -13.1742 447.975 4.32449C236.022 21.8232 157.607 43.4391 0.000366211 23.8818"
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
  width: 1060,
  height: 80,
});

const { color, width, height, count } = toRefs(props);
</script>

<style scoped lang="scss">
.curve-h {
  @apply relative;
  --space: 7.48px;
  @media (min-width: 768px) {
    --space: 12px;
  }
}
</style>
