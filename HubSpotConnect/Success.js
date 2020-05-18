let connectCard = {
	"contents":[
		"mk-HubSpot is a CRM that helps analyze business metrics and organize sales pipelines. With HubSpot, you can convert leads into paying customers, run marketing campaigns, automate emails, track the progress of your leads, and more.",
		"Integrate HubSpot with Chargebee to sync customer and subscription data, orders, invoices, and more. With this integration, you can create deals for subscriptions, manage customer-related data, keep a track on the performance of your sales team, and so on. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn more</a>"
	],
	"docUrl":"https://www.hubspot.com/",
	"signupUrl":"https://www.hubspot.com/",
	"requestType": "oauthredirect",
	"connect":{
		"id":"credentials",
		"display" : "Connect",
		"icon" : "ARROW",
		"buttonLook":"FILLED",
		"type" : "DIRECT_LINK",
		"redirectUrl" : "https://app.hubspot.com/oauth/authorize?client_id="+steps.InputParams.input.clientId+"&scope="+steps.InputParams.input.scope+"&state="+steps.InputParams.input.siteName+"&redirect_uri="+steps.InputParams.input.redirectUrl,
		"request":{
      "type":"ON_CLICK_DEFAULT_ACTION"
    }
	},
	"message":{
			      "message":"Chargebee will sync your customer and subscriptions details with HubSpot.",
			      "icon":"INFO",
			      "messageLook":"INFO",
			      "boxNeeded":"false",
			 "button": {
			    "display": "Read Privacy Policy",
			    "icon": "OPENINNEW",
			    "url":"https://legal.hubspot.com/privacy-policy",
			    "id": "readprivacy",
			    "type": "DIRECT_LINK",
		            "newTab":"true"       
			  }
	}
};

done({
  statusCode: 200,
  result: connectCard
});