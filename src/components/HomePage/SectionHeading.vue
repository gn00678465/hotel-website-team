<template>
  <div class="mb-10 flex items-center text-left text-h3 font-bold desktop:mb-20 desktop:text-h1">
    <div class="mr-10 flex-shrink-0" :class="textClass">
      <p class="mb-1 leading-heading tracking-heading">
        <slot name="above"></slot>
      </p>
      <p class="leading-heading tracking-heading">
        <slot name="below"></slot>
      </p>
    </div>
    <div class="inline h-[2px] w-full desktop:max-w-[165px]" :class="barClass"></div>
  </div>
</template>

<script lang="ts">
export type SectionHeadingProps = {
  textClass: string;
  barClass: string;
};
</script>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = withDefaults(defineProps<Partial<SectionHeadingProps>>(), {
  textClass: undefined,
  barClass: undefined,
});

const { textClass, barClass } = toRefs(props);
</script>

<style scoped></style>
