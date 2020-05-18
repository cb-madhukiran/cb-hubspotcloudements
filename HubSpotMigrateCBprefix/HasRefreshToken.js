if(steps.RefreshToken.accessToken!==undefined){
  done(true);
}else {
   steps.InputParams.errorCode = "Invalid Refresh Token";
  done(false);
}