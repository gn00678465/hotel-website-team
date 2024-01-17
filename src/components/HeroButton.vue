<template>
  <div
    class="group cursor-pointer rounded-lg bg-neutral-white p-5 text-neutral-black transition-all duration-300 hover:bg-primary-100 hover:text-neutral-white desktop:p-10"
  >
    <div class="flex w-full items-center justify-end">
      <div
        class="pr-4 text-body leading-heading tracking-heading desktop:text-h5 desktop:leading-normal desktop:tracking-normal"
      >
        <slot>{{ label }}</slot>
      </div>
      <div
        class="h-[1px] w-20 bg-neutral-black duration-300 group-hover:w-15 group-hover:bg-neutral-white group-active:w-15 desktop:w-[150px] desktop:group-hover:w-30 desktop:group-active:w-30"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonType: {
    type: String,
    default: 'primary',
  },
  isDisable: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'label',
  },
});
</script>

<style lang="scss" scoped></style>
