let data = steps.CBInfo
let subscription =  steps.LoopOverSubscriptions.entry.subscription;
data.query = {
      'integration_name': steps.DealsInputParams.input.type,
      'entity_id': encodeURIComponent(subscription.id),
      'entity_type': 'subscription'
    }
    
done(data)    