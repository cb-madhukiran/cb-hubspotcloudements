let param = {
  url :steps.LoopOverList.entry,
  headers : steps.HubSpotParam.hubspotAuth,
   apiKey : steps.MetricsInputParams.input.apiKey,
   siteName: steps.MetricsInputParams.input.siteName,
        siteDomain: steps.MetricsInputParams.input.siteDomain,
        type: steps.MetricsInputParams.input.type

};

done(param);