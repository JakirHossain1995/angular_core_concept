import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { MaterialComponent } from './material/material.component';
import { AuthGuard } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { FeatureComponent } from './feature/feature.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyService } from './services/myservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header.interceptor';
import { MyDirectiveDirective } from './my-directive.directive';
import { CompanyComponent } from './company/company.component';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    MaterialComponent,
    EmployeeComponent,
    StudentComponent,
    FeatureComponent,
    MyDirectiveDirective,
    CompanyComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, MyService,
  {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
