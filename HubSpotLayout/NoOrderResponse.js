let layout = {
  "logo": "/third_party/cn-hubspot.png",
  "integDispName": "HubSpot",
  "subStepList": [
    {
      "stepName": "Connect",
      "stepId": "connect",
      "stepNumber":1,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.connect.id
        },
        "apiUrl": steps.Props.connect.url,
        "input": {
          "type": "hubspot",
          "chargebeeElement": steps.Props.chargebeeElement,
          "thirdPartyElement": steps.Props.thirdPartyElement

        }
      }
    },
    {
      "stepName": "Sync Rules for Contacts",
      "stepId": "step_1",
      "stepNumber":2,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.syncRulesContactsSetup.id
        },
        "apiUrl": steps.Props.syncRulesContactsSetup.url,
        "input": {
          "integrationName": "hubspot"
        }
      },
      "backStepApiEndPoint": {
        "type": "GET",
        "apiUrl": steps.Props.goback.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.goback.id
        },
        "input": {
          "integrationName": "hubspot"
        }
      }
    },
    {
      "stepName": "Sync Rules for Deals",
      "stepId": "step_2",
      "stepNumber":3,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.syncRulesDealsSetup.id
        },
        "apiUrl": steps.Props.syncRulesDealsSetup.url,
        "input": {
          "type": "hubspot"

        }
      },
      "backStepApiEndPoint": {
        "type": "GET",
        "apiUrl": steps.Props.goback.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.goback.id
        },
        "input": {
          "integrationName": "hubspot"
        }
      }
    },
    {
      "stepName": "Sync Rules for Fields",
      "stepId": "step_5",
      "stepNumber":4,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.fields.id
        },
        "apiUrl": steps.Props.fields.url,
        "input": {
          "type": "hubspot"

        }
      },
            "backStepApiEndPoint": {
        "type": "GET",
        "apiUrl": steps.Props.goback.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.goback.id
        },
        "input": {
          "integrationName": "hubspot"
        }
      }
    },    
    {
      "stepName": "Data Validation",
      "stepId": "step_7",
      "stepNumber":5,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.validate.id
        },
        "apiUrl": steps.Props.validate.url,
        "input": {
          "type": "hubspot",
          "retry": "false"

        }
      },
            "backStepApiEndPoint": {
        "type": "GET",
        "apiUrl": steps.Props.goback.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.goback.id
        },
        "input": {
          "integrationName": "hubspot"
        }
      }
    },
    {
      "stepName": "Run Initial Sync",
      "stepId": "step_8",
      "stepNumber":6,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.initialsync.id
        },
        "apiUrl": steps.Props.initialsync.url,
        "input": {
          "type": "hubspot",
          "action": "layout",
          "initialSync": "true",
          "debugLoggingEnabled": true,
        }
      }
    },
    {
      "stepName": "Final step",
      "stepId": "completed",
      "stepNumber":7,
      "apiEndPoint": {
        "type": "GET",
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.syncProcessingCard.id
        },
        "apiUrl": steps.Props.syncProcessingCard.url,
        "input": {
          "type": "hubspot",
          "action": "default"
        }
      },
      "fullSyncApiEndPoint": {
        "type": "GET",
        "apiUrl": steps.Props.autoSync.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.autoSync.id
        },
        "input": {
          "integrationName": "hubspot",
        }
      },
      "editConfig": {
        "title": "Manage how Chargebee syncs data with HubSpot",
        "display": "Manage Sync Rules",
        "apiEndPoint": {
          "type": "GET",
          "apiUrl": steps.Props.manageSyncRules.url,
          "headers": {
            "Elements-Formula-Instance-Id": steps.Props.manageSyncRules.id
          },
          "input": {
            "type": "hubspot",
            "op": "edit"
          }
        }
      }
    }
  ]
};

done({
  statusCode: 200,
  result: layout
});