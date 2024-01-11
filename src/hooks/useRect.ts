import { ref, nextTick } from 'vue';
import type { Ref } from 'vue';

export function useRect<T extends HTMLElement>(domRef: Ref<T | null>) {
  const rect = ref<DOMRect | null>(null);
  nextTick(() => {
    if (domRef.value) {
      rect.value = domRef.value.getBoundingClientRect();
    }
  });

  return rect;
}
