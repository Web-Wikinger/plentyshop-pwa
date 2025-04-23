export default defineNuxtRouteMiddleware((to, from) => {
  const { isGuest, isAuthorized } = useCustomer();
  const localePath = useLocalePath();
  const router = useRouter();

  const goBackOrHome = () => {
    if (window.history.length > 1) {
      router.go(-1); // uses browser history
    } else {
      router.push(localePath(paths.home));
    }
  };

  // Client-side navigation
  if (process.client) {
    watchEffect(() => {
      if (!isGuest.value && isAuthorized.value) {
        goBackOrHome();
      }
    });
  }

  // Server-side navigation (e.g. on reload)
  if (process.server) {
    if (!isGuest.value && isAuthorized.value) {
      return navigateTo(localePath(paths.home));
    }
  }
});
