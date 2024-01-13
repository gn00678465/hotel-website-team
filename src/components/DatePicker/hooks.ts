import { ref, unref } from 'vue';
import type { Ref } from 'vue';

export function useSelectDates(initValue: [number, number] | null | Ref<[number, number] | null>) {
  const dates = ref<[] | [number] | [number, number] | null>(unref(initValue));

  function onDateSelect(date: number) {
    if (dates.value?.length === 2) {
      return;
    }
    if (dates.value === null) {
      dates.value = [];
    }
    switch (dates.value?.length) {
      case 0: {
        dates.value = [date];
        break;
      }
      case 1: {
        const [d] = dates.value;
        if (d > date) {
          dates.value = [date, d];
        } else {
          dates.value = [d, date];
        }
        break;
      }
    }
  }

  return {
    dates,
    onDateSelect,
  };
}
