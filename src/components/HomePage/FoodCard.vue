<template>
  <div class="relative overflow-hidden rounded-lg">
    <img :src="image" alt="" srcset="" class="aspect-[5/9] object-cover" />
    <div
      class="card-content absolute bottom-0 left-0 right-0 w-full space-y-4 p-3 text-neutral-white"
    >
      <p class="mb-4 flex items-center font-bold">
        <span class="mr-auto text-h4">海霸</span>
        <span class="mr-2 text-body2">SUN-MON</span>
        <span class="text-body2">11:00 - 20:30</span>
      </p>
      <p class="text-body2 font-normal leading-normal tracking-normal">
        以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  image: string;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  image: undefined,
});

const { image } = toRefs(props);
</script>

<style scoped>
.card-content {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #140f0a 77.6%);
  backdrop-filter: blur(10px);
}
</style>
