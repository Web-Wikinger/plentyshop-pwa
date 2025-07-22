<template>
  <div class="mx-auto">
    <LandingPageHeader 
      title="Käsecracker"
      subtitle="Vom Kultprodukt zum Sortiments-Booster"
      description="Cheez-It ist in den USA längst ein Klassiker: Die ikonischen Käse-Snacks auf Weizenbasis sind dort in Millionen Haushalten zu finden – als knuspriger Begleiter für unterwegs, auf der Couch oder im Büro.<br>
                  In den USA jahrzehntelang als Käsecracker bekannt, gehört Cheez-It mittlerweile zu den bekanntesten Marken im Segment gebackener Käse-Snacks. Mit einem Marktanteil von rund 67 % im US-Segment für Convenience-Cracker (Stand: 2023) führt Cheez-It dort die Kategorie an – ein Beleg für die Markenstärke und breite Verbraucherakzeptanz. *<br>
                  Jetzt kommt der knusprig gebackene Snack endlich auch nach Deutschland – und sorgt für frischen Schwung im Snackregal."

    />
    <img class="mt-6" src="/images/cheesit/cheesitlandingpage.png" >

    <LandingPagePresentation imageSrc="/images/cheesit/1.png" 
        Title="Jetzt neu: Cheez-It Snacks für den Handel"
        Description="Mit dem Deutschland-Launch zieht die beliebte US-Snackmarke in deine Regale ein. Cheez-It Snap’d überzeugt mit intensivem Cheddar-Geschmack, knuspriger Textur und sofortiger Verzehrbereitschaft – ideal für alle, die auf der Suche nach einem Impulsprodukt mit Wiedererkennungswert sind.<br>
                    Was in den USA als Käsecracker mit Kultstatus begann, sorgt jetzt als knusprig gebackener Käse-Snack für Aufmerksamkeit – ohne Kühlaufwand, aber mit maximaler Wirkung auf kleiner Fläche." 
        noButton
        />
    <LandingPagePresentation imageLeft :bgColor="'bg-gray-100'" imageSrc="/images/cheesit/2.png" 
        Title="Cheez-It Snap’d – Auffällig im Design, praktisch im Einsatz" 
        Description="Cheez-It ist mehr als nur ein Snack – es ist eine Marke mit Geschichte und Charakter. Das auffällige Packungsdesign, der ikonische US-Look und der intensive Cheddar-Geschmack machen Cheez-It Snap’d zum echten Hingucker im Regal. Und das Beste:<br>
                    ✔ Kein Kühlaufwand<br>
                    ✔ Sofort snackbereit für unterwegs<br>
                    ✔ Ideal für Shops mit hoher Kundenfrequenz<br>
                    ✔ Bekannt aus den USA" 
        noButton
        
        />
    
        
    <LandingPagePresentation imageSrc="/images/cheesit/3.png" 
      Title="Sortiment clever erweitern – jetzt bestellen" 
      Description="Du willst dein Angebot auffrischen, neue Zielgruppen erreichen oder mehr Vielfalt in den Impulsbereich bringen? Dann ist Cheez-It Snap’d eine spannende Ergänzung. Über unseren B2B-Shop kannst du die Käse-Snacks ganz unkompliziert ordern – mit klarem Produktprofil und attraktiver Regalwirkung.<br>
                    Ideal für:<br>
                    ✔ Impulsbereiche mit schneller Drehung<br>
                    ✔ trendaffine Kundschaft<br>
                    ✔ mobile Verkaufsflächen und To-go-Zonen"
      noButton/>


    <img src="/images/cheesit/cheesitlandingpage2.png" >


    <LandingPagePresentation imageLeft :bgColor="'bg-gray-100'" imageSrc="/images/cheesit/4.png" 
      Title="Jetzt Sortiment stärken – mit Cheez-It Snap’d im Online Shop" 
      Description="Ob für den Impulsbereich, das Snackregal oder mobile Verkaufsflächen – Cheez-It Snap’d passt in moderne Sortimente. Der knusprig gebackene Käse-Snack ist unkompliziert in der Handhabung, lange haltbar und sorgt dank auffälligem Design für schnelle Kaufimpulse – auch auf kleiner Fläche.<br>
                  Du willst direkt loslegen? Dann melde dich jetzt für unseren B2B-Newsletter an und erfahre sofort, sobald Cheez-It Snap’d verfügbar ist."
      noButton
      />
    
    <span class="block text-center my-8">*Quelle: <a href="https://www.foodbusinessnews.net/articles/19371-cracker-category-seeks-a-boost">https://www.foodbusinessnews.net/articles/19371-cracker-category-seeks-a-boost</a></span>
  </div>
</template>
<script lang="ts" setup>

const { data: productsCatalog, loading, fetchProducts } = useProducts();
const { isAuthorized } = useCustomer();
import { SfLoaderCircular } from '@storefront-ui/vue';
import { Product } from "@plentymarkets/shop-api";

const pringlesProducts     = ref([] as Product[])
const cerealienProducts    = ref([] as Product[])

async function loadProducts() {
  if(isAuthorized.value)
  {
    const pringlesRes  = await fetchProducts({ categoryUrlPath: 'snacks/pringles', page: 1, itemsPerPage: 4 })
    const cerealienRes = await fetchProducts({ categoryUrlPath: 'fruehstueck/cerealien', page: 1, itemsPerPage: 4 })

    pringlesProducts.value  = pringlesRes.products
    cerealienProducts.value = cerealienRes.products 
  }
}

onMounted(loadProducts)

watch(isAuthorized, (newVal) => {
  if (newVal) {
    loadProducts()
  }
})

const { getRobots, setRobotForStaticPage } = useRobots();


await getRobots();
setRobotForStaticPage('Homepage');

</script>



<style>
.klg-red {
  border-color: #f60b45;
  color: #f60b45;
}

.global-sizes { 
  max-width: 1200px;
  min-height: 355px;
}
</style>