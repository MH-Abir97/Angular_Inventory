
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component'

import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { CommonTableComponent } from './Inventory/common-table/common-table.component';
import { RequestionReportyComponent } from './Reports/requestion-reporty/requestion-reporty.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MAT_SELECTSEARCH_DEFAULT_OPTIONS, MatSelectSearchOptions } from 'ngx-mat-select-search';
import { AuthGuard } from './AuthGurd/auth.gurd';
import { JwtModule } from '@auth0/angular-jwt';
import { UserEntryComponent } from './User/user-entry/user-entry.component';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    RequestionReportyComponent,
    UserEntryComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),

    ToastrModule.forRoot({
      // timeOut: 10000,
      positionClass: 'toast-bottom-right',
      // preventDuplicates: true,
    }),
    NgxMatSelectSearchModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44384"],
        disallowedRoutes: []
      }
  }),
    // ToastNoAnimationModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,


    },

  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
