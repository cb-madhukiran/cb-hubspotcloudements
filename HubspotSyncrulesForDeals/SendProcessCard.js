let excId = steps.GetHubSpotToken.response.body[0].id;
let card = {
  "cards": [
    {
      "card": {
        "type": "PROCESSING",
        "processingText": "Loading..",
        "request": {
          "type": "DOC_READY_GET_CARD",
          "apiEndPoint": {
            "apiUrl": steps.InitParams.getFormulaDetails.getDealRules.url,
            "type": "GET",
            "headers": {
              "Elements-Formula-Instance-Id": info.formulaInstanceId
            },
            "input": {
              "type": steps.ConstructCBApiReq.input.integrationName,
              "tExcutionId":excId
            }
          }
        }
      },
      "id": "check22",
      "showRetry": "false"
    }
  ],
  "proceed": {
    "id": "proceed",
    "display": "Proceed",
    "icon": "ARROW",
    "buttonLook": "FILLED",
    "type": "DIRECT_LINK",
    "request": {
        "type": "ON_CLICK_SEND_INPUT",
        "apiEndPoint": {
            "apiUrl": steps.InitParams.getFormulaDetails.saveDealRules.url,
            "type": "GET",
            "headers": {
                "Elements-Formula-Instance-Id": steps.InitParams.getFormulaDetails.saveDealRules.id
            },
            "input": {
                "type": steps.ConstructCBApiReq.input.integrationName
            }
        }
    }
}
};


done({
  statusCode: 200,
  result: card
});