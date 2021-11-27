export interface OfferModel {
    id?:                       number;
    menu_categories_items_id?: number;
    description?:              string;
    percentage?:               number;
    start_date?:               string;
    end_date?:                 string;
    created?:                  string;
    modified?:                 string;
    menu_categories_items?:    MenuCategoriesItems;
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

    menu_categories?:    MenuCategories;
}

export interface MenuCategories {
    id?:            number;
    name?:          string;
    name_en?:       string;
    restaurant_id?: number;
    created?:       Date;
    modified?:      Date;
    restaurants?:   Restaurants;
}

export interface Restaurants {
    id?:                 number;
    name?:               string;
    name_en?:            string;
    logo?:               string;
    cover?:              string;
    minimum?:            number;
    delivery_time?:      number;
    category_id?:        number;
    taxes?:              number;
    created?:            Date;
    modified?:           Date;
    restaurant_cuisine?: RestaurantCuisine[];
}

export interface RestaurantCuisine {
    id?:            number;
    restaurant_id?: number;
    cuisine_id?:    number;
    created?:       Date;
    modified?:      Date;
    cuisines?:      Cuisines;
}

export interface Cuisines {
    id?:       number;
    name?:     string;
    name_en?:  string;
    photo?:    string;
    created?:  Date;
    modified?: Date;
}
