<template>
  <slot />
</template>

<script setup lang="ts">
import Drift from 'drift-zoom';
import './Drift.scss';
import type { DriftProps } from '~/components/Drift/types';

const { index } = defineProps<DriftProps>();

let drift: Drift | null = null;

onMounted(() => {
  // WebWikinger: Commented out because image zoom is not needed

  // let demoTrigger = document.querySelector(`.demo-trigger-${index}`) as HTMLElement;
  // let paneContainer = document.querySelector('.drift-zoom-image') as HTMLElement;

  // new Drift(demoTrigger, {
  //   paneContainer: paneContainer,
  //   containInline: true,
  //   zoomFactor: 2,
  //   hoverBoundingBox: true,
  //   handleTouch: true,
  //   touchDelay: 300,
  //   injectBaseStyles: true,
  // });
});

const destroyDrift = () => {
  if (drift) {
    drift.destroy();
    drift = null;
  }
};

onUnmounted(() => destroyDrift());
</script>
