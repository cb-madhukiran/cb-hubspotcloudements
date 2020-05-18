let chargebeeCurrencies = steps.HVCInputParams.chargebeeCurrencies;
let hubspotCurrencies = steps.HVCgetHubspotUserData.data.currency;

console.log(chargebeeCurrencies.includes(hubspotCurrencies));