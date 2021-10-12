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

export interface Areas {
    create: AreasCreate[];
}

export interface AreasCreate {
    name: string;
}
