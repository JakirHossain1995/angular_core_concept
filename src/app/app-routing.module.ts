import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeatureComponent } from './feature/feature.component';
import { MaterialComponent } from './material/material.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'newComponent', component: NewComponentComponent, children: [
    {path:'', redirectTo: 'employee', pathMatch: 'full'},
    {path: 'employee', component: EmployeeComponent},
    {path: 'student', component: StudentComponent}
  ], canActivate: [AuthGuard]},
  {path:'material', component: MaterialComponent},
  {path:'feature', component: FeatureComponent},
  {path: 'company',  component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
