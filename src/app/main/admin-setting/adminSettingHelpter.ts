export class AdminSettingHelper {

    constructor() {}
    
    shapeOrderObject(data: any[]) {
      let orders: any = [];

      data.forEach(val => {
        let obj = {
          id: val["id"],  

          name: val["name"],
          value: val["value"],  
        
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