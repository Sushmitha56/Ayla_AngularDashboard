import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";

const dashboardRoutes:Routes= [
    {
        path: '',
        redirectTo: '/dashboard/navbar',
        pathMatch: 'full',
      },
    { path:'navbar', component:NavbarComponent}
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: []
})
export class DashboardRoutingModule{}