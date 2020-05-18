let curTime = Math.round((new Date().getTime()) / 1000) -1800;

steps.HFRInputParams.hubspot.accessToken = steps.HFRRefreshToken.response.body.access_token;
steps.HFRInputParams.hubspot.refreshToken = steps.HFRRefreshToken.response.body.refresh_token;
steps.HFRInputParams.hubspot.expiresIn = curTime;

done(steps.HFRInputParams.hubspot);