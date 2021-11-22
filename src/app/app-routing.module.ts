import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from 'src/services/guard/auth-guard.service';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '',        canActivate: [AuthGuard],
      redirectTo: '/dashboard/dashboard1', pathMatch: 'full'

    },

      {
        path: 'dashboard',
        canActivate: [AuthGuard],

        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule),

      },
      
      {
        path: 'cuisines',
        loadChildren: () => import('./main/cuisines/cuisines.module').then(m => m.CuisinesModule)
      }
      ,
      
      {
        path: 'mainmenu',
        loadChildren: () => import('./main/min-menu/min-menu.module').then(m => m.MinMenuModule)
      },
      {
        path: 'areas',
        loadChildren: () => import('./main/areas/areas.module').then(m => m.AreasModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('./main/cities/cities.module').then(m => m.CitiesModule)
      } ,
      {
        path: 'branches',
        loadChildren: () => import('./main/branches/branches.module').then(m => m.BranchesModule)
      }
      ,
      {
        path: 'restaurants',
        loadChildren: () => import('./main/restaurants/restaurants.module').then(m => m.RestaurantsModule)
      }
      , 
      {
        path: 'worketimes',
        loadChildren: () => import('./main/working-times/working-times.module').then(m => m.WorkingTimesModule)
      },
      {
        path: 'restaurant-cuisine',
        loadChildren: () => import('./main/restaurant-cuisines/restaurant-cuisines.module').then(m => m.RestaurantCuisinesModule)
      }, 
      {
        path: 'brancheszones',
        loadChildren: () => import('./main/branches-zones/branches-zones.module').then(m => m.BranchesZonesModule)
      },     
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
      { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
      { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      { path: 'ecom', loadChildren: () => import('./ecommerce/ecom.module').then(m => m.EcomModule) },
      {
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: 'extra-component',
        loadChildren:
          () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule)
      },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {
        path: 'apps/email',
        loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
      },

      {
        path: 'sample-pages',
        loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
      },

      {
        path: 'categories',
        loadChildren: () => import('./main/categories/categories.module').then(m => m.CategoriesModule)
      },

      {
        path: 'categories',
        loadChildren: () => import('./main/offers/offers.module').then(m => m.OffersModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
