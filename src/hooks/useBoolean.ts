import { ref } from 'vue';

export function useBoolean(init: boolean = false) {
  const bool = ref(init);

  function toggle() {
    bool.value = !bool.value;
  }

  function setBool(value: boolean) {
    bool.value = value;
  }

  function setTrue() {
    bool.value = true;
  }

  function setFalse() {
    bool.value = false;
  }

  return {
    bool,
    toggle,
    setBool,
    setTrue,
    setFalse,
  };
}

export type UseBooleanReturn = ReturnType<typeof useBoolean>;
