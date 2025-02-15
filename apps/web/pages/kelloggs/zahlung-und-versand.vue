<template>
  <article class="kl-article">
    <h1 class="g-40">Zahlung und Versand</h1>

    <p>Es gelten folgende Bedingungen:<br>Die Lieferung erfolgt nur im Inland (Deutschland).</p>

    <h2>Versandkosten</h2>
    <p>Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</p>
    <p>Wir berechnen die Versandkosten pauschal mit <strong>5,99 €</strong> pro Bestellung.</p>
    <p>Ab einem Bestellwert von <strong>100,00 €</strong> liefern wir versandkostenfrei.</p>

    <h2>Lieferfristen</h2>
    <p>
      Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware im Inland (Deutschland)
      innerhalb von <strong>3 - 5 Werktagen</strong> nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Deiner Zahlungsanweisung).
    </p>
    <p>Beachte bitte, dass an Sonn- und Feiertagen keine Zustellung erfolgt.</p>
    <p>
      Hast Du Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir die Ware in einer gemeinsamen Sendung, 
      sofern keine abweichenden Vereinbarungen getroffen wurden. Die Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der längsten Lieferzeit.
    </p>

    <h2>Akzeptierte Zahlungsmöglichkeiten</h2>
    <ul>
      <li>Zahlung per Rechnung</li>
      <li>Kreditkarten (Visa / Mastercard)</li>
      <li>Apple Pay</li>
      <li>PayPal</li>
      <li>Giropay</li>
      <li>SEPA-Lastschrift</li>
    </ul>

    <h2>Weitere Einzelheiten zur Zahlung</h2>
    <p>Der Rechnungsbetrag ist bei Zahlung auf Rechnung innerhalb von <strong>30 Tagen</strong> auszugleichen.</p>
    <p>Bei Fragen findest Du unsere Kontaktdaten im <a href="/legal-disclosure">Impressum</a>.</p>
  </article>
</template>

<script setup>
useHead({
  title: 'Zahlung und Versand',
  meta: [
    {
      name: 'description',
      content:
        'Informationen zu unseren Versandkosten, Lieferfristen und akzeptierten Zahlungsmethoden. Erfahre mehr über unsere Zahlungs- und Versandbedingungen.'
    }
  ]
});
</script>

<style scoped>
h2 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 20px;
}

ul {
  list-style: disc;
  margin-left: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>