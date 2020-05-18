let chargebeeInstanceId = 0;

if(steps.chargebeeInstanceFound !== undefined) {
  chargebeeInstanceId = steps.chargebeeInstanceFound.id;
}

if(steps.chargebeeInstanceCreated !== undefined) {
  chargebeeInstanceId = steps.chargebeeInstanceCreated.id;
}



let param = steps.InputParams;
param.body.config_json.cloudElements.chargebee =  {
  element: param.input.chargebeeElement,
      instance: chargebeeInstanceId
};
done(param);
