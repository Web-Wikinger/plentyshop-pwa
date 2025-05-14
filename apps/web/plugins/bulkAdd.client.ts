import { Product, productGetters } from "@plentymarkets/shop-api"

export default defineNuxtPlugin(() => {
  const route  = useRoute()
  const router = useRouter()
  const { data: cart, addToCart, setCartItemQuantity, deleteCartItem } = useCart()
  const { addCoupon, deleteCoupon, loading: couponLoading } = useCoupon()
  const isBlocking = useState('cartBlocking', () => false);

  onNuxtReady(async () => {                // fires after client init :contentReference[oaicite:1]{index=1}
    const queries = route.query
    let added = 0
    const { isAuthorized } = useCustomer();

    if(!isAuthorized.value) return;
  
    // Handle coupon code if present
    const couponCode = typeof queries.coupon === 'string' ? queries.coupon.trim() : ''
    if (couponCode) {
      isBlocking.value = true
      try {
        console.log(couponCode)
        await addCoupon({couponCode})
      } catch (err) {
        console.error('Coupon apply failed', err)
      }
      added++
    }
    // Remove coupon from further processing
    delete queries.coupon

    for (const [pid, rawQty] of Object.entries(queries)) {
      isBlocking.value = true;
      const productId = parseInt(pid, 10)
      const qty       = parseInt(rawQty as string, 10)
    
      if (!isNaN(productId) && qty > 0) {
        const existing = cart.value?.items?.find(item => item.variationId === productId) ?? null;
        const { data: product } = useProduct(productId.toString());
        if (existing) {
          if (qty > 0) {
            // update quantity
            await setCartItemQuantity({
              productId: productId,
              quantity: qty,
              cartItemId: existing.id,
            });
          } else {
            let cartItem = getCartItem(product.value)!;
            await deleteCartItem(cartItem);
          }
        } else {
          // new item
          await addToCart({
            productId: productId,
            quantity: qty,
            basketItemOrderParams: [],
          });
        }
        added++
      }
    }

    if (added > 0) {
      // clear query and redirect home
      router.replace({ path: '/cart', query: {} })
    }
    isBlocking.value = false;
  })
  const getCartItem = (product: Product) => {
    const variationId = Number(productGetters.getVariationId(product));
  
    const cartItem = cart.value?.items?.find((item) => item.variationId === variationId);
  
    return cartItem ?? null;
  }
  
})
