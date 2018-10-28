import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListOrdersComponent } from './work/orders/list-orders/list-orders.component';
import { ListJobsComponent } from './work/jobs/list-jobs/list-jobs.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'orders', component: ListOrdersComponent },
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
