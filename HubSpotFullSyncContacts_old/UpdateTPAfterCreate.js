let contact = steps.CreateHubSpotContact.response.body;
let subscription = steps.HubData.subscription;
let customer = steps.HubData.customer;
steps.SyncLog.syncCount.sCount = steps.SyncLog.syncCount.sCount +1;

let old_resource = {
    customer: customer,
    hubspot: {

    }
};

if (subscription !== undefined) {
    old_resource.hubspot.subscription_id = subscription.id;
    old_resource.hubspot.hubspot_sub_status = subscription.status;
}
steps.HubSpotInput.tp.third_party_entity_id = contact.vid;
steps.HubSpotInput.tp.old_resource = JSON.stringify(old_resource);