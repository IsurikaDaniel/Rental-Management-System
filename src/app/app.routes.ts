import { Routes } from '@angular/router';
import { CustomerdashbordComponent } from './pages/customerdashbord/customerdashbord.component';
import { AdmindashbordComponent } from './common/admindashbord/admindashbord.component';
import { ViewrentitmesComponent } from './pages/viewrentitmes/viewrentitmes.component';
import { AddcustomerformComponent } from './common/addcustomerform/addcustomerform.component';
import { AdditmsformComponent } from './common/additmsform/additmsform.component';

export const routes: Routes = [
    {
        path: "",
        component: CustomerdashbordComponent
    },
    {
        path: "Dashboard",
        component: AdmindashbordComponent
    },
    {
        path: "Orders",
        component: ViewrentitmesComponent
    },
    {
        path: "Customers",
        component: AddcustomerformComponent
    },
    {
        path: "Products",
        component: AdditmsformComponent
    }

];
