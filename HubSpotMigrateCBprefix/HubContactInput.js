let okeys = Object.keys(steps.Next.fields.contacts);

if (steps.GetAContact.data !== undefined && steps.GetAContact.data.properties !== undefined ) {
  let cp = steps.GetAContact.data;
  let newProps = [];
  for (var j = 0; j < okeys.length; j++) {
        if (cp.properties[okeys[j]] !== undefined && cp.properties[okeys[j]].value !== undefined) {
          newProps.push({
            "property": steps.Next.fields.contacts[okeys[j]],
            "value": cp.properties[okeys[j]].value
          });
        }
      }
      if (newProps.length > 0) {
        steps.AllContacts.data.push(
          {
          vid: cp.vid,
          properties: newProps
        }
          );
      }
      
}
