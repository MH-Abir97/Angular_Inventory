import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/app/demo-material-module";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RequestionEntryComponent } from "./requestion-entry.component";
import { requestionRoutes } from "./requestionentry.route";
import { CommonTableComponent } from "../common-table/common-table.component";
import { HttpClientModule } from "@angular/common/http";
import { RequestionReportyComponent } from "src/app/Reports/requestion-reporty/requestion-reporty.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    
      RouterModule.forChild(requestionRoutes)
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [RequestionEntryComponent,CommonTableComponent],
    providers:[]

  })
  export class RequestionModule {}
