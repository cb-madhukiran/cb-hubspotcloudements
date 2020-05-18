
let curTime = Math.round((new Date().getTime()) / 1000);

let expiresIn = Number(steps.GetCBConfigApi.data.third_party_configuration.config_json.cloudElements.thirdParty.expiresIn);


done(expiresIn > curTime);
