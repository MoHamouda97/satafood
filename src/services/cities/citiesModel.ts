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
