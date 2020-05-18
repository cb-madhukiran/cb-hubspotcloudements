let subscription = steps.CBInfo.subscription;
steps.CustomersParam.sDList = Number(steps.CustomersParam.sDList) +1;
steps.DealSyncLog.syncCount.sCount = steps.DealSyncLog.syncCount.sCount +1;
steps.DealInfo.updateQuery = {
    integration_name: steps.DealsInputParams.input.type,
    entity_id: subscription.id,
    entity_type: "subscription",
    third_party_entity_id: steps.updateDealInHubspot.data.dealId,
    status: "synced",
    old_resource: JSON.stringify(subscription)
};
done(true);