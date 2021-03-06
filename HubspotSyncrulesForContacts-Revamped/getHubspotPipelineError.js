let card = {
    cards: [
        {
            "card": {
                "type": "ACTION",
                "heading": "ERROR",
                "subHeading": "An issue was encountered due to which the sync did not succeed. Please retry sync and if the issue still persists, contact support "+steps.getChargebeeConfigs.cb_error_code
            },
            "isCardDone": true,
            "id": "check2"
        }
        ]
};

done({
 statusCode: 200,
 result: card
})