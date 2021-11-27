export interface Reports {
    id?:number
    weekorders?:          Order[];
    monthorders?:         Order[];
    monthordersForchart?: OrdersForchart[];
    weekordersForchart?:  OrdersForchart[];
    orderdetails?:        Orderdetail[];
    OrderByPayment?:      OrderByPayment[];
    Confirgrations?:      Confirgration[];
}

export interface Confirgration {
    id?:      number;
    name?:    string;
    value?:   number;
    created?: Date;
}

export interface OrderByPayment {
    Ordertotals?: number;
    paymenttype?: Paymenttype;
}

export interface Paymenttype {
    id?:      number;
    name?:    string;
    photo?:   string;
    name_en?: string;
}

export interface Order {
    Ordertotals?: number;
}

export interface OrdersForchart {
    created?:     Date;
    modified?:    Date;
    Ordertotals?: number;
}

export interface Orderdetail {
    itemamount?:            string;
    itemtotal?:             number;
    menu_categories_items?: MenuCategoriesItems;
}

export interface MenuCategoriesItems {
    id?:                 number;
    name?:               string;
    photo?:              string;
    descriptions?:       string;
    descriptions_en?:    string;
    name_en?:            string;
    menu_categories_id?: number;
    price?:              number;
    created?:            Date;
    modified?:           Date;
}
