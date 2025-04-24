<template>
  <KelloggsHeroSection></KelloggsHeroSection>
  <LanguageSelector />
  <KelloggsRedBar class="mb-12"></KelloggsRedBar>
  <KelloggsOurProducts></KelloggsOurProducts> 
  <KelloggsOurBenefits></KelloggsOurBenefits>
  <LandingPageHomepageSection />
</template>

<script lang="ts" setup>
const { t } = useI18n();
const { setPageMeta } = usePageMeta();
const icon = 'home';
setPageMeta(t('homepage.title'), icon);
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Welcome to Kellogg\'s Shop' }
  ]
})


const { getRobots, setRobotForStaticPage } = useRobots();
getRobots();
setRobotForStaticPage('Homepage');
</script>



