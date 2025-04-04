<template>
  <section class="kl-red-bar">
    <div class="kl-red-bar-wrapper">
      <div class="kl-red-bar__item">
        <img src="/images/kelloggs/icn-circled-white.svg" alt="Gratisversand ab 100 €">
        <p class="kl-red-bar__content">Gratisversand ab 100 €</p>
      </div>
      <div class="kl-red-bar__item">
        <img src="/images/kelloggs/icn-circled-white.svg" alt="Schnelle Lieferung">
        <p class="kl-red-bar__content">Schnelle Lieferung</p>
      </div>
      <div class="kl-red-bar__item">
        <img src="/images/kelloggs/icn-circled-white.svg" alt="Kein Mindestbestellwert">
        <p class="kl-red-bar__content">Kein Mindestbestellwert</p>
      </div>
      <div class="kl-red-bar__item">
        <img src="/images/kelloggs/icn-circled-white.svg"
             alt="Flexible Zahlungsmöglichkeiten">
        <p class="kl-red-bar__content">Flexible Zahlungsmöglichkeiten</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.kl-red-bar {
  background-color: #f60b45;
  padding: 30px 0;
}

@media (max-width: 1050px) {
  .kl-red-bar {
    padding: 15px 0;
  }
}

.kl-red-bar-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1275px;
  margin: auto;
  padding: 0 20px;
}

@media (max-width: 1050px) {
  .kl-red-bar-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  .kl-red-bar__item {
    margin-left: 15%;
  }
}

@media (max-width: 600px) {
  .kl-red-bar-wrapper {
    grid-template-columns: 1fr;
  }
  .kl-red-bar__item {
    margin-left: 15%;
  }
}

@media (max-width: 400px) {
  .kl-red-bar__item {
    margin: auto;
  }
}

.kl-red-bar__item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.kl-red-bar__item img {
  width: 30px;
  height: 30px;
}

@media (max-width: 1050px) {
  .kl-red-bar__item img {
    width: 20px;
    height: 20px;
  }
}

.kl-red-bar__content {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

@media (max-width: 1050px) {
  .kl-red-bar__content {
    font-size: 16px;
  }
}
</style>
