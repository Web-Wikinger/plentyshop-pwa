<template>
  <article class="kl-article">
  <h1 class="g-40">FAQ</h1>
  <div class="border border-neutral-200 rounded-md divide-y text-neutral-900">
    <SfAccordionItem
      v-for="{ id, summary, details } in accordionItems"
      :key="id"
      :model-value="isOpen(id)"
      @update:model-value="toggle(id, $event)"
    >
      <template #summary>
        <div class="flex justify-between p-4 font-medium hover:bg-neutral-100 active:neutral-100">
          <span>{{ summary }}</span>
          <SfIconChevronLeft :class="['text-neutral-500', { 'rotate-90': isOpen(id), '-rotate-90': !isOpen(id) }]" />
        </div>
      </template>
      <p class="p-4">{{ details }}</p>
    </SfAccordionItem>
  </div>
</article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/vue';

const opened = ref<string | null>(null);

const isOpen = (id: string) => id === opened.value;
const toggle = (id: string, open: boolean) => {
  if (open) {
    opened.value = id;
  } else if (isOpen(id)) {
    opened.value = null;
  }
};

const accordionItems = [
        {
          id: "faq-1",
          summary: "Ich habe mein Passwort vergessen, was kann ich tun?",
          details: "Du kannst jederzeit bei Deinem Login ein neues Passwort anfordern. Klicke auf 'Passwort vergessen' und wechsle in dein E-Mail-Konto, wo Du per Klick auf den Link ein neues Passwort vergeben kannst. Zusätzlich kannst Du dein Passwort jederzeit in Deinem Kundenkonto anpassen."
        },
        {
          id: "faq-2",
          summary: "Kann ich auch als Gast bestellen?",
          details: "Nein, Du musst ein Kundenkonto anlegen, um eine Bestellung aufzugeben."
        },
        {
          id: "faq-3",
          summary: "Wie lange kann ich Artikel zurückschicken?",
          details: "Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Du oder ein benannter Dritter, der nicht Beförderer ist, die Waren in Besitz genommen hast."
        },
        {
          id: "faq-4",
          summary: "Ich habe keine Bestellbestätigung erhalten.",
          details: "Bitte prüfe deinen SPAM-Ordner. Sollte dort keine Bestätigung sein, ist deine Bestellung möglicherweise nicht abgeschlossen."
        },
        {
          id: "faq-5",
          summary: "Kann ich meine Bestellung nachträglich ändern?",
          details: "Sobald deine Bestellung an unseren Logistiker übergeben wurde, kannst du sie nicht mehr ändern."
        },
        {
          id: "faq-6",
          summary: "Wie kann ich größere Mengen für Handel und Gastronomie bestellen?",
          details: "Bitte registriere dich in unserem Business-Portal, um als Businesspartner zu profitieren."
        },
        {
          id: "faq-7",
          summary: "Wer betreibt den Shop?",
          details: "Der Onlineshop b2b.kelloggs-shop.de wird im Auftrag der Kellogg Deutschland GmbH durch die Web Wikinger Commerce GmbH betrieben."
        },
        {
          id: "faq-8",
          summary: "Wie hoch sind die Versandkosten?",
          details: "Die Versandkosten betragen 5,99 EUR. Ab einem Bestellwert von 100,00 EUR erhältst du kostenfreien Versand."
        }
      ];
</script>

