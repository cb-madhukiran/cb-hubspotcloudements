let card = {
    "cards": [{
        "id": "check2",
        "card": {
            "type": "ACTION",
            "heading": "Integration Error:  Initialization Failed",
            "listContent": [
                "Integration Error:  Initialization Failed, "+steps.InputParams.error
            ],
            "icon": "WARNING"
          
        }
    }]
}
//let
done({
  statusCode: 200,
  result: card
})