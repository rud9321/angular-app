import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { HttpServicesComponent } from "./http-services/http-services.component";
import { ServiceDetailComponent } from "./service-detail/service-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "forms", component: FormsComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "http-services", component: HttpServicesComponent },
  { path: "http-service-detail/:id", component: ServiceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
