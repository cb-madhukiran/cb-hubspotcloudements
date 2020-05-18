let success_count = 0;

if(steps.SuccessParams !== undefined){
  success_count = steps.SuccessParams.success_count;
}

success_count = success_count + 1;

done({
  success_count: success_count
});
