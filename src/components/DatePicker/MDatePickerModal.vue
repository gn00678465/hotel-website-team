<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="onClickMask">
      <div class="modal-container relative flex flex-col overflow-y-auto" @click.stop>
        <header ref="headerRef" class="sticky top-0 z-10 space-y-4 bg-neutral-white px-6 pb-2 pt-4">
          <IconClose />
          <p class="h6 tracking leading-normal">選擇入住日期</p>
          <ul class="grid w-[308px] grid-cols-7 gap-y-1 text-body">
            <li
              v-for="(weekday, idx) of weekdays"
              :key="idx"
              class="px-3 pb-2 pt-2 text-center leading-normal tracking-normal"
            >
              {{ weekday }}
            </li>
          </ul>
        </header>
        <main class="p-6">
          <CalendarPanel key="prevPanel" :showWeekdays="false" :width="308">
            <template v-slot:title="slotProps">
              <p class="mb-4 text-body2 font-bold leading-normal tracking-normal">
                {{ slotProps.formatDate }}
              </p>
            </template>
          </CalendarPanel>
          <CalendarPanel key="nextPanel" :showWeekdays="false" :width="308">
            <template v-slot:title="slotProps">
              <p class="mb-4 text-body2 font-bold leading-normal tracking-normal">
                {{ slotProps.formatDate }}
              </p>
            </template>
          </CalendarPanel>
        </main>
        <footer
          ref="footerRef"
          class="sticky bottom-0 z-10 flex w-full items-center gap-x-4 bg-neutral-white p-3"
        >
          <base-button class="flex-grow" buttonType="ghost" label="">
            <p class="text-neutral-80">清除日期</p>
          </base-button>
          <base-button class="flex-grow" label="">確定日期</base-button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { toRefs, ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import CalendarPanel from './CalendarPanel.vue';
import BaseButton from '../BaseButton.vue';
import IconClose from '@/components/icons/IconClose.vue';
import { useRect } from '@/hooks';

type Props = Partial<{
  value: [number, number] | null;
  show: boolean;
}>;

const props = withDefaults(defineProps<Props>(), {
  value: null,
  show: false,
});
const emits = defineEmits<{
  'update:value': [value: [number, number] | null];
  'update:show': [value: boolean];
}>();
const { value, show } = toRefs(props);

const weekdays = ref(['日', '一', '二', '三', '四', '五', '六']);
const headerRef = ref<null | HTMLElement>(null);
const footerRef = ref<null | HTMLElement>(null);
const headerRect = useRect(headerRef);
const footerRect = useRect(footerRef);
const { height } = useWindowSize();
const mainHeight = computed<string>(() => {
  if (headerRect.value && footerRect.value) {
    return height.value - headerRect.value.height - footerRect.value.height - 36 + 'px';
  }
  return 'auto';
});

function onClickMask(e: Event) {
  e.stopImmediatePropagation();
  emits('update:show', false);
}
</script>

<style scoped lang="scss">
@import url(./style/modal.css);

.modal-container {
  top: 36px;
  left: 0;
  height: calc(100% - 36px);
  @apply fixed w-full rounded-t-[20px] bg-neutral-white;
}
</style>
