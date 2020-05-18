let detailstpm;
let CusSubDetails = steps.CusSubDetails;
if(CusSubDetails!==undefined)
{
  if(CusSubDetails.tpmapping!==undefined )
  {
    let tpmdata = {"third_party_entity_mapping":CusSubDetails.tpmapping};

    detailstpm = {data:tpmdata};
  }
}
done(detailstpm);