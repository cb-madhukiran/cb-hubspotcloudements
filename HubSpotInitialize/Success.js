done({
  statusCode: 200,
  result: {
    "thirdPartyInstanceId": steps.formulaInformation.thirdParty,
    "chargebeeInstanceId":steps.ChargebeeConfig.response.body.third_party_configuration.config_json.cloudElements.chargebee.instance
  }
});