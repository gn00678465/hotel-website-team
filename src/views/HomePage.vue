<template>
  <div class="relative">
    <base-nav
      ref="navRef"
      class="absolute left-0 right-0 top-0 z-10 w-full bg-neutral-transparent"
    ></base-nav>
    <base-carousel
      class="banner h-screen desktop:aspect-video"
      wrapperClass="desktop:h-auto overflow-hidden"
      :loop="false"
      :autoplay="false"
    >
      <img
        :src="homePageBanner"
        class="h-full object-cover object-[47%] desktop:h-auto desktop:object-[unset]"
        alt=""
      />
      <img
        :src="homePageBanner"
        class="h-full object-cover object-[47%] desktop:h-auto desktop:object-[unset]"
        alt=""
      />
      <img
        :src="homePageBanner"
        class="h-full object-cover object-[47%] desktop:h-auto desktop:object-[unset]"
        alt=""
      />
      <img
        :src="homePageBanner"
        class="h-full object-cover object-[47%] desktop:h-auto desktop:object-[unset]"
        alt=""
      />
      <img
        :src="homePageBanner"
        class="h-full object-cover object-[47%] desktop:h-auto desktop:object-[unset]"
        alt=""
      />
      <img
        :src="homePageBanner"
        class="h-full object-cover object-[47%] desktop:h-auto desktop:object-[unset]"
        alt=""
      />
    </base-carousel>
    <div
      class="desktop:pt-29 desktop:top-30 top-18 absolute left-0 z-20 flex w-full flex-col items-center justify-start gap-y-10 bg-neutral-transparent px-5 pt-10 desktop:flex-row desktop:gap-y-0 desktop:px-20"
    >
      <div
        class="flex flex-grow-0 flex-col items-center justify-center font-bold text-primary-100 desktop:flex-grow desktop:items-start"
      >
        <p class="mb-2 text-h4 leading-heading tracking-[2px] desktop:text-h2">享樂酒店</p>
        <p class="mb-5 text-body leading-heading tracking-[1.2px] desktop:mb-10 desktop:text-h5">
          Enjoyment Luxury Hotel
        </p>
        <div class="divider h-[83px] w-[2px] bg-primary-120 desktop:h-[2px] desktop:w-full"></div>
      </div>
      <div class="desktop:pr-50 desktop:ml-50 relative py-15 pr-5 desktop:py-24">
        <div class="relative z-10 font-bold text-neutral-white">
          <p class="text-h1 leading-heading tracking-heading desktop:text-h0">高雄</p>
          <p class="mb-6 text-h1 leading-heading tracking-heading desktop:text-h0">豪華住宿之選</p>
          <p
            class="mb-10 text-body leading-normal tracking-normal text-neutral-40 desktop:text-h3 desktop:font-semibold desktop:leading-heading desktop:tracking-heading"
          >
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </p>
          <hero-button>立即訂房</hero-button>
        </div>
        <div class="box absolute right-0 top-0 z-0"></div>
      </div>
    </div>
  </div>
  <section>Section1</section>
  <section>Section1</section>
  <section>Section1</section>
  <section>Section1</section>
  <section>Section1</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useElementBounding } from '@vueuse/core';
import BaseNav from '@/components/layout/BaseNav.vue';
import BaseCarousel from '@/components/BaseCarousel.vue';
import HeroButton from '@/components/HeroButton.vue';
import homePageBanner from '@/assets/images/homepage-banner.jpg';

const navRef = ref<InstanceType<typeof BaseNav> | null>(null);
const navRect = useElementBounding(navRef);

console.log(navRect.height);
</script>

<style scoped lang="scss">
.banner {
  @apply relative;
  &:after {
    content: '';
    @apply absolute left-0 top-0 h-full w-full;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
}

.divider {
  background: linear-gradient(180deg, #be9c7c 0%, #fff 100%);
  @media (min-width: 768px) {
    background: linear-gradient(90deg, #be9c7c 0%, #fff 100%);
  }
}

.box {
  width: calc(100% - 20px);
  height: 100%;
  border-radius: 40px;
  border-top: 1px solid #f5f7f9;
  border-right: 1px solid #f5f7f9;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    width: calc(100% - 40px);
    border-radius: 80px;
  }
}
</style>
