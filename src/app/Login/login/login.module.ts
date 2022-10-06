import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/app/demo-material-module";
import { LoginComponent } from "./login.component";
import { LoginRoutes } from "./login.route";


@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      RouterModule.forChild(LoginRoutes)
    ],
    declarations: [LoginComponent]
  })
  export class LoginModule {}