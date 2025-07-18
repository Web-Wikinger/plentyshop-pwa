import { type Address, AddressType, cartGetters, shippingProviderGetters } from '@plentymarkets/shop-api';
import { toTypedSchema } from '@vee-validate/yup';
import { boolean, object, string } from 'yup';

export const useAddressForm = (type: AddressType) => {
  const { create } = useCreateAddress(type);
  const { $i18n } = useNuxtApp();
  const { selectedMethod, getShippingMethods } = useCartShippingMethods();
  const { fetchPaymentMethods } = usePaymentMethods();
  const { data: customerData, getSession } = useCustomer();
  const { data: cartData } = useCart();
  const { send } = useNotification();
  const { restrictedAddresses } = useRestrictedAddress();
  const { getCountryZipCodeRegex } = useAggregatedCountries();

  const state = useState('useAddressForm' + type, () => ({
    isLoading: false,
    add: false,
    open: false,
    hasCompany: false,
    addressToSave: {} as Address,
    addressToEdit: {} as Address,
  }));

  const setInitialState = () => {
    state.value.isLoading = false;
    state.value.add = false;
    state.value.open = false;
    state.value.addressToSave = {} as Address;
    state.value.addressToEdit = {} as Address;
  };

  const save = async () => {
    if (!state.value.addressToSave) return true;
    state.value.isLoading = true;

    const response = await create(state.value.addressToSave as Address);
    state.value.open = false;
    state.value.isLoading = false;
    return response;
  };

  const validationSchema = toTypedSchema(
    object({
      firstName: string().when([], {
        is: () => !state.value.hasCompany,
        then: () => string().required($i18n.t('errorMessages.requiredField')).default(''),
        otherwise: () => string().optional().default(''),
      }),
      lastName: string().when([], {
        is: () => !state.value.hasCompany,
        then: () => string().required($i18n.t('errorMessages.requiredField')).default(''),
        otherwise: () => string().optional().default(''),
      }),
      country: string()
        .required($i18n.t('errorMessages.requiredField'))
        .default(cartGetters.getShippingCountryId(customerData.value?.basket).toString()),
      streetName: string().required($i18n.t('errorMessages.requiredField')).default(''),
      apartment: string().required($i18n.t('errorMessages.requiredField')).default(''),
      city: string().required($i18n.t('errorMessages.requiredField')).default(''),
      state: string().default('').optional(),
      zipCode: string()
        .required($i18n.t('errorMessages.requiredField'))
        .when('country', ([countryId], schema) => {
          const zipCodeRegex = getCountryZipCodeRegex(Number(countryId), type);
          return zipCodeRegex
            ? schema.matches(zipCodeRegex, $i18n.t('PreferredDelivery.packstation.zipcodeInvalid'))
            : schema;
        }),
      primary: boolean().default(false),
      companyName: string().when([], {
        is: () => state.value.hasCompany,
        then: () => string().required($i18n.t('errorMessages.requiredField')).default(''),
        otherwise: () => string().optional().default(''),
      }),
      vatNumber: string().when([], {
        is: () => state.value.hasCompany,
        then: () => string().required($i18n.t('errorMessages.requiredField')).default(''),
        otherwise: () => string().optional().default(''),
      }),
    }),
  );

  const notifyIfShippingChanged = () => {
    if (
      !restrictedAddresses.value &&
      selectedMethod.value &&
      shippingProviderGetters.getShippingProfileId(cartData.value).toString() !==
        shippingProviderGetters.getParcelServicePresetId(selectedMethod.value)
    ) {
      send({ message: $i18n.t('shipping.methodChanged'), type: 'warning' });
    }
  };

  const notifyIfBillingChanged = () => {
    if (cartData.value.methodOfPaymentId !== customerData.value.basket.methodOfPaymentId) {
      cartData.value.methodOfPaymentId = customerData.value.basket.methodOfPaymentId;
      if (!restrictedAddresses.value) send({ message: $i18n.t('billing.methodChanged'), type: 'warning' });
    }
  };

  const refreshAddressDependencies = async () => {
    await Promise.all([getSession(), getShippingMethods(), fetchPaymentMethods()]);
    notifyIfShippingChanged();
    notifyIfBillingChanged();

    if (
      type === AddressType.Shipping &&
      cartData.value.customerInvoiceAddressId === cartData.value.customerShippingAddressId
    ) {
      const { set: setBillingAddress } = useCheckoutAddress(AddressType.Billing);
      const { checkoutAddress: shippingAddress } = useCheckoutAddress(AddressType.Shipping);
      await setBillingAddress(shippingAddress.value, true);
    }
  };

  return {
    setInitialState,
    save,
    validationSchema,
    refreshAddressDependencies,
    ...toRefs(state.value),
  };
};
