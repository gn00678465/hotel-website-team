<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ic_close" clip-path="url(#clip0_4323_7101)">
      <path
        id="Vector"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_4323_7101">
        <rect :width="size" :height="size" fill="white" />
      </clipPath>
    </defs>
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
  size: 24,
});

const { color, size } = toRefs(props);
</script>

<style scoped></style>
