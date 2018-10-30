import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListJobsComponent } from './work/orders/jobs/list-jobs/list-jobs.component';
import { WorkComponent } from './work/work.component';
import { OrdersTabGroupComponent } from './work/orders/orders-tab-group/orders-tab-group.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'orders', component: OrdersTabGroupComponent },
    { path: 'jobs', component: ListJobsComponent },
    { path: 'work', component: WorkComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
