export class Cities {
    data: CitiesData;
}

export class CitiesData {
    name:  string;
    name_en:  string;
    photo:  string;

    towns: Towns;
}

export class Towns {
    create: TownsCreate[];
}

export class TownsCreate {
    name:    string;
    name_en: string;
    areas:   Areas;
}

export class Areas {
    create: AreasCreate[];
}

export class AreasCreate {
    name: string;
    name_en: string;
    town_id:number;
    latitude:number;
    longitude:number;
}

export class MenuCategories {
    name:  string;
    name_en:  string;
    restaurant_id:  number;
    id:  number;
    photo:              string;

    towns: Towns;
  active: boolean;
}
export class MenuItems {
    id:                 number;
    name:               string;
    photo:              string;
    descriptions:       string;
    descriptions_en:    string;
    name_en:            string;
    menu_categories_id: number;
    price:              number;

}
