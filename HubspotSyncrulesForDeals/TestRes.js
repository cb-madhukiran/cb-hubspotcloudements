done({
    "statusCode": 200,
    "result": {
        "cards": [
            {
                "card": {
                    "contents": [
                        "Configure how you'd like to handle deals in HubSpot when subscriptions are created in Chargebee. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn more</a>"
                    ],
                    "heading": "Sync Rules for Deals",
                    "label": {
                        "dispName": "All deals will be created or updated in the HubSpot Sales Pipeline",
                        "icon": "INFO",
                        "id": "label1",
                        "textColour": "INFO",
                        "type": "TEXTLABEL"
                    },
                    "type": "EMPTY_BACKGROUND"
                },
                "id": "check2",
                "isCardDone": true
            },
            {
                "card": {
                    "params": [
                        {
                            "defaultVal": "Create_A_Deal",
                            "dispName": "When a subscription is <b>created</b> in Chargebee",
                            "dropDownItemsList": [
                                {
                                    "disp": "Create a deal",
                                    "value": "Create_A_Deal"
                                },
                                {
                                    "disp": "Update existing deal",
                                    "helptext": "The last Created 'Open deal' will be updated in HubSpot. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn More</a>",
                                    "value": "UpdateExistingDeal"
                                },
                                {
                                    "disp": "Do Nothing",
                                    "helptext": "No new deal will be created in HubSpot.",
                                    "value": "DoNothing"
                                }
                            ],
                            "id": "SubCreatedOption",
                            "isDynamic": "true",
                            "req": "true",
                            "request": {
                                "apiEndPoint": {
                                    "apiUrl": "https://staging.cloud-elements.com/elements/api-v2/hubspot/dealoptions",
                                    "headers": {
                                        "Elements-Formula-Instance-Id": "412128"
                                    },
                                    "input": {
                                        "type": "hubspot"
                                    },
                                    "type": "GET"
                                },
                                "type": "ON_CHANGE_FETCH_INPUT"
                            },
                            "type": "DROPDOWN_DYNAMIC"
                        },
                        {
                            "defaultVal": "default",
                            "dispName": "Choose the Pipeline in which Chargebee should create/update subscriptions",
                            "dropDownItemsList": [
                                {
                                    "disp": "Shamim",
                                    "value": "1557672"
                                },
                                {
                                    "disp": "Sales Pipeline",
                                    "value": "default"
                                }
                            ],
                            "id": "pipeLine",
                            "isDynamic": "true",
                            "req": "true",
                            "request": {
                                "apiEndPoint": {
                                    "apiUrl": "https://staging.cloud-elements.com/elements/api-v2/hubspot/dealoptions",
                                    "headers": {
                                        "Elements-Formula-Instance-Id": "412128"
                                    },
                                    "input": {
                                        "type": "hubspot"
                                    },
                                    "type": "GET"
                                },
                                "type": "ON_CHANGE_FETCH_INPUT"
                            },
                            "type": "DROPDOWN_DYNAMIC"
                        },
                        {
                            "allowedValues": {
                                "appointmentscheduled": "Appointment Scheduled",
                                "closedlost": "Closed Lost",
                                "closedwon": "Closed Won",
                                "contractsent": "Contract Sent",
                                "decisionmakerboughtin": "Decision Maker Bought-In",
                                "presentationscheduled": "Presentation Scheduled",
                                "qualifiedtobuy": "Qualified To Buy"
                            },
                            "defaultVal": "closedwon",
                            "dispName": "Choose the deal stage in HubSpot you'd like to create this deal in",
                            "id": "stage_subCreated",
                            "req": "true",
                            "type": "DROPDOWN"
                        },
                        {
                            "defaultVal": "true",
                            "dispName": "Create new deals in Hubspot for subscriptions that are in trial",
                            "id": "createDealInTrial",
                            "isDynamic": "true",
                            "req": "false",
                            "request": {
                                "apiEndPoint": {
                                    "apiUrl": "https://staging.cloud-elements.com/elements/api-v2/hubspot/dealoptions",
                                    "headers": {
                                        "Elements-Formula-Instance-Id": "412128"
                                    },
                                    "input": {
                                        "from": "toggle",
                                        "type": "hubspot"
                                    },
                                    "type": "GET"
                                },
                                "type": "ON_CHANGE_FETCH_INPUT"
                            },
                            "type": "TOGGLE"
                        },
                        {
                            "allowedValues": {
                                "appointmentscheduled": "Appointment Scheduled",
                                "closedlost": "Closed Lost",
                                "closedwon": "Closed Won",
                                "contractsent": "Contract Sent",
                                "decisionmakerboughtin": "Decision Maker Bought-In",
                                "presentationscheduled": "Presentation Scheduled",
                                "qualifiedtobuy": "Qualified To Buy"
                            },
                            "defaultVal": "closedlost",
                            "desc": "If disabled, all in-Trial subscriptions will automatically be assigned to the deal stage 'Closed-Won', as configured above.",
                            "dispName": "Choose the deal stage you'd like to assign all In-Trial subscriptions to",
                            "id": "stage_subInTrial",
                            "req": "false",
                            "type": "DROPDOWN"
                        }
                    ],
                    "type": "DYNAMIC_INPUT"
                },
                "id": "testdynamic",
                "isCardDone": true
            }
        ],
        "proceed": {
            "buttonLook": "FILLED",
            "display": "Proceed",
            "icon": "ARROW",
            "id": "proceed",
            "request": {
                "apiEndPoint": {
                    "apiUrl": "https://staging.cloud-elements.com/elements/api-v2/hubspot/saveDealRules",
                    "headers": {
                        "Elements-Formula-Instance-Id": "412129"
                    },
                    "input": {
                        "type": "hubspot"
                    },
                    "type": "GET"
                },
                "type": "ON_CLICK_SEND_INPUT"
            },
            "type": "DIRECT_LINK"
        }
    }
});