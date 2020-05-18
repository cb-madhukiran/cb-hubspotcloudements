let pips;
let maxSize = 25;
if(steps.GetPipeLines !== undefined) {
  pips = steps.GetPipeLines.response.body;
}
let pipeline =[];
let stage = {};
if(pips !== undefined && pips.results !== undefined) {
  for(var i=0;i<pips.results.length;i++) {
    var pipiLineId = pips.results[i].pipelineId;
    var pipiLineValue = pips.results[i].label;
     if(pipiLineValue.length >maxSize) {
      pipiLineValue = pipiLineValue.substring(0,maxSize) +"..";
    }
    var pstages = pips.results[i].stages;
    pipeline.push({"value":pipiLineId,
      "disp":pipiLineValue    });
    
    
    var stag = {};
    for(var j=0;j<pstages.length;j++) {
      var stageValue = pstages[j].label;
       if(stageValue.length >maxSize) {
      stageValue = stageValue.substring(0,maxSize) +"..";
    }
      stag[pstages[j].stageId] = stageValue;
    }
    stage[pipiLineId] = stag;
  }
}
done({pipeline:pipeline,stage:stage});