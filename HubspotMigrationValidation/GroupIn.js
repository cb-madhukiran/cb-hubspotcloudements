 let data = {
         url: steps.LoopOverGroups.entry.url,
         headers:steps.UpdateToken.headers,
         apiKey: steps.InputParams.apiKey,
         siteName: steps.InputParams.siteName,
         siteDomain: steps.InputParams.siteDomain,
         type: steps.InputParams.type
 };
 done(data);