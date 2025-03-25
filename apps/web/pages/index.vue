<template>
  <KelloggsHeroSection></KelloggsHeroSection>
  <LanguageSelector />
  <KelloggsRedBar class="mb-12"></KelloggsRedBar>
  <KelloggsOurProducts></KelloggsOurProducts> 
  <KelloggsOurBenefits></KelloggsOurBenefits>
  <LandingPageHomepageSection />
</template>

<script lang="ts" setup>
const { isClicked, clickedBlockIndex, isTablet, blockHasData, tabletEdit, changeBlockPosition } = useBlockManager();

const { t } = useI18n();
const { settingsIsDirty } = useSiteConfiguration();

const { data, getBlocks } = useCategoryTemplate();

const dataIsEmpty = computed(() => data.value.length === 0);

const { isEditingEnabled, disableActions } = useEditor();
const { getRobots, setRobotForStaticPage } = useRobots();

const { setPageMeta } = usePageMeta();

const icon = 'home';
setPageMeta(t('homepage.title'), icon);

await getBlocks('index', 'immutable');

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

getRobots();
setRobotForStaticPage('Homepage');
</script>



