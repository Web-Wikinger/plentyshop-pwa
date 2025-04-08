<template>
  <div class="mx-auto">
    <LandingPageHeader 
      title="Platzierungsvorschlag und Best Practice-Tipps für die Hotellerie"
      subtitle="Kellogg's<span class='text-lg align-super'>®</span> Produkte effektiv am Frühstücksbuffet und in Tagungsräumen platzieren"
      description="In der Hotellerie entscheidet oft das kulinarische Angebot über den Erfolg, besonders beim Frühstück und in Tagungsräumen. Hier spielt der Hoteleinkauf eine Schlüsselrolle: Durch die Auswahl qualitativer Produkte können Hotels ihr Frühstücksbuffet und Snack-Angebot in Tagungsräumen aufwerten."
      buttonText="Zum Snack-Angebot"
      buttonLink="/snacks/pringles/"
    />

    <LandingPagePresentation imageSrc="/images/image-1.jpeg" 
        SubTitle="Genussvoll in den Tag starten" Title="Das Hotelfrühstück mit <br>
                Kellogg’s<span class='text-lg align-super'>®</span> Produkten aufwerten" 
        Description="Vom Tagesstart sind KELLOGG’S<span class='text-lg align-super'>®</span> Cerealien gar nicht wegzudenken. Auch auf dem Frühstücksbuffet haben sie ihren festen Platz und können bei der richtigen Präsentation dem ganzen Buffet mehr Wertigkeit geben und die Wirtschaftlichkeit verbessern*. Zudem zählen Kellogg’s<span class='text-lg align-super'>®</span> Cerealien zu den beliebtesten Frühstücksprodukten überhaupt.**"
        Additional="*Quelle: Bayerische Landesanstalt für Landwirtschaft, Institut für <br>
                Betriebswirtschaft und Agrarstruktur, Dezember 2021<br>
                **Quelle: VuMa 2023" 
        ButtonText="Zum Frühstücksbuffet"
        buttonLink="fruehstueck/cerealien/"
        
        />
    <LandingPagePresentation imageLeft :bgColor="'bg-gray-100'" imageSrc="/images/composing_tagung.png" 
        SubTitle="Mehr Schwung" 
        Title="Im Tagungsraum mit Kellogg’s<span class='text-lg align-super'>®</span> Produkten für eine gute Basis sorgen" 
        Description="KELLOGG’s<span class='text-lg align-super'>®</span> Produkte sind nicht nur auf dem Frühstücksbuffet beliebt, sie genießen auch als Basis für konstruktive Diskussionen in der Tagungspause hohe Attraktivität. Mit praktischen Platzierungstools, wie dem Dispenser, können KELLOGG’s<span class='text-lg align-super'>®</span> Cerealien als Snack für die Pause zwischendurch gereicht werden und passen sich ideal den verschiedensten Einrichtungsstilen an." 
        Additional="" 
        ButtonText="Zu den Präsentationsmöglichkeiten"
        buttonLink="#Dispenser"
        
        />
    
    <LandingPageProductDisplay
      v-if="cerealienProducts.products"
      :products="cerealienProducts.products"
    />
      
    <LandingPageComparison 
      title="Je mehr KELLOGG‘s<span class='text-lg align-super'>®</span> gegessen wird, desto weniger Belag"
      subtitle="Große Geschmacksvielfalt - Gute Laune inklusive"
      description="Das Kellogg’s<span class='text-lg align-super'>®</span> Sortiment umfasst unterschiedlichste knusprige Cereals und Müslis. Mit einer Auswahl davon haben Ihre Gäste eine gute Basis für leckere Bowls, die sie mit Zutaten von Ihrem Buffet ergänzen können und Sie profitieren - <strong>bei einer Platzierung im ersten Buffetdrittel </strong>- durch einen günstigeren Wareneinsatz als z.B. bei Wurst und Käse.*"
      imageText="Beispiel Platzierung auf Ihrem Buffet:"
    />    

   <!-- <LandingPagePresentation :bgColor="'bg-gray-100'" imageSrc="/images/composing_breakfastcorner.png" 
        SubTitle="BREAKFAST CORNER – Kellogg’s<span class='text-lg align-super'>®</span> am Frühstücksbuffet" Title="Hotelgäste am Morgen glücklich machen" 
        Description="Damit können Gäste jetzt ihre Frühstücksbowl so kreieren, wie sie in den Tag starten möchten: fruchtig-frisch oder herzhaft-anregend, entspannt oder genussvoll. Um es einfacher zu machen, sind alle Zutatenmengen in Löffel- und nicht in Grammangabe angegeben. Die Rezepte basieren auf Zutaten, die auf den meisten Frühstückbuffets vertreten sind. <br>
                  Gefertigt ist das Display aus hochwertigen Materialien mit transparenter Optik. Mit solidem Holzsockel für einen sicheren Stand. Kombinierbar mit den bekannten KELLOGG’S<span class='text-lg align-super'>®</span> Foodservern. Das Format ist 60 cm Breite und 40 cm Höhe. Unter bestimmten Voraussetzungen ist die Breakfast Corner individualisierbar (z. B. Logo-Einbindung, Bowlideen-Anzahl, Anpassung Corporate Look).
                  "
        ButtonText="Platzierungshilfen für Buffets"/>
    
    <LandingPagePresentation imageLeft imageSrc="/images/Cup des Tages Aufsteller Bild.png" 
      SubTitle="Cup des Tages" Title="Eye Catcher für jedes Buffet" 
      Description="Wenn der Platz für eine Breakfast Corner nicht reicht oder nur eine Bowl-Idee, z. B. für die Meeting-Pause angeboten werden kann, empfiehlt sich der Cup des Tages Aufsteller mit einer tollen Bowl-Idee. Insgesamt stehen 6 alternative Varianten im Set zur Verfügung. "
      ButtonText="Jetzt Set downloaden!"/>-->
  
    <LandingPageMinHeightDiv 
      title="Hygienischer Kippdeckel und visueller Mehrwert"
      top-title="Foodserver-Klassiker"
      description="Praxis bewährt, ansprechend und formschön
präsentiert sich der Kellogg’s<span class='text-lg align-super'>®</span> Foodserver aus hochwertigem Acryl. Für bis zu 750 g Cerealien oder Müsli. Der praktische Kippdeckel sorgt für den hygienesicheren Verschluss nach jeder Portionierung."
      imageSrc="/images/image-01.png" />

    <LandingPageDispenser id="Dispenser" />

    
        
    <LandingPagePresentation header="Platzierungsvorschlag und Best Practice-Hilfen für die Hotellerie" imageSrc="/images/Pringles-Logo_mit-Chips.png" 
      SubTitle="Cup des Tages" Title="Eye Catcher für jedes Buffet" 
      Description="Wenn der Platz für eine Breakfast Corner nicht reicht oder nur eine Bowl-Idee, z. B. für die Meeting-Pause angeboten werden kann, empfiehlt sich der Cup des Tages Aufsteller mit einer tollen Bowl-Idee. Insgesamt stehen 6 alternative Varianten im Set zur Verfügung. "
      noButton/>

    <LandingPageMinHeightDiv 
      topTitle="Small Cans"
      title="Praktisch und aromaversiegelt in der 40 g Dose"
      description="Gönn deinen Gästen und Kunden mit Pringles<span class='text-lg align-super'>®</span> eine Auszeit von der Norm. Ein Snack-Vergnügen, das nicht nur den Gaumen anregt, sondern auch den Geist kitzelt: in der Pause,  zwischendurch, als Meetingfood, an der Bar oder auf dem Zimmer."
      imageSrc="/images/3D Pringles 40g Composing.png" imageLeft />
    

    <LandingPageProductDisplay 
      v-if="pringlesProducts.products"
      :products="pringlesProducts.products"
    />

    <LandingPagePresentation :bgColor="'bg-gray-100'" imageSrc="/images/composing_pringles.png" 
      SubTitle="Drehautomat für Pringles<span class='text-lg align-super'>®</span>" Title="Die impulsstarke und mobile Snackinsel" 
      Description="Überall wo Gäste freie Zeit genießen oder warten,
                  ist der neue Drehautomat für PRINGLES<span class='text-lg align-super'>®</span> die beliebte
                  Snackinsel, die jeder gerne anläuft: z. B. in der Lobby, im 
                  Restaurant, im Outdoor-Bereich. Der signalrote
                  Automat lässt sich mit 49 x 40 g PRINGLES<span class='text-lg align-super'>®</span> Dosen füllen. 
                  Einfach Sorte aussuchen, Geld einwerfen, drehen
                  und snacken. Ideal für attraktive Zusatzumsätze ohne
                  wesentlichen Personal- bzw. Zeitaufwand."
      ButtonText="Jetzt bestellen!"
      buttonLink="https://kelloggs-shop.de/pages/pringles-pos"
      />



    <LandingPagePresentation imageLeft imageSrc="/images/composing_mini-bar.png" 
      SubTitle="Pop in der After Hour" Title="PRINGLES<span class='text-lg align-super'>®</span> 40 g Dosen sind der ideale Snack für die Mini Bar" 
      Description="Der beliebte Snack eignet sich hervorragend für die Mini Bar. Durch ihre starke Markenstrahlkraft suggerieren PRINGLES<span class='text-lg align-super'>®</span> Gästen besondere Hochwertigkeit und Service. Außerdem sind die Dosen relativ klein, passen in nahezu jede Mini Bar und sind bei mehr Platz sogar ausgezeichnet stapelbar."
      ButtonText="Jetzt bestellen!"
      buttonLink="/snacks/pringles/"
      />
  </div>
</template>
<script lang="ts" setup>

const { fetchProducts } = useProducts();

let  pringlesProducts = await fetchProducts({ categoryUrlPath: "snacks/pringles", page: 1, itemsPerPage: 4});
let  cerealienProducts = await fetchProducts({ categoryUrlPath: "fruehstueck/cerealien", page: 1, itemsPerPage: 4});




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