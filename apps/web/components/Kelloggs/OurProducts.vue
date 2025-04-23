<template>
  <section class="kl-our-products !mb-16">
    <div class="kl-section-title-wrapper lg:text-center mb-8 pl-2">
      <p class="g-16 lg:g-18" id="our-products">Unsere Produkte</p>
      <p class="g-40 lg:g-56">Entdecke köstliche Snacks und Frühstücksfreuden</p>
    </div>
    <div class="kl-our-products-wrapper kl-card-slider">
      <div class="kl-slides">
        <div
             id="pringles"
             class="kl-our-products-card"
             tabindex="0"
             role="region"
             aria-labelledby="pringles-title"
             aria-describedby="pringles-description">
          <div class="kl-img-wrapper">
            <img src="/images/kelloggs/img-pringles@2x.png" alt="Pringles">
          </div>
          <p id="pringles-title" class="text-white kl-card-title">Pringles</p>
          <p id="pringles-description" class="text-white kl-card-description">
            Pringles ist das perfekte Produkt für Ihr Unternehmen. Egal ob Kioske, Bars, Gastronomiebetriebe und Hotels! Von Paprika bis Sour Cream & Onion – Pringles trifft garantiert den Geschmack Ihrer Kunden.
          </p>
          <NuxtLink
                    to="/snacks/pringles"
                    class="bg-white rounded-full p-3 mx-4 text-black text-center g-16 mb-4 hover:bg-primary-500 hover:text-white border-2 border-white">
            Alle ansehen
          </NuxtLink>
        </div>

        <div
             id="cereal"
             class="kl-our-products-card"
             tabindex="0"
             role="region"
             aria-labelledby="cereal-title"
             aria-describedby="cereal-description">
          <div class="kl-img-wrapper">
            <img src="/images/kelloggs/img-cerealien@2x.png" alt="Cerealien">
          </div>
          <p id="cereal-title" class="text-white kl-card-title">Cerealien</p>
          <p id="cereal-description" class="text-white kl-card-description">
            Kellogg’s Chocos, Kellogg’s Frosties oder Special K – mit unserem vielfältigen Cerealien-Sortiment steigern Sie Ihren Umsatz! Für Kioske, und Hotels gibt es für jeden Geschmack die perfekte Wahl.
          </p>
          <NuxtLink
                    to="/fruehstueck/cerealien"
                    class="bg-white rounded-full p-3 mx-4 text-black text-center g-16 mb-4 hover:bg-primary-500 hover:text-white border-2 border-white">
            Alle ansehen
          </NuxtLink>
        </div>
        <div
             id="muesli"
             class="kl-our-products-card"
             tabindex="0"
             role="region"
             aria-labelledby="muesli-title"
             aria-describedby="muesli-description">
          <div class="kl-img-wrapper">
            <img src="/images/kelloggs/img-new-muesli@2x.jpg" alt="Müsli">
          </div>
          <p id="muesli-title" class="kl-card-title">Müsli</p>
          <p id="muesli-description" class="kl-card-description">
            Von zarter Schokolade bis hin zu knackigen Nüssen – unser Müsli-Sortiment begeistert mit besten Zutaten und vollem Geschmack. Ideal für Hotellerie, oder den Handel: höchste Qualität, attraktives Design und Geschmack, der begeistert.
          </p>
          <NuxtLink
                    to="/fruehstueck/muesli"
                    class="bg-white rounded-full p-3 mx-4 text-black text-center g-16 mb-4 hover:bg-primary-500 hover:text-white border-2 border-white">
            Alle ansehen
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.kl-our-products {
  padding: 30px 0 0 0;
  max-width: 1160px;
  margin: 0 auto;
}

@media (max-width: 1050px) {
  .kl-our-products {
    padding: 15px 0 0 0;
  }
}

.kl-our-products-wrapper {
  padding: 0 15px;
}

.kl-our-products-wrapper .kl-slides {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 30px;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}

.kl-our-products-wrapper .kl-our-products-card {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.kl-our-products-wrapper .kl-our-products-card .kl-card-title {
  font-size: 32px;
  font-weight: 800;
  margin: 30px 0 8px 0;
  line-height: 1;
}

.kl-our-products-wrapper .kl-our-products-card .kl-card-description {
  font-size: 16px;
  padding-bottom: 20px;
  line-height: 1.4;
  margin-top: 8px;
  font-weight: 500;
  margin-bottom: 0;
}

.kl-our-products-wrapper .kl-our-products-card a.kl-card-button {
  text-align: center;
  text-decoration: none;
  display: block;
  margin-top: auto;
  margin-bottom: 20px;
  outline: none;
  box-shadow: none;
}

.kl-our-products-wrapper .kl-our-products-card#pringles {
  background: #f60b45;
  color: white;
}

.kl-our-products-wrapper .kl-our-products-card#poptarts {
  background: #8000ff;
  color: white;
}

.kl-our-products-wrapper .kl-our-products-card#cereal {
  background: #205cdd;
  color: white;
}

.kl-our-products-wrapper .kl-our-products-card#muesli {
  background: #ffc426;
  color: black;
}

.kl-our-products-wrapper .kl-our-products-card .kl-img-wrapper {
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  max-width: 100%;
}

.kl-our-products-wrapper .kl-our-products-card img {
  aspect-ratio: 1/1;
  object-fit: contain;
  object-position: center center;
  max-width: 100%;
  transition: transform 300ms ease;
}

.kl-our-products-wrapper .kl-our-products-card:hover img {
  transform: scale(1.12);
}

.kl-our-products-wrapper .kl-image-slider-controls {
  display: none;
}

@media only screen and (max-width: 1050px) {
  .kl-our-products-wrapper .kl-our-products-card img {
    min-width: 280px;
  }

  .kl-our-products-wrapper .kl-slides {
    padding-right: 50px;
  }

  .kl-our-products-wrapper {
    padding: 0 0 0 15px;
  }

  .kl-our-products-wrapper .kl-image-slider-controls {
    display: block;
    padding-right: 15px;
  }
}
</style>