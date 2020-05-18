let okeys = Object.keys(steps.Next.fields.company);

if (steps.GetACompany.data !== undefined && steps.GetACompany.data.properties !== undefined ) {
  let cp = steps.GetACompany.data;
  let newProps = [];
  for (var j = 0; j < okeys.length; j++) {
        if (cp.properties[okeys[j]] !== undefined && cp.properties[okeys[j]].value !== undefined) {
          newProps.push({
            "property": steps.Next.fields.company[okeys[j]],
            "value": cp.properties[okeys[j]].value
          });
        }
      }
      if (newProps.length > 0) {
        steps.AllCompanies.data.push(
          {
            objectId: cp.companyId,
          properties: newProps
        }
          );
      }
      done(steps.AllCompanies.data);
}