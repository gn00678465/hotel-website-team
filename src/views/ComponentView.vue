<template>
  <div>
    <h4 class="mb-2 text-h4">Stepper</h4>
    <div class="mb-5">
      <div class="mb-1 bg-neutral-black p-2 text-center">
        <base-steppers
          class="w-full max-w-[416px]"
          :activeStep="activeStep"
          :steps="['title', 'title', 'title']"
        ></base-steppers>
      </div>
      <button
        type="button"
        class="text-sm text-gray-900 bg-white ring-gray-300 hover:bg-gray-50 inline-flex items-center rounded-md px-3 py-2 font-semibold shadow-sm ring-1 ring-inset"
        @click="activeStep += 1"
      >
        increment</button
      ><button
        type="button"
        class="text-sm text-gray-900 bg-white ring-gray-300 hover:bg-gray-50 inline-flex items-center rounded-md px-3 py-2 font-semibold shadow-sm ring-1 ring-inset"
        @click="activeStep -= 1"
      >
        decrement
      </button>
    </div>
    <button
      type="button"
      class="text-sm text-gray-900 bg-white ring-gray-300 hover:bg-gray-50 inline-flex items-center rounded-md px-3 py-2 font-semibold shadow-sm ring-1 ring-inset duration-300"
      @click="activeStep += 1"
    >
      increment</button
    ><button
      type="button"
      class="text-sm text-gray-900 bg-white ring-gray-300 hover:bg-gray-50 inline-flex items-center rounded-md px-3 py-2 font-semibold shadow-sm ring-1 ring-inset duration-300"
      @click="activeStep -= 1"
    >
      decrement
    </button>
    <h4 class="mb-2 text-h4">SectionTab</h4>
    <div class="mb-5 bg-neutral-black p-2 text-center">
      <section-tab :tabs="tabs" v-model:value="tab">
        <template #oasis>
          <span class="text-neutral-white">oasis</span>
        </template>
        <template #theBeatles>
          <span class="text-neutral-white">the Beatles</span>
        </template>
        <template #jayChou>
          <span class="text-neutral-white">Jay Chou</span>
        </template>
      </section-tab>
    </div>

    <div class="grid grid-cols-3">
      <div class="col-span-2"></div>
      <div class="col-span-1">
        <DatePicker ref="datePickerRef" />
      </div>
    </div>
    <BaseButton
      class="inline-block desktop:hidden"
      buttonType="primary"
      label="datepicker"
      @click="onOpenDatePicker"
    >
    </BaseButton>

    <BaseInput class="my-7 max-w-60" v-model:inputValue="name"></BaseInput>
    <BaseButton class="my-7 max-w-60" buttonType="primary">
      <IconChecked class="h-6 w-6" />
    </BaseButton>
    <HeroButton class="my-7"></HeroButton>
    <BaseCheckbox class="my-7" v-model:checked="isChecked" id="myCheckbox" label="My Checkbox" />
    {{ name }}
    {{ isChecked }}
    <BaseDropdown :options="selectOptions" v-model:selectedOption="selectOption"></BaseDropdown>
    {{ selectOption }}
    <h4 class="mb-2 text-h4">BaseModal</h4>
    <button
      type="button"
      class="text-sm text-gray-900 bg-white ring-gray-300 hover:bg-gray-50 inline-flex items-center rounded-md px-3 py-2 font-semibold shadow-sm ring-1 ring-inset"
      @click="isModalOpen = true"
    >
      打開燈箱
    </button>

    <BaseModal v-model:open="isModalOpen" title="Title" content="content...." />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue';
import { SectionTab, type Tab } from '@/components/SectionTab';
import BaseSteppers from '@/components/Stepper/BaseSteppers.vue';
import BaseModal from '@/components/BaseModal.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import HeroButton from '@/components/HeroButton.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import IconChecked from '@/components/icons/IconChecked.vue';
import { DatePicker } from '@/components/DatePicker';

interface SelectOption {
  label: string;
  value: number;
}
const name = ref<string>('');
const isChecked = ref<boolean>(true);
const selectOption = ref<number>();
const selectOptions = reactive<SelectOption[]>([
  {
    label: 'please select',
    value: 0,
  },
  {
    label: 'a',
    value: 1,
  },
  {
    label: 'b',
    value: 2,
  },
  {
    label: 'c',
    value: 3,
  },
]);

const activeStep = ref(1);
const tabs = ref<Tab[]>([
  { name: 'oasis', tab: 'Oasis' },
  { name: 'theBeatles', tab: 'the Beatles' },
  { name: 'jayChou', tab: 'Jay Chou' },
]);

const tab = ref('oasis');
const isModalOpen = ref(false);

const datePickerRef = ref<InstanceType<typeof DatePicker> | null>(null);

function onOpenDatePicker() {
  nextTick(() => {
    datePickerRef.value?.['onModalShow']();
  });
}
</script>

<style scoped></style>
