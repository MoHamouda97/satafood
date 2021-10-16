export class MenuItemsTopics {
    id:                    number;
    name:                  string;
    name_en:               string;
    menu_topic_type_id:    number;
    menu_categories_items: number;
    required:              number;
    price:                 number;
    max_option_checks:     number;

    menu_options:          Towns;
}
export class Towns {
    create: MenuOption[];
}

export class MenuOption {
    id:                     number;
    name:                   string;
    name_en:                string;
    price:                  number;
    created:                Date;
    modified:               Date;
    menu_options_topics_id: number;
}
