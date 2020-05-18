let prefix = "cb_";
if (steps.ChargebeeGetTpIntegConf.data.config_json.noneedprefix !== undefined && steps.ChargebeeGetTpIntegConf.data.config_json.noneedprefix === true) {
  prefix = "";
}

let pMap = {
  
};
pMap[prefix+"totalnoofsubscription"] = true;
pMap[prefix+"totalsubscriptionmrr"] = true;
pMap[prefix+"totaldues"] = true;
pMap[prefix+"totalinvoiceamountpaid"] = true;
pMap[prefix+"totaldueinvoicescount"] = true;

function updateMetrics(metrics, properties, mKeyP, pKeyP, isCurrency) {
  let mKey = prefix + mKeyP;
  let pKey =  prefix+ pKeyP;
  return updateMetrics2(metrics, properties, mKey, pKey, isCurrency);
}
function updateMetrics2(metrics, properties, mKeyP, pKeyP, isCurrency) {
  let mKey = mKeyP;
  let pKey =  pKeyP;
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

if (steps.HubspotGetContact.cb_status == "success") {
  if (steps.HubspotGetContact.data["associated-company"] !== undefined && steps.HubspotGetContact.data["associated-company"]["company-id"] !== undefined) {
    let companyId = steps.HubspotGetContact.data["associated-company"]["company-id"];
    let metrics = steps.CompanyList.map[companyId];
    if (metrics === undefined) {
      metrics = JSON.parse(JSON.stringify(steps.SyncLog.cprops));
    }
    let properties = steps.HubspotGetContact.data.properties;
    if (properties[prefix+"subscriptionid"] !== undefined && properties[prefix+"subscriptionid"].value !== undefined) {
      let totalnoofsubscription = Number(metrics[prefix+"totalnoofsubscription"].value) + 1;
      metrics[prefix+"totalnoofsubscription"].value = totalnoofsubscription;
      // metrics.subcst_plan_quantity.value=6;
    }
    metrics = updateMetrics(metrics, properties, "totalsubscriptionmrr", "subscriptionmrr", true);
    metrics = updateMetrics(metrics, properties, "totaldues", "totaldues", true);
    metrics = updateMetrics(metrics, properties, "totalinvoiceamountpaid", "invoiceamountpaid", true);
    metrics = updateMetrics(metrics, properties, "totaldueinvoicescount", "dueinvoicescount", false);
    let objKeys = Object.keys(metrics);
    for (var i = 0; i < objKeys.length; i++) {
      if (pMap[objKeys[i]] === undefined) {
        let flag = objKeys[i] !== (prefix + "subcst_plan_quantity");
        metrics = updateMetrics2(metrics, properties, objKeys[i], objKeys[i], flag);
      }
    }

    steps.CompanyList.map[companyId] = metrics;
    done({ "metrics": metrics });
  }

}