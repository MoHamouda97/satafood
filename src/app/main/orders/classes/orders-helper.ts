export class OrdersHelper {

    constructor() {}
    
    shapeOrderObject(data: any[]) {
      let orders: any = [];

      data.forEach(val => {
        let obj = {
          id: val["id"],  
          user: (Boolean(val["user"])) ? val["user"]["username"] : '',
          adress: (Boolean(val["billing_addres"])) ? val["billing_addres"]["address"] : val["user"]["address"],        
          area: (Boolean(val["area"])) ? val["area"]["name"] : '',        

          total: val["total"],
          service: val["service"],
          taxes: val["taxes"],  
          discount: val["discount"],        
          platform: (Boolean(val["platform"])) ? val["platform"]["name"] : '',
          marketer: (Boolean(val["marketer"])) ? val["marketer"]["name"] : '',
          paymenttype: (Boolean(val["paymenttype"])) ? val["paymenttype"]["name"] : '',
          driver: val,

          order_status: val["order_status"],

          original: val,
          modified: val["modified"],
          orderdetails: val["orderdetails"],
          billing_addres: val["billing_addres"],
        }
  
        orders = [...orders, obj];
      });
  
      return orders;    
    }

  createDetails(orders: any[]) {
    const details = orders.map(val => {
      return {
        id: val["id"],
        item: val["item"]["name"],
        itemamount: val["itemamount"],
        itemtotal: val["itemtotal"],
        modified: val["modified"],
      }
    });

    return details;
  }

}