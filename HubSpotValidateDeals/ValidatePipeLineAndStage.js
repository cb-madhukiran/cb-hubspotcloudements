let data = {};

let pips = steps.GetPipeLines.response.body;

let skipTrail = true;
let cPipeLine = steps.CBParam.syncRulesDeals !== undefined ? steps.CBParam.syncRulesDeals.pipeLine : undefined;
if (cPipeLine === undefined) {
    cPipeLine = "default";
}
if (pips !== undefined && pips.results !== undefined) {
    for (var i = 0; i < pips.results.length; i++) {
        var pipelineId = pips.results[i].pipelineId;
        if (pipelineId === cPipeLine) {
            data.pipeLine = pipelineId;
            var pstages = pips.results[i].stages;
            var stages = {};
            for (var j = 0; j < pstages.length; j++) {
                stages[pstages[j].stageId] = pstages[j].label;
            }
        }
    }
    if (steps.CBParam.syncRulesDeals !== undefined && steps.CBParam.syncRulesDeals.stage_subCreated !== undefined && steps.CBParam.syncRulesDeals.stage_subCreated !== "") {
        if (stages[steps.CBParam.syncRulesDeals.stage_subCreated] !== undefined) {
            data.stage_subCreated = steps.CBParam.syncRulesDeals.stage_subCreated;
        }
    }
    if (steps.CBParam.syncRulesDeals !== undefined && steps.CBParam.syncRulesDeals.stage_subInTrial !== undefined && steps.CBParam.syncRulesDeals.stage_subInTrial !== "") {
        skipTrail = false;
        if (stages[steps.CBParam.syncRulesDeals.stage_subInTrial] !== undefined) {
            data.stage_subInTrial = steps.CBParam.syncRulesDeals.stage_subInTrial;
        }
    }
}


if (data === undefined || data.pipeLine === undefined) {
    data.cb_error = "no_pipe_line";
    data.cb_message = cPipeLine;
} else {
    if (data.stage_subCreated === undefined) {
        data.cb_error = "no_stage";
        data.cb_message = steps.CBParam.syncRulesDeals.stage_subCreated;
    }
    if (data.stage_subInTrial === undefined && !skipTrail) {
        data.cb_error = "no_stage";
        data.cb_message = steps.CBParam.syncRulesDeals.stage_subInTrial;
    }
}

data.dInput = {
    url: "https://api.hubapi.com/deals/v1/deal",
    headers: {
        "Authorization": "Bearer " + steps.CBParam.thirdParty.accessToken
    },
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
    body: {
        properties: [
            {
                value: "Chargebee Test Deal",
                name: "dealname"
            },
            {
                value: data.stage_subCreated,
                name: "dealstage"
            },
            {
                value: data.pipeLine,
                name: "pipeline"
            }
        ]
    }
};

done(data);