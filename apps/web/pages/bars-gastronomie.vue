<template>
  <div class="mx-auto">
    <LandingPageHeader 
      title="Platzierungsvorschlag und Best Practice-Tipps für Bars und die Gastronomie"
      subtitle="Kellanova® Snacks effektiv an Bars und in der Gastronomie präsentieren"
      description="Der Hauptzweck von Snacks für Bars oder Gastronomie ist es, den Gaumen der Gäste zu erfreuen und sie darauf
vorzubereiten, ihre Drinks oder Hauptgerichte zu genießen. Diese Snacks sollen nicht den Hunger stillen, sondern

den Geschmackssinn anregen und mit Markenstrahlkraft die Wertigkeit des Angebots verbessern."
      buttonText="Zum Buffet-Angebot"
      buttonLink="#FRÜHSTÜCKSBUFFET"
    />

    
    <LandingPageMinHeightDiv 
      topTitle="SMALL CANS, DIE IDEALEN DURSTANREGER IN DER 40 G DOSE"
      title="Geschmack, von dem man einfach nicht genug bekommt"
      description="Die weltweit führende und beliebteste Stapelchips- Marke in den 4 angesagtesten Geschmacksrichtungen. Alle lieben PRINGLES®, weil sie großartig schmecken, Spaß machen und das, ohne Fettfinger zu verursachen. Und nicht nur das: Der Verzehr von salzigen Snacks steigert nachweislich den Durst Ihrer Gäste, was zu einem erhöhten Getränkekonsum führt."
      imageSrc="/images/3D Pringles 40g Composing.png" imageLeft 
      class="pt-[150px]"
    />

    <LandingPagePassender 
      class="mt-[50px]"
    />
    
    <LandingPagePresentation imageSrc="/images/composing_pringles.png" 
      SubTitle="DEN DREH RAUS" 
      Title="Der Drehautomat für PRINGLES® bringt Zusatzumsätze" 
      Description="Signalrot oder schwarz, gefüllt mit 49 PRINGLES® 40 g Dosen, ist der Drehautomat für PRINGLES® ein Umsatzbringer ohne zusätzlichen Personalaufwand. Das Handling ist easy: Einfach Sorte aussuchen, Geld einwerfen, drehen und snacken. Der Automat ist vielseitig einsetzbar, als Hingucker auf dem Standfuß, diebstahlsicher an der Wand oder als Miniautomat direkt auf dem Tresen platziert."
      ButtonText="Mehr Infos zum Automaten"
      buttonLink="https://kelloggs-shop.de/pages/pringles-pos"
    />

    <p class="text-[45px] leading-[70px] break-words font-bold text-red-color lg:mx-[250px] text-center">SIE BIETEN EIN FRÜHSTÜCKSBUFFET AN?</p>
    <LandingPageComparison id="FRÜHSTÜCKSBUFFET"
      title="GROßE GESCHMACKSVIELFALT – GUTE LAUNE INKLUSIVE"
      subtitle="Frühstück mit KELLOGG‘S® ist profitabler für Sie"
      description="Das KELLOGG’S® Sortiment umfasst unterschiedlichste knusprige Cereals und Müslis. Mit einer Auswahl davon haben Ihre Gäste eine gute Basis für leckere Bowls, die sie mit Zutaten von Ihrem Buffet ergänzen können und Sie profitieren – bei einer Platzierung im ersten Buffetdrittel – durch einen günstigeren Wareneinsatz als z.B. bei Wurst und Käse*."
      imageText="Beispiel Platzierung auf Ihrem Buffet:"
    />    

    <!--<LandingPagePresentation :bgColor="'bg-gray-100'" imageSrc="/images/composing_breakfastcorner.png" 
      SubTitle="BREAKFAST CORNER – KELLOGG’S® AM FRÜHSTÜCKSBUFFET" 
      Title="Gäste am Morgen glücklich machen" 
      Description="Damit können Gäste jetzt ihre Frühstücksbowl so kreieren, wie sie in den Tag starten möchten: fruchtig-frisch oder herzhaft-anregend, entspannt oder genussvoll. Um es einfacher zu machen, sind alle Zutatenmengen in Löffel- und nicht in Grammangabe angegeben. Die Rezepte basieren auf Zutaten, die auf den meisten Frühstückbuffets vertreten sind.  <br><br>
                Gefertigt ist das Display aus hochwertigen Materialien mit transparenter Optik. Mit solidem Holzsockel für einen sicheren Stand. Kombinierbar mit den bekannten KELLOGG’S® Foodservern. Das Format ist 60 cm Breite und 40 cm Höhe. Unter bestimmten Voraussetzungen ist die Breakfast Corner individualisierbar (z. B. Logo-Einbindung, Bowlideen-Anzahl, Anpassung Corporate Look)."
      ButtonText="Platzierungshilfen für Buffets"
      
    />-->

    <LandingPageMinHeightDiv 
      title="Hygienischer Kippdeckel und visueller Mehrwert"
      top-title="FOODSERVER-KLASSIKER"
      description="Praxisbewährt, ansprechend und formschön präsentiert sich der KELLOGG’S® Foodserver aus hochwertigem Acryl. Für bis zu 750 g Cerealien oder Müsli. Der praktische Kippdeckel sorgt für den hygienesicheren Verschluss nach jeder Portionierung."
      imageSrc="/images/image-01.png" 
    />

    <LandingPageDispenser />

    
    <LandingPagePresentation imageSrc="/images/composing_mini-bar_2.png" imageLeft
      SubTitle="DIE ÜBERRASCHENDE ZUTAT" 
      Title="KELLOGG’S® Cerealien als Hingucker" 
      Description="Sie möchten Ihre Gäste mal überraschen? Dann verwenden Sie als Zutat doch mal Cerealien, wie beispielsweise KELLOGG’S® Trésor oder KELLOGG’s® Crunchy Nut. Zum einen können damit Kuchenteile zubereitet werden, aber auch herzhafte Speisen bekommen mit dem Klassiker KELLOGG’S® Cornflakes einen crunchy Twist. Entdecken Sie noch mehr Rezepte."
      ButtonText="Zu den Rezepten"
      buttonLink="https://kelloggs-shop.de/blogs/rezepte"
    />
    
  </div>
</template>
<script lang="ts" setup>

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