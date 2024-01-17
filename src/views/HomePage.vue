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
      class="absolute left-0 top-18 z-20 flex w-full flex-col items-center justify-start gap-y-10 bg-neutral-transparent px-5 pt-10 desktop:top-30 desktop:flex-row desktop:gap-y-0 desktop:px-20 desktop:pt-29"
    >
      <div
        class="flex flex-grow-0 flex-col items-center justify-center font-bold text-primary-100 desktop:flex-grow desktop:items-start"
      >
        <h2 class="mb-2 text-h4 desktop:text-h2">享樂酒店</h2>
        <h3 class="mb-5 text-body desktop:mb-10 desktop:text-h5">Enjoyment Luxury Hotel</h3>
        <div class="divider h-[83px] w-[2px] bg-primary-120 desktop:h-[2px] desktop:w-full"></div>
      </div>
      <div class="relative py-15 pr-5 desktop:ml-50 desktop:py-24 desktop:pr-50">
        <div class="relative z-10 font-bold text-neutral-white">
          <h2 class="text-h1 desktop:text-h0">高雄</h2>
          <h2 class="mb-6 text-h1 desktop:text-h0">豪華住宿之選</h2>
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
  <section
    class="relative flex flex-col gap-y-10 bg-primary-10 px-3 py-20 desktop:flex-row desktop:gap-x-20 desktop:gap-y-0 desktop:px-78 desktop:py-30"
  >
    <div class="text-left text-h3 font-bold tracking-heading text-primary-100 desktop:text-h1">
      <h2 class="mb-1">最新</h2>
      <h2 class="mb-6 desktop:mb-10">消息</h2>
      <div class="h-[2px] w-[140px] bg-primary-to-l"></div>
    </div>
    <div class="space-y-10">
      <news-card
        v-for="(news, index) in newsArr"
        :key="index"
        :image="news.image"
        :title="news.title"
        :describe="news.describe"
        class="relative z-10"
      ></news-card>
    </div>
    <img
      :src="dot"
      alt="dot"
      class="absolute right-6 top-10 h-25 w-25 select-none desktop:right-45 desktop:top-25 desktop:h-auto desktop:w-auto"
    />
    <img
      :src="dot"
      alt="dot"
      class="absolute -bottom-15 left-6 z-10 h-25 w-25 select-none desktop:-bottom-20 desktop:left-50 desktop:h-auto desktop:w-auto"
    />
  </section>
  <section class="relative bg-neutral-black pb-30 pt-20 desktop:pb-50 desktop:pt-30">
    <img :src="image4" alt="" class="h-[594px] w-full object-cover desktop:h-[672px]" />
    <div
      class="absolute left-0 top-20 w-full pl-10 pr-5 pt-10 desktop:top-30 desktop:pl-141 desktop:pr-78 desktop:pt-20"
    >
      <div class="about-box p-6 desktop:p-20">
        <section-heading textClass="text-neutral-white" barClass="bg-neutral-white">
          <template #above>關於</template>
          <template #below>我們</template>
        </section-heading>
        <ul class="space-y-4 desktop:space-y-10">
          <li
            v-for="(txt, idx) of aboutContent"
            :key="idx"
            class="text-body2 font-normal leading-normal tracking-normal text-neutral-white desktop:whitespace-pre-line desktop:text-body"
          >
            {{ txt }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="relative">
    <see-more-card :images="seeMore"></see-more-card>
  </section>
  <section
    class="overflow-x-hidden bg-primary-40 py-20 pl-3 desktop:py-30 desktop:pl-78 desktop:pr-0"
  >
    <section-heading
      class="mb-10 w-[306px] desktop:mb-20 desktop:w-auto"
      textClass="text-primary-100"
      barClass="bg-primary-to-l"
    >
      <template #above>佳餚</template>
      <template #below>美饌</template>
    </section-heading>
    <div
      class="w-full overflow-auto whitespace-nowrap pr-3"
      v-smooth-scrollbar="{ plugins: { overscroll: false } }"
    >
      <ul class="space-x-6">
        <li
          v-for="(food, idx) of foods"
          :key="idx"
          class="inline-block w-full max-w-[300px] desktop:max-w-[416px]"
        >
          <food-card v-bind="food"></food-card>
        </li>
      </ul>
    </div>
  </section>
  <section class="bg-neutral-bg pb-10 pt-20">
    <div class="mx-auto px-3 desktop:max-w-[67.5%] desktop:px-0">
      <section-heading
        class="mb-10 w-[300px] desktop:mb-20 desktop:w-auto"
        textClass="text-primary-100"
        barClass="bg-primary-to-l"
      >
        <template #above>交通</template>
        <template #below>方式</template>
      </section-heading>
      <div class="mb-6 desktop:mb-10">
        <p class="mb-4 text-body font-bold leading-normal tracking-normal text-neutral-white">
          台灣高雄市新興區六角路123號
        </p>
        <img
          :src="map"
          alt="map"
          class="h-[360px] w-full overflow-hidden rounded-lg object-cover object-center"
        />
      </div>
      <ul
        class="flex flex-col items-start gap-y-6 desktop:flex-row desktop:gap-x-6 desktop:gap-y-0"
      >
        <li class="space-y-2 text-neutral-white">
          <IconCar class="desktop:mb-4" :size="48" color="#BE9C7C" />
          <h5 class="text-body desktop:text-h5">自行開車</h5>
          <p class="text-body2 font-normal leading-normal tracking-normal desktop:text-body">
            如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
          </p>
        </li>
        <li class="space-y-2 text-neutral-white">
          <IconTrain class="desktop:mb-4" :size="48" color="#BE9C7C" />
          <h5 class="text-body desktop:text-h5">高鐵/火車</h5>
          <p class="text-body2 font-normal leading-normal tracking-normal desktop:text-body">
            如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
          </p>
        </li>
        <li class="space-y-2 text-neutral-white">
          <IconLuxurycar class="desktop:mb-4" :size="48" color="#BE9C7C" />
          <h5 class="text-body desktop:text-h5">禮賓車服務</h5>
          <p class="text-body2 font-normal leading-normal tracking-normal desktop:text-body">
            承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useElementBounding } from '@vueuse/core';
import BaseNav from '@/components/layout/BaseNav.vue';
import BaseCarousel from '@/components/BaseCarousel.vue';
import HeroButton from '@/components/HeroButton.vue';
import homePageBanner from '@/assets/images/homepage-banner.jpg';
import dot from '@/assets/images/dot.svg';
import image4 from '@/assets/images/homepage-4.jpg';
import image5 from '@/assets/images/homepage-5.jpg';
import { FoodCard, NewsCard, SeeMoreCard, SectionHeading } from '@/components/HomePage';
import type { FoodInfo, NewsInfo } from '@/components/HomePage';
import vSmoothScrollbar from '@/directives/smoothScrollbar';
import { foodContent, newsContent, aboutContent } from '@/config/homepage';
import IconCar from '@/components/icons/IconCar.vue';
import IconTrain from '@/components/icons/IconTrain.vue';
import IconLuxurycar from '@/components/icons/IconLuxurycar.vue';
import map from '@/assets/images/homepage/map.png';
import CurveH from '@/components/background/CurveH.vue';
import CurveV from '@/components/background/CurveV.vue';

const navRef = ref<InstanceType<typeof BaseNav> | null>(null);
const navRect = useElementBounding(navRef);
const newsArr = ref(newsContent<NewsInfo>());
const seeMore = ref([image5]);
const foods = ref<FoodInfo[]>(foodContent<FoodInfo>());
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
  @apply bg-primary-to-b;
  @media (min-width: 768px) {
    @apply bg-primary-to-l;
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

.about-box {
  border-radius: 40px 40px 0px 40px;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  background: linear-gradient(180deg, rgba(20, 15, 10, 0.8) 0%, rgba(190, 156, 124, 0.8) 100%);
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    border-radius: 80px 80px 0px 80px;
  }
}

.hide-scrollbar {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
}
</style>
