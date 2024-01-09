<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ic_ArrowLeft">
      <path
        id="Vector"
        d="M15.4102 7.41L10.8302 12L15.4102 16.59L14.0002 18L8.00016 12L14.0002 6L15.4102 7.41Z"
        :fill="color"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  color?: 'currentColor' & string;
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'currentColor',
  size: 16,
});

const { color, size } = toRefs(props);
</script>

<style scoped></style>
