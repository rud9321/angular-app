import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { DataService } from "./services/data.service";
import { HttpModule } from "@angular/http";
import { HttpServicesComponent } from './http-services/http-services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FormsComponent,
    ReactiveFormComponent,
    HttpServicesComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
