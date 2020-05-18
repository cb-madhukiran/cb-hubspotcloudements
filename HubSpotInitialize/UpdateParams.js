let config = steps.InputParams;
config.input.thirdPartyElement = steps.ChargebeeConfig.response.body.third_party_configuration.config_json.cloudElements.setup.thirdPartyElement;
done(config);