let data = {
  url:"https://api.hubapi.com/crm-pipelines/v1/pipelines/deals",
  hubspotAuth: {
      "Authorization":"Bearer "+steps.GetCBConfigApi.data.third_party_configuration.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
};
done(data);