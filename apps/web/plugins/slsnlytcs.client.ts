
// plugins/slsnlytcs.client.ts
import { defineNuxtPlugin, watch } from '#imports'

export default defineNuxtPlugin(() => {
  if (process.server) return

  const SCRIPT_ID = 'slsnlytcs-script'
  const STM_ID = 'y4l9B6a6n7w4'
  const COOKIE_NAME = 'CookieBar.moduleSlsnlytcs.salesviewerAnalytics'

  const { consent } = useCookieConsent(COOKIE_NAME)

  const injectScript = () => {
    if (document.getElementById(SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.defer = true
    script.innerHTML = `
      (function(w,d,s,l,i){
        var g=w[l] ? '&s='+w[l]:'', f=d.getElementsByTagName(s)[0], j=d.createElement(s);
        j.async=true;
        j.src='https://slsnlytcs.com/stm.js?id='+i+g;
        j.referrerPolicy='no-referrer-when-downgrade';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','name','${STM_ID}');
    `
    document.head.appendChild(script)
  }


  if (consent.value) {

    injectScript()
  }

  watch(consent, (granted) => {
    if (granted) {
      injectScript()
    }
  }, { immediate: true })
})


