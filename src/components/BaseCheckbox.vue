<template>
  <div class="inline-flex items-center">
    <label :for="id">{{ label }}</label>
    <input
      class="text-neutral-white bg-neutral-white duration-300 hover:border-[0.125rem] hover:border-solid hover:border-primary-40 ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-primary-100 checked:bg-primary-100 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px-[1px] checked:after:ml-[0.4rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px-[1px] checked:hover:after:ml-[0.3rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="$emit('update:checked', !props.checked)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch, getCurrentInstance } from 'vue';
const props = defineProps({
	id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
});

</script>

<style lang="scss" scoped>
.solid-shadow {
	&:focus {
		box-shadow: 0px 0px 0px 2px rgba(190, 156, 124, 0.1)
	}
}
</style>