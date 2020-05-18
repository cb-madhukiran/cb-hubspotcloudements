let syncOrders = "false"; 
if(steps.ChargebeeConfig.data !== undefined) {
  let syncOrdersConfig = steps.ChargebeeConfig.data.third_party_configuration.config_json.cloudElements.syncRuleForOrders;
  if(syncOrdersConfig !== undefined) {
    syncOrders = syncOrdersConfig.sync;
  }
}
let card = {
    "cards": [
      {
            "card": {
                "type": "EMPTY_BACKGROUND",
                "heading": "Sync Rules for Orders",
                "contents": [
                    "Set rules to sync orders from Chargebee to HubSpot. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn more</a>"
                ]
            },
            "isCardDone": true,
            "id": "check26",
        },
        {
            "card": {
                "message": {
                    "message": "Chargebee will sync your orders and related details like last order date,discount code,next order date and so on",
                    "icon": "INFO",
                    "messageLook": "INFO",
                    "button": {
                        "display": "Learn more",
                        "icon": "ARROW",
                        //"url": "https://www.chargebee.com/docs/index.html",
                        "url": "https://www.chargebee.com/docs/hubspot.html",
                        "id": "viewFields",
                        "type": "DIRECT_LINK",
                        "newTab": "true"
                    }
                },
                "type": "TOGGLE_HIDE_INPUT",
                "params": [
                    {
                        "dispName": "Allow Chargebee to sync orders to HubSpot",
                        "req": "true",
                        "type": "TOGGLE",
                        "id": "syncOrders",
                        "defaultVal": syncOrders

                    },
                ]
            },
            "id": "check4",
            "isCardDone":true
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
                "apiUrl": steps.Props.save.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.save.id
                },
                "input": {
                    "id": "chargebee",
                    "type":"hubspot"
                }
            }
        }
    }
}

done(card);