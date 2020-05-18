let aSteps = {
    ChargebeeConfigParams: 'error1',
    CreateCustomProperties: 'error1',
    CreateDealInHubSpot: 'error2',
    CreateHubSpotContact: 'error2',
    DeletcustomProperties: 'error1',
    GetAllSubscriptions: 'error2',
    GetCompanyForContactLeft: 'error2',
    GetConfig: 'error1',
    GetConstactForMetrics: 'error2',
    GetCurrentHubSpotContact: 'error2',
    GetCustomerCBEM: 'error2',
    GetCustomerEntityMappping: 'error2',
    getCustomers: 'error2',
    GetCustomHubSpotGroups: 'error1',
    GetDealByID: 'error2',
    GetDealsByCompany: 'error2',
    GetDealsByContact: 'error2',
    GetHubSpotCompanyContacts: 'error2',
    GetHubSpotContactByEmail: 'error2',
    GetHubSpotContactByID: 'error2',
    GetHubSpotSubscription: 'error2',
    GetInvoiceForDeal: 'error2',
    GetLastUpdatedOrders: 'error1',
    GetLastUpdatedSubscription: 'error2',
    GetLookUPDeal: 'error2',
    GetOrderAfter: 'error2',
    GetOrderBefore: 'error2',
    GetPlanByID: 'error2',
    GetSubscriptionEntity: 'error2',
    GetTpErrData: 'error1',
    LastSyncDetails: 'error1',
    RefreshToken: 'error1',
    ReloadSubscription: 'error2',
    UpdateChargebeeConfigToken: 'error1',
    UpdateCompanyMetrics: 'error2',
    UpdateConfig: 'error1',
    UpdateConfigSyncData: 'error1',
    UpdateDealInHubSpot: 'error2',
    UpdateHubSpotContact: 'error2',
    UpdateSyncDetails: 'error1',
    UpdateThirdPartyDeal: 'error2',
    UpdateThirdPartyError5: 'error2',
    UpdateThirdPartyMapping: 'error2',
    UpdateThirdPartyMappingError: 'error2',
    UpdateThirdPartyMappingError2: 'error2',
    UpdateThirdPartyMappingError3: 'error2',
    UpdateThirdPartyMappingError4: 'error2',
    UploadCSV: 'error1'
};

let erSteps = "";

let errorMsg = "";
if(erSteps ==="error2") {
  errorMsg = "An issue was encountered due to API limits because of which the sync did not succeed. Please wait a few minutes, then retry sync. If the issue still persists, contact support";
}else {
  errorMsg = "An issue was encountered due to which the sync did not succeed. Please retry sync and if the issue still persists, contact support";
}
let card = {
    "icon": "/third_party/cn-xero.png",
    "unlink": {
        "id": "unlink",
        "display": "Unlink Integration",
        "buttonLook": "MUTTED",
        "type": "POP_UP",
        "popUp": {
            "type": "SIMPLE",
            "title": "Do you really want to unlink the integration?",
            "submitButton": "Unlink",
            "cancelButton": "Dismiss",
            "description": "This will remove all the configuration details such as login authentication, configurations mapping etc. If you want to sync again, you will have to start the sync process from the beginning.",
            "apiEndPoint": {
                "apiUrl": steps.Props.unlink.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.unlink.id
                },
                "input": {
                    "type": "hubspot",
                }
            }
        }
    },
    "syncErrors": [
    {
      "card": {
            "type" : "ACTION",
            "heading" : "No errors found",
            "icon" : "WARNING"
         },
      "id": "sync_errors",
      "isCardDone": "false"
    }
  ],
    "overview": [{
        "card": {
            "type": "ACTION2",
            "id": "check2",
            "icon" : "ERROR"   ,
            "heading": "Error",
            "subHeading": errorMsg,
                  "buttons" :[
              {
                "id":"sync",
                "display" : "Sync now",
                "icon" : "AUTO_RENEW",
                "type" : "DIRECT_LINK",
                "buttonLook":"EMPTY",
                "request":{
                  "type":"ON_CLICK_GET_CARD",
                  "apiEndPoint": {
                "apiUrl": steps.Props.syncRun.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.syncRun.id
                },
                "input":{
                    "type": steps.SyncRunNewInputParams.input.type,
                    "action": "retry",
                   
                }
            }
                  }
                }
              ]
           
        },
         "id": "overview",
        "isCardDone": "true"
    }]
};
    
   

done({
  statusCode: 200,
  result: card
})