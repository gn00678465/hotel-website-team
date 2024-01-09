<template>
  <div class="w-[308px]">
    <div class="mb-2 flex items-center justify-between text-h6 font-bold">
      <IcArrowLeft :size="24" />
      <p><span>2023</span> 年 <span>12</span> 月</p>
      <IcArrowRight :size="24" />
    </div>
    <ul class="grid grid-cols-7 gap-y-1 text-body">
      <li
        v-for="weekday of weekdays"
        :key="weekday"
        class="px-3 pb-4 pt-2 text-center leading-normal tracking-normal"
      >
        {{ weekday }}
      </li>
      <li
        v-for="i in 31"
        :key="i"
        class="px-3 pb-4 pt-2 text-center leading-normal tracking-normal"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IcArrowLeft from '@/assets/icons/IcArrowLeft.vue';
import IcArrowRight from '@/assets/icons/IcArrowRight.vue';

const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
</script>

<style scoped></style>
