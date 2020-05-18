let okeys = Object.keys(steps.Next.fields.deals);

if (steps.GetADeal.data !== undefined && steps.GetADeal.data.properties !== undefined ) {
  let cp = steps.GetADeal.data;
  let newProps = [];
  for (var j = 0; j < okeys.length; j++) {
        if (cp.properties[okeys[j]] !== undefined && cp.properties[okeys[j]].value !== undefined) {
          newProps.push({
            "property": steps.Next.fields.deals[okeys[j]],
            "value": cp.properties[okeys[j]].value
          });
        }
      }
      if (newProps.length > 0) {
        steps.AllDeals.data.push(
          {
            objectId: cp.dealId,
          properties: newProps
        }
          );
      }
      done(steps.AllDeals.data);
}