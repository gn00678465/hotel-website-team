<template>
  <div class="relative w-full overflow-hidden">
    <TransitionGroup
      name="slide-list"
      class="flex h-full transform-gpu"
      :class="wrapperClass"
      tag="ul"
    >
      <template v-for="(vnode, index) of images" :key="index">
        <li v-show="index === currentIndex" class="h-full w-full flex-shrink-0">
          <component :is="vnode" />
        </li>
      </template>
    </TransitionGroup>
    <slot name="indicator">
      <ul
        class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-x-2"
      >
        <li
          v-for="(_, idx) in images"
          :key="idx"
          class="carousel-indicator cursor-pointer"
          :class="currentIndex === idx ? 'active' : ''"
          @click="onChange(idx)"
        ></li>
      </ul>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref, useSlots, computed, onMounted, watchEffect } from 'vue';

interface Props {
  wrapperClass: string;
  autoplay: boolean;
  loop: boolean;
  interval: number;
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  wrapperClass: '',
  autoplay: true,
  loop: true,
  interval: 5000,
});
const { wrapperClass, autoplay, loop, interval } = toRefs(props);
const slots = useSlots();

const images = computed(() => slots.default?.() ?? []);

const currentIndex = ref(0);
const cancelInterval = ref(0);

function onChange(index: number) {
  currentIndex.value = index;
  cancelAutoplay();
  handleAutoplay();
}

function handleAutoplay(): void {
  cancelInterval.value = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1 + images.value.length) % images.value.length;
  }, interval.value);
}

function cancelAutoplay(): void {
  window.clearInterval(cancelInterval.value);
  cancelInterval.value = 0;
}

onMounted(() => {
  if (autoplay.value) {
    handleAutoplay();
  }
});

watchEffect(() => {
  if (!loop.value && currentIndex.value === images.value.length - 1) {
    cancelAutoplay();
  }
});
</script>

<style scoped>
.carousel-indicator {
  @apply h-1 w-8  rounded-full bg-neutral-white transition-all duration-300;
}

.carousel-indicator:hover {
  @apply bg-primary-100;
}

.carousel-indicator.active {
  width: 60px;
  @apply bg-primary-100;
}

.slide-list-enter-active,
.slide-list-leave-active {
  transition: transform 0.3s ease;
}

.slide-list-enter-from {
  transform: translateX(100%);
}

.slide-list-leave-to {
  transform: translateX(-100%);
}

.slide-list-leave-active {
  position: absolute;
}
</style>
