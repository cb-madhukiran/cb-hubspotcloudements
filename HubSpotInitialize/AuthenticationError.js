let err = {
  "status":"error",
};
err[steps.thirdPartyInstance.thirdPartyElementBody.configuration.account] = 'Authentication Failed';

done({
  statusCode: 400,
  result: err
});