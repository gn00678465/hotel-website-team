import { ref, onMounted, isRef } from 'vue';
import type { Ref } from 'vue';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import type { OverscrollOptions } from 'smooth-scrollbar/plugins/overscroll';

Scrollbar.use(OverscrollPlugin);

interface UseSmoothScrollbarOptions {
  plugins: {
    overscroll: boolean | OverscrollOptions;
  };
}

export function useSmoothScrollbar(
  dom: HTMLElement | null | Ref<HTMLElement | null>,
  options: Partial<UseSmoothScrollbarOptions> = {},
) {
  const scrollbarRef: Ref<Scrollbar | null> = ref(null);

  onMounted(() => {
    console.log(dom);
    if (isRef(dom) && dom.value) {
      scrollbarRef.value = Scrollbar.init(dom.value, options);
    }
    if (dom && !isRef(dom)) {
      scrollbarRef.value = Scrollbar.init(dom, options);
    }
  });

  return scrollbarRef;
}
