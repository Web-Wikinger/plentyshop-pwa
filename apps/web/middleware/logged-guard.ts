export default defineNuxtRouteMiddleware((to, from) => {
  const { isGuest, isAuthorized } = useCustomer();
  const localePath = useLocalePath();

  // Client-side only watch for client navs
  if (process.client) {
    watchEffect(() => {
      if (!isGuest.value && isAuthorized.value) {
        navigateTo(localePath(paths.home));
      }
    });
  }

  // Server-side (on page reload)
  if (process.server) {
    if (!isGuest.value && isAuthorized.value) {
      return navigateTo(localePath(paths.home));
    }
  }
});
