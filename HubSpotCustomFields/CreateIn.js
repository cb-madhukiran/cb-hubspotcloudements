done({
        url: steps.LoopOverCustomProperties.entry.url,
        headers:steps.HubUrl.headers,
        apiKey: steps.InputParams.input.apiKey,
        body:steps.LoopOverCustomProperties.entry.body,
        siteName: steps.InputParams.input.siteName,
        siteDomain: steps.InputParams.input.siteDomain,
        type: steps.InputParams.input.type,
});