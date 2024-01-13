<template>
  <Transition name="slide-fade" appear>
    <div v-if="show" class="modal-mask" @click="onClickMask">
      <div class="modal-container flex flex-col overflow-y-auto" @click.stop>
        <header ref="headerRef" class="sticky top-0 z-0 space-y-4 bg-neutral-white px-6 pb-2 pt-4">
          <IconClose @click="onClose" />
          <p class="tracking text-h6 leading-normal">
            <template v-if="dates?.length && dates.length >= 1">選擇退房日期</template>
            <template v-else>選擇入住日期</template>
          </p>
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
        <main
          v-smooth-scrollbar="overscrollOptions"
          class="m-datepicker-main relative z-10 p-6 shadow-neutral"
          @touchend="onTouchend"
        >
          <CalendarPanel
            key="prevPanel"
            class="mb-12"
            :value="dates"
            :current="topPanelCurrent"
            :showWeekdays="false"
            :width="308"
            @select="onDateSelect"
          >
            <template v-slot:title="slotProps">
              <p class="mb-4 text-body2 font-bold leading-normal tracking-normal">
                {{ slotProps.formatDate }}
              </p>
            </template>
          </CalendarPanel>
          <CalendarPanel
            key="nextPanel"
            :value="dates"
            :current="bottomPanelCurrent"
            :showWeekdays="false"
            :width="308"
            @select="onDateSelect"
          >
            <template v-slot:title="slotProps">
              <p class="mb-4 text-body2 font-bold leading-normal tracking-normal">
                {{ slotProps.formatDate }}
              </p>
            </template>
          </CalendarPanel>
        </main>
        <footer
          ref="footerRef"
          class="sticky bottom-0 z-0 flex w-full items-center gap-x-4 bg-neutral-white p-3"
        >
          <base-button class="flex-grow" buttonType="ghost" label="" @click="onClear">
            <p class="text-neutral-80">清除日期</p>
          </base-button>
          <base-button class="flex-grow" label="" @click="onClick">確定日期</base-button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { toRefs, ref, computed, reactive } from 'vue';
import { useWindowSize, useElementBounding, useThrottleFn } from '@vueuse/core';
import CalendarPanel from './CalendarPanel.vue';
import BaseButton from '../BaseButton.vue';
import { useSelectDates } from './hooks';
import IconClose from '@/components/icons/IconClose.vue';
import { useToggleScrollbar } from '@/hooks';
import vSmoothScrollbar from '@/directives/smoothScrollbar';

type Props = Partial<{
  value: [number, number] | null;
  show: boolean;
}>;

type Position = {
  x: number;
  y: number;
};

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
const topPanelCurrent = ref(new Date());
const bottomPanelCurrent = computed(() => {
  const date = new Date(topPanelCurrent.value);
  return new Date(date.setMonth(date.getMonth() + 1));
});

const positionY = ref(0);

const headerRef = ref<null | HTMLElement>(null);
const footerRef = ref<null | HTMLElement>(null);
const { dates, onDateSelect } = useSelectDates(value);
const headerRect = useElementBounding(headerRef);
const footerRect = useElementBounding(footerRef);
const { height } = useWindowSize();
const mainHeight = computed<string>(() => {
  if (headerRect && footerRect) {
    return height.value - headerRect.height.value - footerRect.height.value - 36 + 'px';
  }
  return 'auto';
});
const overscrollOptions = reactive({
  plugins: {
    overscroll: {
      damping: 0.2,
      maxOverscroll: 50,
      glowColor: '',
      onScroll: useThrottleFn((position: Position) => {
        positionY.value = position.y;
      }, 300),
    },
  },
});

function onTouchend() {
  if (positionY.value !== 0 && positionY.value >= 45) {
    onNextMonth();
  }
  if (positionY.value !== 0 && positionY.value <= -45) {
    onPreMonth();
  }
  positionY.value = 0;
}

function onPreMonth() {
  topPanelCurrent.value = new Date(
    topPanelCurrent.value.setMonth(topPanelCurrent.value.getMonth() - 1),
  );
}

function onNextMonth() {
  topPanelCurrent.value = new Date(
    topPanelCurrent.value.setMonth(topPanelCurrent.value.getMonth() + 1),
  );
}

function onClickMask(e: Event) {
  e.stopImmediatePropagation();
  emits('update:show', false);
}

function onClick() {
  if (dates.value && dates.value.length === 2) {
    emits('update:value', [dates.value[0], dates.value[1]]);
  }
}

function onClear() {
  dates.value = null;
  emits('update:value', dates.value);
}

function onClose() {
  onClear();
  emits('update:show', false);
}

useToggleScrollbar(show, document.documentElement);
</script>

<style scoped lang="scss">
@import url(./style/modal.css);

.modal-container {
  top: 36px;
  left: 0;
  height: calc(100% - 36px);
  @apply fixed w-full rounded-t-[20px] bg-neutral-white;
}

.m-datepicker-main {
  height: v-bind(mainHeight);
  overflow: auto;
  width: 100%;
}
</style>
