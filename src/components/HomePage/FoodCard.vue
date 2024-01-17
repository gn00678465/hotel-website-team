<template>
  <div class="relative overflow-hidden rounded-lg">
    <img
      :src="image"
      alt=""
      srcset=""
      class="aspect-[5/8] w-full object-cover object-center desktop:aspect-[52/75]"
    />
    <div
      class="card-content absolute bottom-0 left-0 right-0 w-full space-y-4 p-3 text-neutral-white desktop:p-6"
    >
      <p class="mb-4 flex items-center font-bold">
        <span class="mr-auto text-h4">{{ name }}</span>
        <span class="mr-2 text-body2">{{ days }}</span>
        <span class="text-body2">{{ time }}</span>
      </p>
      <p class="whitespace-normal text-body2 font-normal leading-normal tracking-normal">
        {{ describe }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export interface FoodInfo {
  name: string;
  days: string;
  time: string;
  image: string;
  describe: string;
}
</script>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = withDefaults(defineProps<Partial<FoodInfo>>(), {
  image: undefined,
  name: '',
  time: '',
  days: '',
  describe: '',
});

const { image } = toRefs(props);
</script>

<style scoped>
.card-content {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #140f0a 77.6%);
  backdrop-filter: blur(10px);
}
</style>
