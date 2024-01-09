<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ic_ArrowRight">
      <path
        id="Vector"
        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
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
