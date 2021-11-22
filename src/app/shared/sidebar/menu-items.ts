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
  },{
    path: '',
    title: 'المناطق الفرعية',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/areas/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/areas/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },{
    path: '',
    title: 'اقسام المطاعم ',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/cuisines/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cuisines/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  }
  ,{
    path: '',
    title: 'الاقسام الرئيسية',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/categories/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/categories/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },{
    path: '',
    title: 'الفروع  ',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/branches/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/branches/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },{
    path: '',
    title: 'المطاعم',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/restaurants/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/restaurants/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  }
 ];
 export const ResTaurantROUTES: RouteInfo[] = [
{
    path: '',
    title: 'بيانات المطعم',
    icon: 'fas fa-globe',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/restaurants/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
 ];