export class OrdersHelper {

    constructor() {}
    
    shapeOrderObject(data: any[]) {
      let orders: any = [];

      data.forEach(val => {
        let obj = {
          id: val["id"],  
          user: (Boolean(val["users"])) ? val["users"]["username"] : '',
          adress: (Boolean(val["billing_address"])) ? val["billing_address"]["address"] : val["users"]["address"],        

          total: val["total"],
          taxes: val["taxes"],  
          discount: val["discount"],        
          paymenttype: (Boolean(val["paymenttype"])) ? val["paymenttype"]["name"] : '',

          order_status:(Boolean(val["order_status"])) ? val["order_status"]["name"] : '' ,

          modified: val["modified"],
          orderdetails: val["order_details"],
          billing_addres: val["billing_address"],
        }
  
        orders = [...orders, obj];
      });
  
      return orders;    
    }

  createDetails(orders: any[]) {
    const details = orders.map(val => {
      return {
        id: val["id"],
        item: val["menu_categories_items"]["name"],
        options:val["order_details_options"],
        itemamount: val["amount"],
        itemtotal: val["total"],
        modified: val["created"],
      }
    });

    return details;
  }

}