import { watchEffect } from 'vue';
import type { Ref } from 'vue';
import { getScrollbarWidth } from '@/utils';

export function useToggleScrollbar(trigger: Ref<boolean>, target: HTMLElement): void {
  watchEffect(() => {
    if (trigger.value) {
      const scrollbarWidth = getScrollbarWidth();
      target.style.overflow = 'hidden';
      target.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      target.style.overflow = 'auto';
      target.style.removeProperty('padding-right');
    }
  });
}
