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
  <section
    class="desktop:py-30 desktop:px-78 relative flex flex-col gap-y-10 bg-primary-10 px-3 py-20 desktop:flex-row desktop:gap-x-20 desktop:gap-y-0"
  >
    <div class="text-left text-h3 font-bold tracking-heading text-primary-100 desktop:text-h1">
      <p class="mb-1 leading-heading">最新</p>
      <p class="mb-6 leading-heading desktop:mb-10">消息</p>
      <div class="bg-primary-to-l h-[2px] w-[140px]"></div>
    </div>
    <div class="space-y-10">
      <news-item
        v-for="(news, index) in newsArr"
        :key="index"
        :image="news.image"
        :title="news.title"
        :describe="news.describe"
        class="relative z-10"
      ></news-item>
    </div>
    <img
      :src="dot"
      alt="dot"
      class="desktop:top-25 desktop:right-45 w-25 h-25 absolute right-6 top-10 select-none desktop:h-auto desktop:w-auto"
    />
    <img
      :src="dot"
      alt="dot"
      class="desktop:left-50 w-25 h-25 absolute -bottom-15 left-6 z-10 select-none desktop:-bottom-20 desktop:h-auto desktop:w-auto"
    />
  </section>
  <section class="pb-30 desktop:pt-30 desktop:pb-50 relative bg-neutral-black pt-20">
    <img :src="image4" alt="" class="h-[594px] w-full object-cover desktop:h-[672px]" />
    <div
      class="desktop:top-30 desktop:pl-141 desktop:pr-78 absolute left-0 top-20 w-full pl-10 pr-5 pt-10 desktop:pt-20"
    >
      <div class="about-box p-6 desktop:p-20">
        <div
          class="mb-10 flex items-center text-left text-h3 font-bold text-neutral-white desktop:mb-20 desktop:text-h1"
        >
          <div class="mr-10 flex-shrink-0">
            <p class="mb-1 leading-heading tracking-heading">關於</p>
            <p class="leading-heading tracking-heading">我們</p>
          </div>
          <div class="inline h-[2px] w-full bg-neutral-white desktop:w-[165px]"></div>
        </div>
        <ul class="space-y-4 desktop:space-y-10">
          <li
            class="text-body2 font-normal leading-normal tracking-normal text-neutral-white desktop:text-body desktop:leading-heading"
          >
            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          </li>
          <li
            class="text-body2 font-normal leading-normal tracking-normal text-neutral-white desktop:text-body desktop:leading-heading"
          >
            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          </li>
          <li
            class="text-body2 font-normal leading-normal tracking-normal text-neutral-white desktop:text-body desktop:leading-heading"
          >
            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
          </li>
          <li
            class="text-body2 font-normal leading-normal tracking-normal text-neutral-white desktop:text-body desktop:leading-heading"
          >
            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
          </li>
        </ul>
      </div>
    </div>
  </section>
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
import NewsItem from '@/components/NewsItem.vue';
import dot from '@/assets/images/dot.svg';
import image1 from '@/assets/images/homepage-1.jpg';
import image2 from '@/assets/images/homepage-2.jpg';
import image3 from '@/assets/images/homepage-3.jpg';
import image4 from '@/assets/images/homepage-4.jpg';

const navRef = ref<InstanceType<typeof BaseNav> | null>(null);
const navRect = useElementBounding(navRef);
const newsArr = ref([
  {
    image: image1,
    title: '秋季旅遊，豪華享受方案',
    describe:
      '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
  },
  {
    image: image2,
    title: '輕鬆住房專案',
    describe:
      '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
  },
  {
    image: image3,
    title: '耶誕快樂，住房送禮',
    describe:
      '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
  },
]);

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
  border-bottom: 1px solid var(--Neutral-0, #fff);
  border-left: 1px solid var(--Neutral-0, #fff);
  background: linear-gradient(180deg, rgba(20, 15, 10, 0.8) 0%, rgba(190, 156, 124, 0.8) 100%);
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    border-radius: 80px 80px 0px 80px;
  }
}
</style>
