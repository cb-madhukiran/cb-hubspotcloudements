let fullSync = steps.ConfigData.configJson.third_party_configuration.config_json.cloudElements.formulas.fullSync;
if (fullSync === undefined || fullSync.contact === undefined || fullSync.deal === undefined || fullSync.metrics === undefined || fullSync.custom === undefined) {

  let formulas = [];
  formulas[0] = {
    url: "/formulas/" + steps.Props.formula.HubSpotCustomFields + "/instances",
    body: {
      active: true,
      configuration: {
      },
      name: steps.InputParams.input.siteName + "-Sync"
    },
    type:"custom"
  };
  formulas[1] = {
    url: "/formulas/" + steps.Props.formula.HubSpotFullSyncContacts + "/instances",
    body: {
      active: true,
      configuration: {
      },
      name: steps.InputParams.input.siteName + "-Sync"
    },
    type:"contact"
  };
  formulas[2] = {
    url: "/formulas/" + steps.Props.formula.HubSpotFullSyncDeals + "/instances",
    body: {
      active: true,
      configuration: {
      },
      name: steps.InputParams.input.siteName + "-Sync"
    },
    type:"deal"
  };
  formulas[3] = {
    url: "/formulas/" + steps.Props.formula.HubSpotFullsyncMetrics + "/instances",
    body: {
      active: true,
      configuration: {
      },
      name: steps.InputParams.input.siteName + "-Sync"
    },
     type:"metrics"
  };
  steps.InputParams.formulas = formulas;
  done(false);
} else {
  let apiKey = steps.InputParams.input.apiKey;
  let siteName = steps.InputParams.input.siteName;
  let siteDomain = steps.InputParams.input.siteDomain;
  let type = steps.InputParams.input.type;
  let autoSync = steps.InputParams.input.autoSync;

  steps.InputParams.batch = {
    url: "/formulas/instances/" + fullSync.contact + "/executions",
    body: {
      "cb-api-key": apiKey,
      "cb-site-name": siteName,
      "type": type,
      "cb-domain": siteDomain,
      "autoSync": autoSync,
      "debugLoggingEnabled": true,
    }
  };
  steps.InputParams.deal = {
    url: "/formulas/instances/" + fullSync.deal + "/executions",
    body: {
      "cb-api-key": apiKey,
      "cb-site-name": siteName,
      "type": type,
      "cb-domain": siteDomain,
      "debugLoggingEnabled": true,
    }
  };
  steps.InputParams.custom = {
    url: "/formulas/instances/" + fullSync.custom + "/executions",
    body: {
      "cb-api-key": apiKey,
      "cb-site-name": siteName,
      "type": type,
      "cb-domain": siteDomain,
      "debugLoggingEnabled": true,
    }
  };
  steps.InputParams.metrics = {
    url: "/formulas/instances/" + fullSync.metrics + "/executions",
    body: {
      "cb-api-key": apiKey,
      "cb-site-name": siteName,
      "type": type,
      "cb-domain": siteDomain,
      "debugLoggingEnabled": true,
    }
  };

  done(true);
}
