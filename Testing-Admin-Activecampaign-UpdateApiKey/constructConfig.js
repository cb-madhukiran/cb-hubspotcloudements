let config=steps.getConfiguration.response.body;

config.configuration.username=steps.InputParams.apiKey;

let input={
  body:config
};

done(input);