let card = {
    cards: [
        {
            "card": {
                "type": "ACTION",
                "heading": "ERROR",
                "subHeading": "An issue was encountered due to which the Validtion did not succeed. Please try after sometime "+steps.getChargebeeConfiguration.cb_error_code
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