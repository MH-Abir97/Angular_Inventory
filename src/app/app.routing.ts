import { Routes } from '@angular/router';
import { AuthGuard } from './AuthGurd/auth.gurd';
import { CommonTableComponent } from './Inventory/common-table/common-table.component';
import { RequestionEntryComponent } from './Inventory/requestion-entry/requestion-entry.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './Login/login/login.component';
import { RequestionReportyComponent } from './Reports/requestion-reporty/requestion-reporty.component';
import { UserEntryComponent } from './User/user-entry/user-entry.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'requestionReport',
    component:RequestionReportyComponent
    ,canActivate: [AuthGuard]
  },

  // {
  //   path: 'requestionEntry',
  //  component:RequestionEntryComponent
  // },
  {


    path: '',
    component: FullComponent,
    
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },

      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',

        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'salesOrder',
        loadChildren: () => import('./Inventory/sales-order/salesOrder.module').then(m => m.SalesOrderModule)
      },
      {
        path: 'requestionEntry',
        loadChildren: () => import('./Inventory/requestion-entry/requestion-entry.module').then(m => m.RequestionModule)
      },
      {
        path: 'userEntry',
        loadChildren: () => import('./User/user-entry/user-entry.module').then(m => m.UserEntryModule)
      },
      {
        path: '',
        loadChildren: () => import('./Login/login/login.module').then(m => m.LoginModule)
      }
    ],
  }
];
