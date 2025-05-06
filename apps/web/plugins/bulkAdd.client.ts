export default defineNuxtPlugin(() => {
  const route  = useRoute()
  const router = useRouter()
  const { addToCart } = useCart()

  onNuxtReady(async () => {                // fires after client init :contentReference[oaicite:1]{index=1}
    const queries = route.query
    let added = 0
    console.log(queries)
    for (const [pid, rawQty] of Object.entries(queries)) {
      const productId = parseInt(pid, 10)
      const qty       = parseInt(rawQty as string, 10)

      if (!isNaN(productId) && qty > 0) {
        await addToCart({
          productId,
          quantity: qty,
          basketItemOrderParams: []
        })
        added++
      }
    }

    if (added > 0) {
      // clear query and redirect home
      router.replace({ path: '/', query: {} })
    }
  })
})
