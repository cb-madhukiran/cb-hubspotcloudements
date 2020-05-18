if(steps.InputParams.MappedFieldChargebee !== null){
  if(steps.loopOverCustomers.entry.customer[steps.InputParams.MappedFieldChargebee] === undefined){
    steps.InputParams.result.noEmail = steps.InputParams.result.noEmail + 1;
    let message;
    if(steps.InputParams.MappedFieldChargebee === "email")
      message = "Email Address not available";
    else if(steps.InputParams.MappedFieldChargebee === "phone")
      message = "Phone Number not available";
    else if(steps.InputParams.MappedFieldChargebee === "company")
      message = "Company not available";
    else
      message = "Custom field '"+steps.InputParams.MappedFieldChargebee+"' not available";
    steps.InputParams.result.errorCSV.push(steps.loopOverCustomers.entry.customer.id + ","+message+"\n");
  }
}

// if(steps.loopOverCustomers.entry.customer.email === undefined){
// steps.InputParams.result.noEmail = steps.InputParams.result.noEmail + 1;
//   steps.InputParams.result.errorCSV.push(steps.loopOverCustomers.entry.customer.id + ",Email Address not available\n");
// }

done(true);
