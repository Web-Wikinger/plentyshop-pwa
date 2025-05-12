// plugins/gtag.client.ts
import { defineNuxtPlugin, useRuntimeConfig, useHead, watch } from '#imports'
import axios from 'axios'
import { cartGetters, orderGetters } from '@plentymarkets/shop-api'
import { withQuery }           from 'ufo'

// ─── Global augmentation ────────────────────────────────────────────
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    [key: `ga-disable-${string}`]: boolean
  }
}

export default defineNuxtPlugin(async () => {
  const config    = useRuntimeConfig()
  const CookieName = 'CookieBar.moduleGoogleAnalytics.googleAnalytics'

  // Prevent multiple initializations
  let isGtagSetup = false

  // 1) POST to your endpoint to retrieve the Measurement ID
  let GA_ID: string = ''
  // try {
  //   const response = await axios.get(
  //     `${config.public.apiEndpoint}/rest/getGoogleTag`
  //   )
  //   GA_ID = String(response.data).trim()
  // }
  // catch (err) {
  //   console.warn('[gtag] could not fetch Measurement ID:', err)
  //   return
  // }

  GA_ID="G-FH240FCHMN"

  // Bail out if empty
  if (!GA_ID) {
    console.info('[gtag] no Measurement ID returned, skipping GA init')
    return
  }

  // ─── gtag helpers ──────────────────────────────────────────────────
  function injectScript() {
    if (document.head.querySelector(`script[data-gtag][src*="id=${GA_ID}"]`)) return
    useHead({
      script: [{
        src:   withQuery('https://www.googletagmanager.com/gtag/js', { id: GA_ID }),
        'data-gtag': '',
      }],
    })
  }

  function initGtag() {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', GA_ID, {})
  }

  function enableAnalytics() {
    ;(window as any)[`ga-disable-${GA_ID}`] = false
  }

  function disableAnalytics() {
    ;(window as any)[`ga-disable-${GA_ID}`] = true
  }

  // Sets up gtag only once
  const setupGtag = () => {
    if (isGtagSetup) return
    injectScript()
    initGtag()
    enableAnalytics()
    isGtagSetup = true
  }

  // ─── Consent wiring ───────────────────────────────────────────────
  const { consent } = useCookieConsent(CookieName)

  if (consent.value) {
    setupGtag()
  }
  watch(consent, (granted) => {
    if (granted) {
      setupGtag()
      window.gtag?.('consent', 'update', {
        ad_storage:        'granted',
        analytics_storage: 'granted',
      })
    } else {
      window.gtag?.('consent', 'update', {
        ad_storage:        'denied',
        analytics_storage: 'denied',
      })
      disableAnalytics()
    }
  }, { immediate: true })

  // ─── PlentyShop event hooks ───────────────────────────────────────
  const { on } = usePlentyEvent()

  on('frontend:orderCreated', order => {
    if (!consent.value || !window.gtag || !order.order || !order.totals) return
    const totalVat = order.totals.vats.reduce((sum, v) => sum + v.value, 0)
    window.gtag('event', 'purchase', {
      transaction_id: orderGetters.getId(order),
      value:           order.totals.totalNet,
      currency:        order.totals.currency,
      tax:             totalVat,
      shipping:        order.totals.shippingNet,
      items: order.order.orderItems.map(i => ({
        item_id:    orderGetters.getItemVariationId(i),
        item_name:  orderGetters.getItemName(i),
        quantity:   orderGetters.getItemQty(i),
        affiliation:i.referrerId.toString(),
      })),
    })
  })

  on('frontend:addToCart', data => {
    if (!consent.value || !window.gtag) return
    window.gtag('event', 'add_to_cart', {
      items: [{
        item_id:   cartGetters.getVariationId(data.item),
        item_name: cartGetters.getItemName(data.item),
        quantity:  data.addItemParams.quantity,
      }],
    })
  })

})
