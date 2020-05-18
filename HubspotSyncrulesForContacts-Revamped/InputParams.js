
let getRequetArgs = (arg)=>{
    let triggerArgument = trigger.args.request.query[arg];
        if(triggerArgument !== undefined) 
            return triggerArgument;
        else{
            return "select";
        }
    }

let NoSubscription = getRequetArgs('NoSubscription');
let TrialSubscription = getRequetArgs('TrialSubscription');
let ActiveSubscription = getRequetArgs('ActiveSubscription');
let CanceledSubscription = getRequetArgs('CanceledSubscription');

let params = {
    NoSubscription : NoSubscription,
    TrialSubscription : TrialSubscription,
    ActiveSubscription : ActiveSubscription,
    CanceledSubscription : CanceledSubscription
};
done({params : params});