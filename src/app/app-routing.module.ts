import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WorkComponent } from './work/work.component';
import { OrdersTabGroupComponent } from './work/work-type/orders-tab-group/orders-tab-group.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'orders', component: OrdersTabGroupComponent },
    { path: 'work/:type', component: WorkComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
