<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ic_ArrowRight" clip-path="url(#clip0_14_2275)">
      <path
        id="Vector"
        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_2275">
        <rect :width="size" :height="size" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  color?: string;
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'currentColor',
  size: 24,
});

const { color, size } = toRefs(props);
</script>

<style scoped></style>
