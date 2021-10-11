import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'المدن',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/cities/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cities/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
 ];
