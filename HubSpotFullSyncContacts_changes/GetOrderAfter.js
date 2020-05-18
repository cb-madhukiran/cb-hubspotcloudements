let order;
if(CusSubDetails!==undefined && CusSubDetails!==null)
{
  if(CusSubDetails.order_after!==undefined && CusSubDetails.order_after!== null)
  {
    order = CusSubDetails.order_after;
  }
}
done(order);