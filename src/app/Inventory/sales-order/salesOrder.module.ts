import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ActivityTimelineComponent } from "src/app/dashboard/dashboard-components/activity-timeline/activity-timeline.component";
import { ContactsComponent } from "src/app/dashboard/dashboard-components/contacts/contacts.component";
import { OurVisiterComponent } from "src/app/dashboard/dashboard-components/our-visiter/our-visiter.component";
import { ProfileComponent } from "src/app/dashboard/dashboard-components/profile/profile.component";
import { SalesOverviewComponent } from "src/app/dashboard/dashboard-components/sales-overview/sales-overview.component";

import { DemoMaterialModule } from "src/app/demo-material-module";
import { SalesOrderComponent } from "./sales-order.component";
import { SalesOrderRoutes } from "./salesOrder.routing";

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      RouterModule.forChild(SalesOrderRoutes)
    ],
    declarations: [SalesOrderComponent]
  })
  export class SalesOrderModule {}
  