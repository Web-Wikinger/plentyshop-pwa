<template>
  <div class="mx-auto">
    <img src="/images/cheesit/cheesit_landingpage.png" >

    <LandingPagePresentation imageSrc="/images/cheesit/1.png" 
        Title="Snackregal auffrischen? Diese Käsecracker sorgen für Bewegung." 
        Description="<p>Ob an der Kasse, im Kiosk oder im To-go-Regal – überall dort, wo schnelle Entscheidungen gefragt sind, braucht es Snacks mit Zugkraft.</p>
                    <p>Genau hier setzen unsere neuen Käsecracker für Wiederverkäufer an: würzig im Geschmack, aufmerksamkeitsstark im Design und direkt verzehrfertig.</p>
                    <p>Über unseren B2B Shop wirst Du sie unkompliziert bestellen können – ideal, um Dein Sortiment gezielt zu erweitern und neue Kaufanreize auf kleinstem Raum zu schaffen. Perfekt für Verkaufsflächen mit Fokus auf schnelle Drehung.</p>"
        noButton
        />
    <LandingPagePresentation imageLeft :bgColor="'bg-gray-100'" imageSrc="/images/cheesit/2.png" 
        Title="Mehr Schwung im Regal – mit Snacks, die verkaufen" 
        Description="<p>Gerade im Snackgeschäft zählt Schnelligkeit. Wer früh auf neue Produkte wie diese Snacks setzt, sichert sich nicht nur einen Platz im Regal, sondern auch im Kopf der Kundschaft.<br>Denn: Abwechslung belebt das Geschäft – und sorgt am POS für frische Impulse.</p>
                    <p>Wenn Du Dein Käsecracker Sortiment clever ergänzen willst, zeigen wir Dir in unserem Online Shop für Snacks, wie Du mit neuen Produkten im Handel gezielt Impulskäufe steigern kannst. Jetzt ist der richtige Zeitpunkt, den Sortimentsvorsprung zu sichern.</p>" 
        noButton
        
        />
    
        
    <LandingPagePresentation imageSrc="/images/cheesit/3.png" 
      Title="Trend-Snacks mit Profil: Cheez-It & Co." 
      Description="<p>Der Mix aus kräftigem Geschmack, hohem Wiedererkennungswert und unkomplizierter Handhabung macht sie besonders attraktiv für alle, die auf Snackprodukte mit Bewegung im Verkaufsalltag setzen.</p>
                    <p>Ob als Ergänzung im Käse Snacks Sortiment oder als Trendprodukt für frequenzstarke Bereiche: Käsecracker im Großhandel bieten eine starke Lösung für zeitgemäße Verkaufsstrategien.</p>"
      noButton/>


    <img src="/images/cheesit/cheesit_landingpage2.png" >


    <LandingPagePresentation imageLeft :bgColor="'bg-gray-100'" imageSrc="/images/cheesit/4.png" 
      Title="Maximale Wirkung auf kleiner Fläche" 
      Description="<p>Käsecracker überzeugen nicht nur durch Geschmack, sondern auch durch ihre praktische Handhabung im Verkaufsalltag. Sie benötigen keine Kühlung und lassen sich somit flexibel lagern – ideal für Shops mit begrenztem Platzangebot.</p>
                  <p>Ihr in den USA bereits vertrauter, beliebte Marke sorgt für stabile Abverkäufe, ganz ohne zusätzlichen Erklärungsaufwand. Dank ihres auffälligen Designs eignen sie sich perfekt für aufmerksamkeitsstarke Platzierungen an der Kasse oder im To-go-Regal.<br>Und auch wirtschaftlich rechnen sie sich: Attraktive Handelspreise ermöglichen Wiederverkäufern solide Margen bei gleichzeitig geringem Risiko.</p>"
      noButton
      />



    <LandingPagePresentation imageSrc="/images/cheesit/5.png" 
      SubTitle="Pop in der After Hour" Title="Jetzt Sortiment stärken – mit Käsecrackern im Großhandel" 
      Description="<p>Ob für den Impulsbereich, das Snackregal oder mobile Verkaufspunkte – Käsecracker sind eine vielseitige, umsatzstarke Ergänzung. Dank ihrer einfachen Handhabung, zuverlässigen Nachfrage und attraktiven Konditionen im Käsecracker Handel bieten sie genau das, was moderne Verkaufsstellen brauchen.</p>
                    <p>Jetzt direkt im B2B Shop bestellen, das Sortiment gezielt ausbauen. Sichere Dir jetzt den Vorsprung am POS.</p>"
      noButton
      />

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