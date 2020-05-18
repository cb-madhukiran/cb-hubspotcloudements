let count = (steps.SuccessParams !== undefined) ? steps.SuccessParams.success_count : 0;

done({
  status:"success",
  message:  count + " instances updated."
});