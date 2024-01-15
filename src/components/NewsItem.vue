<template>
  <div
    class="flex flex-col gap-y-6 desktop:flex-row desktop:items-center desktop:gap-x-6 desktop:gap-y-0"
  >
    <img
      :src="image"
      :alt="alt"
      class="h-[294px] flex-shrink-0 overflow-hidden rounded-lg object-cover desktop:w-[474px]"
    />
    <div class="flex-shrink space-y-2 desktop:space-y-6">
      <h4
        class="text-h4 font-bold leading-heading tracking-heading text-neutral-black desktop:text-h3"
      >
        {{ title }}
      </h4>
      <p
        class="font-regular text-body2 leading-normal tracking-normal text-neutral-80 desktop:text-body"
      >
        {{ describe }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
interface Props {
  image: string;
  alt: string;
  title: string;
  describe: string;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  image: undefined,
  alt: '',
  title: '',
  describe: '',
});

const { image, alt, title, describe } = toRefs(props);
</script>

<style scoped></style>
