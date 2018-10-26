import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'orders', component: ListOrdersComponent },
    { path: 'jobs', component: ListJobsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
