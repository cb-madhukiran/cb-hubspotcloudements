let SubCreatedOption = steps.dealOptionsInitParams.ConstructCBApiReq.input.SubCreatedOption;
let stage_subCreated = steps.dealOptionsInitParams.ConstructCBApiReq.input.stage_subCreated;
let allowCreateDealInTrial = steps.dealOptionsInitParams.ConstructCBApiReq.input.allowCreateDealInTrial;
let stage_subInTrial = steps.dealOptionsInitParams.ConstructCBApiReq.input.stage_subInTrial;
let allowNoOpenDeal = steps.dealOptionsInitParams.ConstructCBApiReq.input.allowNoOpenDeal;
let noOpenDeal = steps.dealOptionsInitParams.ConstructCBApiReq.input.noOpenDeal;
let from = "";
if (steps.dealOptionsInitParams.ConstructCBApiReq.input.from !== undefined)
{
  from = steps.dealOptionsInitParams.ConstructCBApiReq.input.from;
}
let pipeLine = "default";
if(steps.dealOptionsInitParams.ConstructCBApiReq.input.pipeLine !== undefined) {
  pipeLine = steps.dealOptionsInitParams.ConstructCBApiReq.input.pipeLine;
}
let stages = steps.Stages.stage[pipeLine];
let card = {
  "cards": [
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
        "apiUrl": steps.dealOptionsInitParams.getFormulaDetails.saveDealRules.url,
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.dealOptionsInitParams.getFormulaDetails.saveDealRules.id
        },
        "input": {
          "type": steps.dealOptionsInitParams.ConstructCBApiReq.input.integrationName
        }
      }
    }
  }
};

let stagesList = [];

for (var key in stages) {
  if (stages.hasOwnProperty(key)) {
    var val = stages[key];
    let obj = {"disp":val,
    "value":key};
    stagesList.push(obj);
    
  }
}

let mainCard = {
  "card": {
    "type": "DYNAMIC_INPUT",
    "params": [
      {
        "dispName": "When a subscription is <b>created</b> in Chargebee",
        "req": "true",
        "type": "DROPDOWN_DYNAMIC",
        "id": "SubCreatedOption",
        "isDynamic": "true",
        "request": {
          "type": "ON_CHANGE_FETCH_INPUT",
          "apiEndPoint": {
            "apiUrl": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.url,
            "type": "GET",
            "headers": {
              "Elements-Formula-Instance-Id": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.id
            },
            "input": {
              "type": steps.dealOptionsInitParams.ConstructCBApiReq.input.integrationName
            }
          }
        },
        "dropDownItemsList": [
          {
            "value": "Create_A_Deal",
            "disp": "Create a deal"
          },
          {
            "value": "UpdateExistingDeal",
            "disp": "Update existing deal",
            "helptext": "The last Created 'Open deal' will be updated in HubSpot. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn More</a>"
          },
          {
            "value": "DoNothing",
            "disp": "Do Nothing",
            "helptext": "No new deal will be created in HubSpot."
          }
        ],
        "defaultVal": SubCreatedOption


      }
    ]
  },
  "isCardDone": true,
  "id": "testdynamic"
};

if (SubCreatedOption === 'Create_A_Deal') {
   mainCard.card.params.push({
     "dispName": "Which Hubspot pipeline would you like to create this deal in?",
    "req": "true",
    "type": "DROPDOWN_DYNAMIC",
    "id": "pipeLine",
    "isDynamic": "true",
  "dropDownItemsList": steps.Stages.pipeline,
  "request": {
          "type": "ON_CHANGE_FETCH_INPUT",
          "apiEndPoint": {
            "apiUrl": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.url,
            "type": "GET",
            "headers": {
              "Elements-Formula-Instance-Id": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.id
            },
            "input": {
              "type": steps.dealOptionsInitParams.ConstructCBApiReq.input.integrationName
            }
          }
        },
    "defaultVal": pipeLine

  });
  
  mainCard.card.params.push({
    "dispName": "Choose the deal stage in HubSpot you'd like to create this deal in",
    "req": "true",
    "type": "DROPDOWN_DYNAMIC",
    "id": "stage_subCreated",
    "allowedValues": stages,
    "dropDownItemsList": stagesList,
    "defaultVal": stage_subCreated

  });

  mainCard.card.params.push({
    "dispName": "Create new deals in Hubspot for subscriptions that are in trial",
    "id": "createDealInTrial",
    "req": "false",
    "type": "TOGGLE",
    "defaultVal": allowCreateDealInTrial,
    "isDynamic": "true",
    "request": {
      "apiEndPoint": {
        "apiUrl": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.id
        },
        "input": {
          "type": steps.dealOptionsInitParams.ConstructCBApiReq.input.integrationName,
          "from": "toggle"
        },
        "type": "GET"
      },
      "type": "ON_CHANGE_FETCH_INPUT"
    }
  });
  if (allowCreateDealInTrial === "true") {
    mainCard.card.params.push({
      "dispName": "Choose the deal stage you'd like to assign all In-Trial subscriptions to",
      "desc": "If disabled, all in-Trial subscriptions will automatically be assigned to the deal stage 'Closed-Won', as configured above.",
      "req": "false",
      "type": "DROPDOWN_DYNAMIC",
      "id": "stage_subInTrial",
      "allowedValues": stages,
          "dropDownItemsList": stagesList,

      "defaultVal": stage_subInTrial
    });
  }

} else if (SubCreatedOption === 'UpdateExistingDeal') {
     mainCard.card.params.push({
     "dispName": "Which Hubspot pipeline would you like to create this deal in?",
    "req": "true",
    "type": "DROPDOWN_DYNAMIC",
    "id": "pipeLine",
    "isDynamic": "true",
  "dropDownItemsList": steps.Stages.pipeline,
  "request": {
          "type": "ON_CHANGE_FETCH_INPUT",
          "apiEndPoint": {
            "apiUrl": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.url,
            "type": "GET",
            "headers": {
              "Elements-Formula-Instance-Id": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.id
            },
            "input": {
              "type": steps.dealOptionsInitParams.ConstructCBApiReq.input.integrationName
            }
          }
        },
    "defaultVal": pipeLine

  });
    mainCard.card.params.push({
    "dispName": "Choose the deal stage in HubSpot you'd like to create this deal in",
    "req": "true",
    "type": "DROPDOWN_DYNAMIC",
    "id": "stage_subCreated",
    "allowedValues": stages,
        "dropDownItemsList": stagesList,
    "defaultVal": stage_subCreated

  });
  mainCard.card.params.push({
    "dispName": "If there are no 'Open Deals' for the contact, allow Chargebee to look for open deals against the company",
    "req": "false",
    "type": "TOGGLE",
    "id": "allowNoOpenDeal",
    "defaultVal": allowNoOpenDeal
  });

  mainCard.card.params.push({
    "dispName": "If there are no 'Open Deals' in HubSpot",
    "desc": "Choose what you'd like to do when there are no 'Open Deals' against a contact/company in HubSpot.",
    "req": "true",
    "type": "DROPDOWN",
    "id": "noOpenDeal",
    "allowedValues": {
      "Create_A_Deal": "Create a deal",
      "DoNothing": "Do Nothing"
    },
    "defaultVal": noOpenDeal
  });
  mainCard.card.params.push({
    "dispName": "Create new deals in Hubspot for subscriptions that are in trial",
    "id": "createDealInTrial",
    "req": "false",
    "type": "TOGGLE",
    "defaultVal": allowCreateDealInTrial,
    "isDynamic": "true",
    "request": {
      "apiEndPoint": {
        "apiUrl": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.dealOptionsInitParams.getFormulaDetails.dealoptions.id
        },
        "input": {
          "type": steps.dealOptionsInitParams.ConstructCBApiReq.input.integrationName,
          "from": "toggle"
        },
        "type": "GET"
      },
      "type": "ON_CHANGE_FETCH_INPUT"
    }
  });
  if (allowCreateDealInTrial === "true") {
    mainCard.card.params.push({
      "dispName": "Choose the deal stage you'd like to assign all In-Trial subscriptions to",
      "desc": "If disabled, all in-Trial subscriptions will automatically be assigned to the deal stage 'Closed-Won', as configured above.",
      "req": "false",
      "type": "DROPDOWN_DYNAMIC",
      "id": "stage_subInTrial",
      "allowedValues": stages,
          "dropDownItemsList": stagesList,
      "defaultVal": stage_subInTrial
    });
  }
}

card.cards.push(mainCard);
let cResult = {
  statusCode: 200,
  result: card
};
done(cResult);