import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/app/demo-material-module";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { userEntryRouteModule } from "./UserEntry.route";
import { UserEntryComponent } from "./user-entry.component";

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(userEntryRouteModule)
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [],
    providers:[]

  })
  export class UserEntryModule {}
