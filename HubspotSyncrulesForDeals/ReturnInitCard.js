let syncRulesDeals = steps.GetCBConfigApi.data.third_party_configuration.config_json.cloudElements.syncRulesDeals;
let SubCreatedOption = "Create_A_Deal";
let pipeLine = "default";
let stage_subCreated;
let allowCreateDealInTrial;
let stage_subInTrial;
let allowNoOpenDeal;
let noOpenDeal;
let selectedPipeLine;
if (syncRulesDeals !== undefined) {
  if (syncRulesDeals.pipeLine !== undefined) {
    pipeLine = syncRulesDeals.pipeLine;
    selectedPipeLine = syncRulesDeals.pipeLine;
  }
  SubCreatedOption = syncRulesDeals.SubCreatedOption;
  stage_subCreated = syncRulesDeals.stage_subCreated;
  allowCreateDealInTrial = syncRulesDeals.allowCreateDealInTrial;
  stage_subInTrial = syncRulesDeals.stage_subInTrial;
  allowNoOpenDeal = syncRulesDeals.allowNoOpenDeal;
  noOpenDeal = syncRulesDeals.noOpenDeal;
}

if(selectedPipeLine === undefined) {
  selectedPipeLine = pipeLine;
}
let stages = steps.Stages.stage[selectedPipeLine];

//SubCreatedOption = "UpdateExistingDeal";
let card = {
  "cards": [
    {
      "card": {
        "type": "EMPTY_BACKGROUND",
        "heading": "Sync Rules for Deals",
        "contents": [
          "Configure how you'd like to handle deals in HubSpot when subscriptions are created in Chargebee. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn more</a>"
        ],
        "label": {
          "dispName": "All deals will be created or updated in the HubSpot Sales Pipeline",
          "type": "TEXTLABEL",
          "id": "label1",
          "icon": "INFO",
          "textColour": "INFO"
        }

      },
      "isCardDone": true,
      "id": "check2",
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
            "apiUrl": steps.InitParams.getFormulaDetails.dealoptions.url,
            "type": "GET",
            "headers": {
              "Elements-Formula-Instance-Id": steps.InitParams.getFormulaDetails.dealoptions.id
            },
            "input": {
              "type": steps.InitParams.ConstructCBApiReq.input.integrationName
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
    "request": {
          "type": "ON_CHANGE_FETCH_INPUT",
          "apiEndPoint": {
            "apiUrl": steps.InitParams.getFormulaDetails.dealoptions.url,
            "type": "GET",
            "headers": {
              "Elements-Formula-Instance-Id": steps.InitParams.getFormulaDetails.dealoptions.id
            },
            "input": {
              "type": steps.InitParams.ConstructCBApiReq.input.integrationName
            }
          }
        },
    "dropDownItemsList": steps.Stages.pipeline,
    "defaultVal": selectedPipeLine

  });
  
  /*let dropDownStageList = [];
  
  if(stages !== undefined && stages !== null){
  
    for(var i=0; i<stages.length ; i++){
      let st = { "disp":stages[i].value,
                 "value":stages[i].key};
      dropDownStageList.push(st);
    }
  }*/
  
 

  mainCard.card.params.push({
    "dispName": "Choose the deal stage in HubSpot you'd like to create this deal in",
    "req": "true",
    "type": "DROPDOWN",
    "id": "stage_subCreated",
    "isDynamic": "true",
    "allowedValues": stages,
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
        "apiUrl": steps.InitParams.getFormulaDetails.dealoptions.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.InitParams.getFormulaDetails.dealoptions.id
        },
        "input": {
          "type": steps.InitParams.ConstructCBApiReq.input.integrationName,
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
      "type": "DROPDOWN",
      "id": "stage_subInTrial",
      "allowedValues": stages,
      "defaultVal": Object.keys(stages)[0]
    });
  }

} else if (SubCreatedOption === 'UpdateExistingDeal') {
  mainCard.card.params.push({
    "dispName": "Which Hubspot pipeline would you like to create this deal in?",
    "req": "true",
    "type": "DROPDOWN",
    "id": "pipeLine",
    "allowedValues": steps.Stages.pipeline,
    "defaultVal": selectedPipeLine

  });
  

  mainCard.card.params.push({
    "dispName": "Choose the deal stage in HubSpot you'd like to create this deal in",
    "req": "true",
    "type": "DROPDOWN",
    "id": "stage_subCreated",
    "allowedValues": stages,
    "defaultVal": Object.keys(stages)[0]

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
        "apiUrl": steps.InitParams.getFormulaDetails.dealoptions.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.InitParams.getFormulaDetails.dealoptions.id
        },
        "input": {
          "type": steps.InitParams.ConstructCBApiReq.input.integrationName,
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
      "type": "DROPDOWN",
      "id": "stage_subInTrial",
      "allowedValues": stages,
      "defaultVal": stage_subInTrial
    });
  }
}

card.cards.push(mainCard);
let cResult = {
  statusCode: 200,
  result: card,
};
done(cResult);