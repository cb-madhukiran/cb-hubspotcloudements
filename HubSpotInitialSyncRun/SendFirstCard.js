let eTtitle = "Are you sure you want to sync all records?";
let eDesc = "All your customer and subscription data will be synced.";
let card = {
  "cards": [
    {
      "card": {
        "type": "ACTION",
        "heading": "We'll run an Initial sync",
        "subHeading": "We'll sync your first 10 customers and their subscriptions to HubSpot. After initial sync, we recommend that you verify the data synced to HubSpot.",
        "buttons": [
          {
            "id": "direct",
            "display": "Run Initial Sync",
            "icon": "ARROW",
            "type": "DIRECT_LINK",
            "buttonLook": "FILLED",
            "request": {
              "type": "ON_CLICK_GET_CARD",
              "apiEndPoint": {
                "apiUrl": steps.Props.initialsync.url,
                "type": "GET",
                "headers": {
                  "Elements-Formula-Instance-Id": steps.Props.initialsync.id
                },
                "input": {
                  "action": "default",
                  "initialSync": "true",
                  "type": steps.InitialSyncParams.input.type,
                  "debugLoggingEnabled": true,
                }
              }
            }
          }
        ]
      },
      "id": "check2",
      "showRetry": "false"
    }
  ],
  "proceed": {
    "id": "proceed",
    "display": "Sync all Records",
    "icon": "ARROW",
    "type": "POP_UP",
    "popUp": {
      "type": "SIMPLE",
      "title": eTtitle,
      "usecase": "DANGER",
      "submitButton": "Yes, go ahead",
      "cancelButton": "Dismiss",
      "description": eDesc,
      "apiEndPoint": {
        "apiUrl": steps.Props.syncProcessingCard.url,
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.syncProcessingCard.id
        },
        "input": {
          "type": steps.InitialSyncParams.input.type,
          "action": "run"

        }
      }
    }
  },
  "retry": {
    "buttonLook": "FILLED",
    "display": "Retry Initial Sync",
    "icon": "ARROW",
    "id": "retry",

    "request": {
      "apiEndPoint": {
        "apiUrl": steps.Props.initialsync.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.initialsync.id
        },
        "input": {
          "action": "retry",
          "type": steps.InitialSyncParams.input.type,

        },
        "type": "GET"
      },
      "type": "ON_CLICK_DEFAULT_ACTION"
    },
    "type": "DIRECT_LINK"
  }
};


done({
  statusCode: 200,
  result: card
});