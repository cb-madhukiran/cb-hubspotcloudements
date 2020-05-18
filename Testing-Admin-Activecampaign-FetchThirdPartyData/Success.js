let response = {
  thirdpartydata: steps.fetch_details.response.body.third_party_entity_mapping
};

done({
  status: 200,
  result: response
});