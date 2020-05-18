let data = {
    hubspot: trigger.args,
};
let curTime = Math.round((new Date().getTime()) / 1000);
curTime = curTime - 1800;

let expiresIn = Number(data.hubspot.expiresIn);
if (expiresIn < curTime) {
    data.refresh = {
        url: "https://api.hubapi.com/oauth/v1/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        query: {
            grant_type: "refresh_token",
            client_id: data.hubspot.clientId,
            client_secret: data.hubspot.clientSecret,
            refresh_token: data.hubspot.refreshToken,
        }
    };
}

done(data);