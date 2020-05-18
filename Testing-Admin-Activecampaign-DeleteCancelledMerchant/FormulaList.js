let list = {
  formula :[]
};

if(steps.FormulaList !== undefined) {
  list = steps.FormulaList;
}

if(list[steps.LoopOverFormulas.entry.id] === undefined) {
  list[steps.LoopOverFormulas.entry.id]= steps.LoopOverFormulas.entry.id;
  list.formula.push(
     {  instance: list[steps.LoopOverFormulas.entry.id],
     id  : steps.LoopOverFormulas.entry.formula.id
     }
    );
}
 

done(list);