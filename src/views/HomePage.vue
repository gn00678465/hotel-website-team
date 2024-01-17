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
        <p class="mb-2 text-h4 leading-heading tracking-[2px] desktop:text-h2">享樂酒店</p>
        <p class="mb-5 text-body leading-heading tracking-[1.2px] desktop:mb-10 desktop:text-h5">
          Enjoyment Luxury Hotel
        </p>
        <div class="divider h-[83px] w-[2px] bg-primary-120 desktop:h-[2px] desktop:w-full"></div>
      </div>
      <div class="relative py-15 pr-5 desktop:ml-50 desktop:py-24 desktop:pr-50">
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
    class="relative flex flex-col gap-y-10 bg-primary-10 px-3 py-20 desktop:flex-row desktop:gap-x-20 desktop:gap-y-0 desktop:px-78 desktop:py-30"
  >
    <div class="text-left text-h3 font-bold tracking-heading text-primary-100 desktop:text-h1">
      <p class="mb-1 leading-heading">最新</p>
      <p class="mb-6 leading-heading desktop:mb-10">消息</p>
      <div class="h-[2px] w-[140px] bg-primary-to-l"></div>
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
  <section class="relative">
    <see-more-item :images="seeMore"></see-more-item>
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
      class="w-full overflow-auto whitespace-nowrap"
      v-smooth-scrollbar="{ plugins: { overscroll: false } }"
    >
      <ul class="hide-scrollbar space-x-6 pr-3">
        <li
          v-for="(food, idx) of foods"
          :key="idx"
          class="min-x-[300px] inline-block w-full max-w-[416px]"
        >
          <food-card v-bind="food"></food-card>
        </li>
      </ul>
    </div>
  </section>
  <section>Section1</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useElementBounding } from '@vueuse/core';
import BaseNav from '@/components/layout/BaseNav.vue';
import BaseCarousel from '@/components/BaseCarousel.vue';
import HeroButton from '@/components/HeroButton.vue';
import homePageBanner from '@/assets/images/homepage-banner.jpg';
import NewsItem from '@/components/HomePage/NewsItem.vue';
import dot from '@/assets/images/dot.svg';
import SectionHeading from '@/components/HomePage/SectionHeading.vue';
import image1 from '@/assets/images/homepage-1.jpg';
import image2 from '@/assets/images/homepage-2.jpg';
import image3 from '@/assets/images/homepage-3.jpg';
import image4 from '@/assets/images/homepage-4.jpg';
import image5 from '@/assets/images/homepage-5.jpg';
import CurveH from '@/components/background/CurveH.vue';
import SeeMoreItem from '@/components/HomePage/SeeMoreItem.vue';
import FoodCard, { type FoodInfo } from '@/components/HomePage/FoodCard.vue';
import vSmoothScrollbar from '@/directives/smoothScrollbar';

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

const seeMore = ref([image5]);

const foods = ref<FoodInfo[]>([
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    image: image5,
  },
]);
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

.hide-scrollbar {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>
