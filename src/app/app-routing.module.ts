import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work/:type', component: WorkComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
