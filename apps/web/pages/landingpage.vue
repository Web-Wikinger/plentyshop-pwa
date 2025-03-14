<template>
  <div class="mx-auto">
    <LandingPageHeader />

    <LandingPagePresentation imageSrc="/images/image-1.jpeg" 
        SubTitle="Genussvoll in den Tag starten" Title="Das Hotelfrühstück mit <br>
                Kellogg’s®️ Produkten aufwerten" 
        Description="Vom Tagesstart sind KELLOGG’S®️ Cerealien gar nicht wegzudenken. Auch auf dem Frühstücksbuffet haben sie ihren festen Platz und können bei der richtigen Präsentation dem ganzen Buffet mehr Wertigkeit geben und die Wirtschaftlichkeit verbessern*. Zudem zählen Kellogg’s®️ Cerealien zu den beliebtesten Frühstücksprodukten überhaupt.**"
        Additional="*Quelle: Bayerische Landesanstalt für Landwirtschaft, Institut für <br>
                Betriebswirtschaft und Agrarstruktur, Dezember 2021<br>
                **Quelle: VuMa 2023" 
        ButtonText="Zum Frühstücksbuffet"/>
    <LandingPagePresentation imageLeft :bgColor="'bg-gray-100'" imageSrc="/images/image-1.jpeg" 
        SubTitle="Mehr Schwung" 
        Title="Im Tagungsraum mit Kellogg’s®️ Produkten für eine gute Basis sorgen" 
        Description="KELLOGG’s®️ Produkte sind nicht nur auf dem Frühstücksbuffet beliebt, sie genießen auch als Basis für konstruktive Diskussionen in der Tagungspause hohe Attraktivität. Mit praktischen Platzierungstools, wie dem Dispenser, können KELLOGG’s®️ Cerealien als Snack für die Pause zwischendurch gereicht werden und passen sich ideal den verschiedensten Einrichtungsstilen an." 
        Additional="" 
        ButtonText="Zu den Präsentationsmöglichkeiten"/>
    
    <LandingPageProductDisplay />
      
    <LandingPageComparison />    

    <LandingPagePresentation :bgColor="'bg-gray-100'" imageSrc="/images/composing_breakfastcorner.png" 
        SubTitle="BREAKFAST CORNER – Kellogg’s®️ am Frühstücksbuffet" Title="Hotelgäste am Morgen glücklich machen" 
        Description="Damit können Gäste jetzt ihre Frühstücksbowl so kreieren, wie sie in den Tag starten möchten: fruchtig-frisch oder herzhaft-anregend, entspannt oder genussvoll. Um es einfacher zu machen, sind alle Zutatenmengen in Löffel- und nicht in Grammangabe angegeben. Die Rezepte basieren auf Zutaten, die auf den meisten Frühstückbuffets vertreten sind. <br>
                  Gefertigt ist das Display aus hochwertigen Materialien mit transparenter Optik. Mit solidem Holzsockel für einen sicheren Stand. Kombinierbar mit den bekannten KELLOGG’S®️ Foodservern. Das Format ist 60 cm Breite und 40 cm Höhe. Unter bestimmten Voraussetzungen ist die Breakfast Corner individualisierbar (z. B. Logo-Einbindung, Bowlideen-Anzahl, Anpassung Corporate Look).
                  "
        ButtonText="Platzierungshilfen für Buffets"/>
    
    <LandingPagePresentation imageLeft imageSrc="/images/Cup des Tages Aufsteller Bild.png" 
      SubTitle="Cup des Tages" Title="Eye Catcher für jedes Buffet" 
      Description="Wenn der Platz für eine Breakfast Corner nicht reicht oder nur eine Bowl-Idee, z. B. für die Meeting-Pause angeboten werden kann, empfiehlt sich der Cup des Tages Aufsteller mit einer tollen Bowl-Idee. Insgesamt stehen 6 alternative Varianten im Set zur Verfügung. "
      ButtonText="Jetzt Set downloaden!"/>
  
    <LandingPageMinHeightDiv imageSrc="/images/image-01.png" />

    <LandingPageDispenser />

    
        
    <LandingPagePresentation header="Platzierungsvorschlag und Best Practice-Hilfen für die Hotellerie" imageSrc="/images/Pringles-Logo_mit-Chips.png" 
      SubTitle="Cup des Tages" Title="Eye Catcher für jedes Buffet" 
      Description="Wenn der Platz für eine Breakfast Corner nicht reicht oder nur eine Bowl-Idee, z. B. für die Meeting-Pause angeboten werden kann, empfiehlt sich der Cup des Tages Aufsteller mit einer tollen Bowl-Idee. Insgesamt stehen 6 alternative Varianten im Set zur Verfügung. "
      noButton/>

    <LandingPageMinHeightDiv imageSrc="/images/3D Pringles 40g Composing.png" imageLeft />
    

    <LandingPageProductDisplay />

    <LandingPagePresentation :bgColor="'bg-gray-100'" imageSrc="/images/composing_pringles-automat.png" 
      SubTitle="Drehautomat für Pringles®️" Title="Die impulsstarke und mobile Snackinsel" 
      Description="Überall wo Gäste freie Zeit genießen oder warten,
                  ist der neue Drehautomat für PRINGLES®️ die beliebte
                  Snackinsel, die jeder gerne anläuft: z. B. in der Lobby, im 
                  Restaurant, im Outdoor-Bereich. Der signalrote
                  Automat lässt sich mit 49 x 40 g PRINGLES®️ Dosen füllen. 
                  Einfach Sorte aussuchen, Geld einwerfen, drehen
                  und snacken. Ideal für attraktive Zusatzumsätze ohne
                  wesentlichen Personal- bzw. Zeitaufwand."
      ButtonText="Jetzt bestellen!"
      />



    <LandingPagePresentation imageLeft imageSrc="/images/composing_mini-bar.png" 
      SubTitle="Pop in der After Hour" Title="PRINGLES®️ 40 g Dosen sind der ideale Snack für die Mini Bar" 
      Description="Der beliebte Snack eignet sich hervorragend für die Mini Bar. Durch ihre starke Markenstrahlkraft suggerieren PRINGLES®️ Gästen besondere Hochwertigkeit und Service. Außerdem sind die Dosen relativ klein, passen in nahezu jede Mini Bar und sind bei mehr Platz sogar ausgezeichnet stapelbar."
      ButtonText="Jetzt bestellen!"
      />
  </div>
</template>
<script lang="ts" setup>
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
const { getRobots, setRobotForStaticPage } = useRobots();

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