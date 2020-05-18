 let hresponse = steps.GetHubSpotOwner.response.body;
 done(hresponse !== undefined && hresponse.length > 0 && hresponse[0].portalId !==undefined) ;