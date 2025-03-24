<template>
   <!-- <EmptyBlock v-if="dataIsEmpty" @add-new-block="openBlockList" />
  <Editor
      v-if="isEditing && currentBlockIndex !== null"
      :index="currentBlockIndex"
      :block="currentBlock"
      @update="updateBlock"
    />
  <template v-for="(block, index) in data.blocks" :key="index">
        <PageBlock
          :index="index"
          :block="block"
          :is-preview="isPreview"
          :disable-actions="disableActions"
          :is-clicked="isClicked"
          :clicked-block-index="clickedBlockIndex"
          :is-tablet="isTablet"
          :block-has-data="blockHasData"
          :get-component="getComponent"
          :tablet-edit="tabletEdit"
          :add-new-block="addNewBlock"
          :handle-edit="handleEdit"
          :delete-block="deleteBlock"
          class="mx-8 md:mx-24 first:mx-0 !mb-0"
          :changeBlockPosition="changeBlockPosition"
          :isLastBlock="isLastBlock"
        />
    </template>-->
  <KelloggsHeroSection></KelloggsHeroSection>
  <LanguageSelector />
  <KelloggsRedBar class="mb-12"></KelloggsRedBar>
  <KelloggsOurProducts></KelloggsOurProducts> 
  <KelloggsOurBenefits></KelloggsOurBenefits>
</template>
<script lang="ts" setup>
/*import homepageTemplateDataEn from '../composables/useHomepage/homepageTemplateDataEn.json';
import homepageTemplateDataDe from '../composables/useHomepage/homepageTemplateDataDe.json';
const { $i18n } = useNuxtApp();
const {
  currentBlock,
  currentBlockIndex,
  isClicked,
  clickedBlockIndex,
  isTablet,
  isPreview,
  blockHasData,
  tabletEdit,
  handleEdit,
  deleteBlock,
  updateBlock,
  changeBlockPosition,
  isLastBlock,
  togglePlaceholder,
} = useBlockManager();

const runtimeConfig = useRuntimeConfig();
const isHero = ref(runtimeConfig.public.isHero);
const { settingsIsDirty, openDrawerWithView, updateNewBlockPosition } = useSiteConfiguration();

const { data, fetchPageTemplate, dataIsEmpty } = useHomepage();

const { isEditing, isEditingEnabled, disableActions } = useEditor();


const defaultAddBlock = (lang: string) => {
  return lang === 'en' ? homepageTemplateDataEn.blocks[1] : homepageTemplateDataDe.blocks[1];
};

const addNewBlock = (index: number, position: number) => {
  const insertIndex = position === -1 ? index : index + 1;
  const updatedBlocks = [...data.value.blocks];

  updatedBlocks.splice(insertIndex, 0, defaultAddBlock($i18n.locale.value));

  data.value.blocks = updatedBlocks;
};

const openBlockList = (index: number, position: number) => {
  const insertIndex = position === -1 ? index : index + 1;
  togglePlaceholder(index, position === -1 ? 'top' : 'bottom');
  updateNewBlockPosition(insertIndex);
  openDrawerWithView('blocks');
};

const getComponent = (name: string) => {
  if (name === 'NewsletterSubscribe') return resolveComponent('NewsletterSubscribe');
  if (name === 'UiTextCard') return resolveComponent('UiTextCard');
  if (name === 'UiImageText') return resolveComponent('UiImageText');
  if (name === 'ProductRecommendedProducts') return resolveComponent('ProductRecommendedProducts');
  if (name === 'UiCarousel') {
    return isHero.value ? resolveComponent('UiHeroCarousel') : resolveComponent('UiBlazeCarousel');
  }
};





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


*/

const { getRobots, setRobotForStaticPage } = useRobots();

//await getRobots();
//setRobotForStaticPage('Homepage');
</script>



