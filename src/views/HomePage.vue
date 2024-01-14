<template>
  <div class="relative">
    <base-nav class="absolute left-0 right-0 top-0 z-10 w-full bg-neutral-transparent"></base-nav>
    <base-carousel
      class="banner h-screen desktop:aspect-video"
      wrapperClass="desktop:h-auto overflow-hidden"
      :loop="false"
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
  </div>
</template>

<script setup lang="ts">
import BaseNav from '@/components/layout/BaseNav.vue';
import BaseCarousel from '@/components/BaseCarousel.vue';
import homePageBanner from '@/assets/images/homepage-banner.jpg';
</script>

<style scoped lang="scss">
.banner {
  @apply relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
}
</style>
