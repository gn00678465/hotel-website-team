import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import type { OverscrollOptions } from 'smooth-scrollbar/plugins/overscroll';

Scrollbar.use(OverscrollPlugin);

interface ScrollbarOptions {
  value: {
    plugins?: {
      overscroll: boolean | OverscrollOptions;
    };
  };
}

interface HTMLElementScrollbar extends HTMLElement {
  $scrollbar?: Scrollbar;
}

const vSmoothScrollbar = {
  mounted: (el: HTMLElementScrollbar, binding: ScrollbarOptions) => {
    if (!el.$scrollbar) {
      el.$scrollbar = Scrollbar.init(el, binding.value);
    }
  },
  beforeUnmount(el: HTMLElementScrollbar) {
    if (el.$scrollbar) {
      Scrollbar.destroy(el);
      el.$scrollbar = undefined;
    }
  },
};

export default vSmoothScrollbar;
