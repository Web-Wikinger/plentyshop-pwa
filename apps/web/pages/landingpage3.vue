<template>
  <div class="mx-auto">
    <LandingPageHeader 
      title="Platzierungsvorschlag und Best Practice-Tipps für Getränkemärkte und Kiosks"
      subtitle="PRINGLES® sind die perfekte Ergänzung für Ihr Kerngeschäft"
      description="Was passt besser zusammen als ein kühles Getränk und ein salziger Snack? PRINGLES® sind starker Umsatztreiber für Kiosk- und Getränkemarktbesitzer. Snack-Käufe sind oft impulsiv – besonders als Belohnung am Abend. Sie sind eng mit dem Konsum von kalten Getränken wie Bier und Softdrinks verknüpft, was sie ideal für Cross-Selling, also den gemeinsamen Verkauf mit Ihrem Kerngeschäft, macht. Strategisch platziert, steigern PRINGLES® spürbar den Umsatz.<br><br><br>*Quelle: Bayerische Landesanstalt für Landwirtschaft, Institut für Betriebswirtschaft und Agrarstruktur, Dezember 2021	"
      buttonText=""
    />

    <LandingPageMinHeightDiv 
      topTitle="Für den großen und kleinen Snack-Moment"
      title="PRINGLES® sind in verschiedenen Größen verfügbar"
      description="PRINGLES® sind in zwei verschiedenen Gebinden verfügbar: In der praktischen 40 g-Dose als To-go-Snack und der klassischen 165 g-Dose zum Teilen. Die 40 g Dose gibt es in den schnelldrehenden Sorten Original, Sour Cream & Onion, Paprika sowie Hot & Spicy. Die klassischen 165 g-Dosen sind derweil in über 10 Flavours bestellbar und überzeugen Ihre Kunden mit immer wieder neuen Limited Editions."
      imageSrc="/images/pringles-lp3.png"
      btnText="Zum PRINGLES® Sortiment"
      imageLeft 
    />
    

    <LandingPageInfoBlock 
      topTitle="Die ideale Platzierung"
      title="Maximale Sichtbarkeit für mehr Impulskäufe"
      description="Platzieren Sie PRINGLES® dort, wo Kaufentscheidungen spontan fallen: in der Kassenzone. Gerade im Wartebereich, der sogenannten „Quengelzone“, sorgen die weltweit führenden und beliebtesten Stapelchips für maximale Aufmerksamkeit und verführen Kunden zum Zugreifen."
      imageSrc="/images/Quengelzone-Grafik_2.png"
      imageTitle="Beispiel Platzierung Kassenzone"
      class="my-[143px] " 
    />


    <LandingPagePresentation imageSrc="/images/Pringles List.png" :bgColor="'bg-gray-100'"
        SubTitle="Blickfänge schaffen" Title="PRINGLES® Displays als Verkaufsbooster" 
        Description="Nutzen Sie aufmerksamkeitsstarke Displays, um PRINGLES® optimal zu präsentieren. Diese sind sowohl für die 165 g-Dosen als auch die 40 g-Dosen verfügbar. In engen Räumlichkeiten passt beispielsweise die kompakte Banane für die 40 g-Dosen perfekt auf den Kassentresen, während das stabile Papp-Regal bei ausreichend Platz die 165 g-Dosen ideal in Szene setzt. Schreiben Sie uns bei Interesse an Display-Möglichkeiten!"
        ButtonText="Mehr Infos"/>

    <div class="py-[70px]">
      <LandingPageShopBanner class="mx-auto w-[1200px]"/>
    </div>

    <LandingPagePresentation imageLeft imageSrc="/images/Pringles_Wobbler.png" 
      SubTitle="PRINGLES® Regalstopper und Wobbler" Title="Macht auch im Regal eine gute Figur" 
      Description="Auch in regulären Kopfregalen sorgt PRINGLES® für Aufmerksamkeit: Die attraktiven 40 g-Dosen sind platzsparend stapelbar und sortenübergreifend designgetreu. Zusätzlich können Sie verkaufsfördernde Werbemittel bei uns anfragen, wie beispielsweise einen Regalstopper oder Wobbler. "
      noButton/>
  

    <LandingPagePresentation :bgColor="'bg-gray-100'" imageSrc="/images/automat_halterung_theken_automat.png" 
        SubTitle="Den Dreh raus" Title="Der Drehautomat für Pringles® bringt Zusatzumsätze" 
        Description="Signalrot oder schwarz, gefüllt mit 49 Pringles® 40 g Dosen, ist der Drehautomat für Pringles® ein Umsatzbringer ohne zusätzlichen Personalaufwand. Das Handling ist easy: Einfach Sorte aussuchen, Geld einwerfen, drehen und snacken. Der Automat ist vielseitig einsetzbar, als Hingucker auf dem Standfuß, diebstahlsicher an der Wand oder als Miniautomat direkt auf dem Tresen platziert."
        ButtonText="Mehr Infos zum Automaten"
    />
    
    <LandingPageInfoBlock 
      topTitle="Mehr als Snacks & Getränke"
      title="Sortiment optimal ergänzen: Frühstücksklassiker, die jeder kennt"
      description="Ob Büdchen, Trinkhalle, Späti oder Kiosk – Sie sind aus der Nahversorgung nicht mehr wegzudenken.
          Längst bieten sie weit mehr als nur Snacks und Getränke für unterwegs, sondern decken zunehmend
          auch den täglichen Bedarf. Dazu gehört natürlich ein passendes Frühstücksangebot. Wie wäre es mit
          den bewährten Klassikern, den KELLOGG’S® Cerealien? Nutzen Sie die internationale Strahlkraft der Marke
          – mit langen MHDs, geringen Abnahmemengen und attraktiven Sorten."
      imageSrc="/images/icon_cerealien.svg"
      class="mt-[143px]" 
    />


    <LandingPageFoodPairing
      class="mt-[50px]"
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

const { fetchProducts } = useProducts();

let  pringlesProducts = await fetchProducts({ categoryUrlPath: "snacks/pringles", page: 1, itemsPerPage: 4});
let  cerealienProducts = await fetchProducts({ categoryUrlPath: "fruehstueck/cerealien", page: 1, itemsPerPage: 4});



const { data, fetchPageTemplate, dataIsEmpty } = useHomepage();

const { isEditing, isEditingEnabled, disableActions } = useEditor();
const { getRobots, setRobotForStaticPage } = useRobots();

const openBlockList = (index: number, position: number) => {
  const insertIndex = position === -1 ? index : index + 1;
  togglePlaceholder(index, position === -1 ? 'top' : 'bottom');
  updateNewBlockPosition(insertIndex);
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