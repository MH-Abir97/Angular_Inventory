import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/app/demo-material-module";
import { LoginComponent } from "./login.component";
import { LoginRoutes } from "./login.route";


@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(LoginRoutes),
     
    ],
    declarations: [LoginComponent]
  })
  export class LoginModule {}