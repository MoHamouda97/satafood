import { Areas, MenuItems } from "../cities/citiesModel";

export class Restuarant {
    id:            number;
    name:          string;
    name_en:       string;
    logo:          string;
    cover:         string;
    minimum:       number;
    delivery_time: number;
    taxes:         number;
    created:       Date;
    modified:      Date;
    navigationId:number;
}
export class branches {
    name :            String;           
    name_en:          String ;          
    address :         String;
    phone    :        String;
    phone_two :       String;
    latitude   :      number;
    longitude   :     number;         
    category_id : number;
    restaurantsId  :  number;
 
  
  }
  export class working_times {
    id     :    number      
    branchId:   number
    day      :  String  
    open_time : String  
    close_time : String  
    day_en    : String  
    isActive:   number

  }

  export class restaurant_areas {
    area_id       :number
    branch_id     :number
    delivery_cost :number
    delivery_time : number   

}
export class restaurant_cuisines{
  cuisine_id       :number
  restaurant_id     :number
  cuisines:MenuItems;
 

}