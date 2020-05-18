let card = {
    "cards": [{
        "id": "check2",
        "card": {
            "type": "ACTION",
            "heading": "Integration Error: " ,
            "subHeading": "An issue was encountered due to which the sync did not succeed. Please retry sync and if the issue still persists, contact support "+ steps.getTpConfig.cb_error_code,
            "listContent": [
                "Integration Error: "
            ],
            "icon": "WARNING"
          
        }
    }]
};

done({
  statusCode: 200,
  result: card
});