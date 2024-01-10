<template>
  <div
  >
    <div class="relative text-lg w-48">
      <button
        class="flex items-center justify-between min-h-10 px-3 py-2 bg-neutral-white w-full rounded-lg focus:border focus:border-neutral-black"
        :class="isOptionsExpanded ? 'border !border-primary-100' : ''"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <span>{{ localOption }}</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
          :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <ul
          v-show="isOptionsExpanded"
          class="absolute left-0 right-0 mb-4 bg-neutral-white divide-y divide-neutral-40 rounded-lg shadow-lg overflow-hidden"
        >
          <li
            v-for="(option, index) in options"
            :key="index"
            class="px-3 py-2 transition-colors duration-300 hover:bg-primary-60"
            @mousedown.prevent="setOption(option.label); $emit('update:selectedOption', option.value)"
          >
            {{ option.label }}
          </li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { PropType } from 'vue'
const props = defineProps({
	selectedOption: {
    type: Number,
    default: null,
  },
  options: {
    type: Array as PropType<{ label: string; value: number }[]>,
    default() {
      return [];
    },
  },
});
const localOption = ref<string | number>(props.selectedOption);
const isOptionsExpanded = ref(false);

const setOption = (label:string) => {
  localOption.value = label;
  isOptionsExpanded.value = false;
}
</script>

<style>

</style>
