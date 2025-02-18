<template>
  <KelloggsHeroSection></KelloggsHeroSection>
  <LanguageSelector />
  <KelloggsRedBar class="mb-12"></KelloggsRedBar>
  <KelloggsOurProducts></KelloggsOurProducts> 
  <KelloggsOurBenefits></KelloggsOurBenefits>
  <LandingPageHomepageSection />
</template>

<script lang="ts" setup>
import { watchDebounced } from '@vueuse/core';

const {
  isClicked,
  clickedBlockIndex,
  isTablet,
  isPreview,
  blockHasData,
  tabletEdit,
  deleteBlock,
  changeBlockPosition,
  isLastBlock,
  togglePlaceholder,
} = useBlockManager();

const { settingsIsDirty, openDrawerWithView, updateNewBlockPosition } = useSiteConfiguration();

const { data, fetchPageTemplate, dataIsEmpty, initialBlocks } = useHomepage();

const { isEditingEnabled, disableActions } = useEditor();
const { getRobots, setRobotForStaticPage } = useRobots();

const openBlockList = (index: number, position: number) => {
  const insertIndex = (position === -1 ? index : index + 1) || 0;
  togglePlaceholder(index, position === -1 ? 'top' : 'bottom');
  updateNewBlockPosition(insertIndex);
  openDrawerWithView('blocksList');
};

await getRobots();
setRobotForStaticPage('Homepage');

onMounted(() => {
  isEditingEnabled.value = false;
  window.addEventListener('beforeunload', handleBeforeUnload);
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
});

const hasUnsavedChanges = () => {
  return !isEditingEnabled.value && !settingsIsDirty.value;
};

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  if (hasUnsavedChanges()) return;
  event.preventDefault();
};

fetchPageTemplate();

watchDebounced(
  () => data.value.blocks,
  (newData) => {
    isEditingEnabled.value = !deepEqual(initialBlocks.value, newData);
  },
  { debounce: 100, deep: true },
);
</script>



