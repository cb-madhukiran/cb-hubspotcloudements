let prefix = "cb_";
if (steps.ChargebeeGetTpIntegConf.data.config_json.noneedprefix !== undefined && steps.ChargebeeGetTpIntegConf.data.config_json.noneedprefix === true) {
  prefix = "";
}

function updateMetrics(metrics, properties, mKeyP, pKeyP, isCurrency) {
   let mKey = prefix + mKeyP;
  let pKey =  prefix+ pKeyP;
    if (properties[pKey] !== undefined && properties[pKey].value !== undefined) {
        let pValue = Number(properties[pKey].value);
        if (isCurrency) {
            pValue = pValue * 100;
        }
        if (metrics[mKey] !== undefined && metrics[mKey].value !== undefined) {
            let mValue = Number(metrics[mKey].value);
            if (isCurrency) {
                mValue = mValue * 100;
            }
            let nValue = pValue + mValue;
        if (nValue > 0) {
            if (isCurrency) {
                nValue = parseFloat(parseInt(nValue, 10) / 100).toFixed(2);
            }
            metrics[mKey].value = nValue;
        }
        }
        


    }
    return metrics;
}
if (steps.HubSpotGetCASContact.cb_status == "success") {
    if (steps.HubSpotGetCASContact.data["associated-company"] !== undefined && steps.HubSpotGetCASContact.data["associated-company"]["company-id"] !== undefined) {
        let companyId = steps.HubSpotGetCASContact.data["associated-company"]["company-id"];
        let metrics = steps.CompanyMetrics.metrics;
        let properties = steps.HubSpotGetCASContact.data.properties;
        if (properties.subscriptionid !== undefined && properties.subscriptionid.value !== undefined) {
            let totalnoofsubscription = Number(metrics.totalnoofsubscription.value) +1;
            metrics.totalnoofsubscription.value = totalnoofsubscription;
            // metrics.subcst_plan_quantity.value=6;
        }
        metrics = updateMetrics(metrics, properties, "totalsubscriptionmrr", "subscriptionmrr", true);
        metrics = updateMetrics(metrics, properties, "totaldues", "totaldues", true);
        metrics = updateMetrics(metrics, properties, "totalinvoiceamountpaid", "invoiceamountpaid", true);
        metrics = updateMetrics(metrics, properties, "totaldueinvoicescount", "dueinvoicescount", false);
        let objKeys = Object.keys(metrics);
        for (var i = 0; i < objKeys.length; i++) {
            if (!objKeys[i].startsWith("total")) {
                let flag = objKeys[i] !== "subcst_plan_quantity";
                metrics = updateMetrics(metrics, properties, objKeys[i], objKeys[i], flag);
            }
        }

      steps.CompanyMetrics.metrics = metrics;
     
    }
}