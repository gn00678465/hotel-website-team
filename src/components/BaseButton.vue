<template>
	<div
		:class="buttonClass"
  >
    <div class="flex items-center">
			<div 
				class="pr-1 text-subtitle"
				:class="[{'underline underline-offset-1': buttonType === 'text'}]">
				{{ label }}
			</div>
			<template v-if="buttonType !== 'text'">
				<slot></slot>
			</template>
		</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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

const buttonClass = computed(() => {
	switch (props.buttonType) {
		case 'primary':
			return {
        'flex justify-center items-center rounded-lg py-4 px-8 cursor-pointer text-neutral-white bg-primary-100 duration-300 hover:bg-primary-120':true,
        '!bg-neutral-transparent !text-neutral-60 opacity-80 !cursor-default': props.isDisable,
      }

		case 'secondary':
		return {
			'flex justify-center items-center rounded-lg py-4 px-8 cursor-pointer text-primary-100 bg-neutral-white border border-primary-100 duration-300 hover:bg-primary-10':true,
			'!bg-neutral-white !text-neutral-60 opacity-80 !cursor-default': props.isDisable,
		};

		case 'ghost':
		return {
			'flex justify-center items-center py-4 px-8 cursor-pointer text-neutral-white duration-300 hover:text-primary-100':true,
			'!text-neutral-60 opacity-80 !cursor-default': props.isDisable,
		};

		case 'text':
		return {
			'flex justify-center items-center py-4 px-8 cursor-pointer text-primary-100 duration-300 hover:text-primary-120':true,
			'!text-neutral-60 opacity-80 !cursor-default': props.isDisable,
		};
		default:
			return '';
	}
})

</script>

<style lang="scss" scoped>

</style>