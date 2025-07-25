<template>
  <div
    class="mb-3 font-editor"
    :class="['sticky top-0 bg-white h-[52px] shadow-[0px_15px_20px_-15px_#111]', drawerZIndexClass]"
    data-testid="edit-mode-toolbar"
  >
    <div class="relative flex items-center pr-5">
      <UiBrandLogo />
      <div class="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
        <UiLanguageEditor />
        <UiPageSelector />
      </div>
      <div class="ml-auto flex space-x-2">
        <button
          class="self-start text-[#062633] px-2 py-1 rounded-md font-inter font-medium text-sm leading-5 flex items-center md:px-4 md:py-2 md:text-base md:leading-6"
          data-testid="edit-preview-button"
          @click="toggleEdit"
        >
          <template v-if="disableActions">
            <SfIconVisibility class="mr-[5px] md:mr-[10px]" />
            Preview
          </template>
          <template v-else>
            <SfIconBase size="xs" viewBox="0 0 18 18" class="mr-[5px] md:mr-[10px] fill-primary-900 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="editPath" fill="black" />
              </svg>
            </SfIconBase>
            Edit
          </template>
        </button>
        <button
          class="self-start bg-[#062633] text-white px-2 py-1 rounded-md font-inter font-medium text-sm leading-5 flex items-center md:px-4 md:py-2 md:text-base md:leading-6"
          :class="{ 'opacity-40 cursor-not-allowed': !isTouched || settingsLoading }"
          :disabled="!isTouched || settingsLoading"
          data-testid="edit-save-button"
          @click="save"
        >
          <template v-if="loading">
            <SfLoaderCircular class="animate-spin w-4 h-4 text-white mr-[5px] md:mr-[10px]" />
          </template>
          <template v-else>
            <SfIconBase size="xs" class="mr-[5px] md:mr-[10px]">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="savePath" fill="white" />
              </svg>
            </SfIconBase>
          </template>
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfLoaderCircular, SfIconBase, SfIconVisibility } from '@storefront-ui/vue';
import { editPath } from 'assets/icons/paths/edit';
import { savePath } from '~/assets/icons/paths/save';
import { deepEqual } from '~/utils/jsonHelper';
const { isEditing, isEditingEnabled, disableActions } = useEditor();
const { isDrawerOpen } = useDrawerState();

const { data, loading, cleanData } = useCategoryTemplate();
const { closeDrawer, settingsIsDirty, loading: settingsLoading } = useSiteConfiguration();

const { save } = useToolbar();

const isTouched = computed(() => settingsIsDirty.value || isEditingEnabled.value);

const toggleEdit = () => {
  disableActions.value = !disableActions.value;
  closeDrawer();
  if (isEditing.value) {
    isEditing.value = false;
  }
};

const drawerZIndexClass = computed(() => (isDrawerOpen.value ? 'lg:z-20 md:z-10' : 'md:z-20'));

watch(
  () => data.value,
  async () => {
    isEditingEnabled.value = !deepEqual(cleanData.value, data.value);
  },
  { deep: true },
);
</script>
