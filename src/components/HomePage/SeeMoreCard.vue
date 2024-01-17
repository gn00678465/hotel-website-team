<template>
  <div
    class="relative flex flex-col justify-center gap-y-6 bg-neutral-black px-3 py-20 desktop:flex-row desktop:items-end desktop:gap-x-20 desktop:gap-y-0 desktop:py-30 desktop:pl-0 desktop:pr-78"
  >
    <base-carousel
      class="rounded-r-lg"
      wrapperClass="overflow-hidden"
      :loop="false"
      :autoplay="false"
    >
      <img
        v-for="(img, idx) of images"
        :key="idx"
        :src="img"
        class="object-cover desktop:aspect-square"
        alt=""
      />
    </base-carousel>
    <ul
      class="space-y-6 text-neutral-white desktop:static desktop:w-[628px] desktop:flex-shrink-0 desktop:space-y-10"
    >
      <li class="space-y-2 desktop:space-y-4">
        <h3 class="text-h4 font-bold desktop:text-h2">尊爵雙人房</h3>
        <p class="text-body2 font-normal leading-normal tracking-normal desktop:text-body">
          享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
        </p>
      </li>
      <li class="text-h5 font-bold leading-heading tracking-heading desktop:text-h3">NT$ 10,000</li>
      <li>
        <hero-button>查看更多</hero-button>
      </li>
      <li class="text-right text-primary-100">
        <span class="inline-block cursor-pointer p-4"><IcArrowLeft /></span>
        <span class="inline-block cursor-pointer p-4"><IcArrowRight /></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BaseCarousel from '../BaseCarousel.vue';
import HeroButton from '../HeroButton.vue';
import IcArrowLeft from '../icons/IconArrowLeft.vue';
import IcArrowRight from '../icons/IconArrowRight.vue';

interface Props {
  images: string[];
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  images: () => [],
});

const { images } = toRefs(props);
</script>

<style scoped lang="scss"></style>
