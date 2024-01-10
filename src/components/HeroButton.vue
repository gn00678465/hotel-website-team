<template>
	<div
		class="group flex justify-center items-center rounded-lg p-10 cursor-pointer text-neutral-black bg-neutral-white duration-300 hover:bg-primary-100 hover:text-neutral-white hover:justify-end"
  >
    <div class="flex w-full">
			<div class="flex-1 w-3/5"></div>
			<div class="flex items-center w-2/5 duration-300 group-hover:justify-end">
				<div class="pr-4 text-h5">
					{{ label }}
				</div>
				<div class="h-[1px] w-full bg-neutral-black duration-300 group-hover:bg-neutral-white group-hover:w-3/5"></div>
			</div>
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

<style lang="scss" scoped>

</style>