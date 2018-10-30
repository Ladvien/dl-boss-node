import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateJobComponent } from './work/orders/jobs/create-job/create-job.component';
import { FormsModule } from '@angular/forms';

// Custom
import { HeaderComponent } from './header/header.component';
import { ListOrdersComponent } from './work/orders/orders-tab-group/list-orders/list-orders.component';
import { ListJobsComponent } from './work/orders/jobs/list-jobs/list-jobs.component';
import { GlobalService } from './globals.service';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkService } from './work/work.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkComponent } from './work/work.component';
import { OrdersService } from './work/orders/orders.service';
import { OrdersTabGroupComponent } from './work/orders/orders-tab-group/orders-tab-group.component';
import {
  NNRegressionOrderFormComponent
} from './work/orders/jobs/create-job/job-order-forms/nn-regression-order-form/nn-regression-order-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    HeaderComponent,
    ListOrdersComponent,
    ListJobsComponent,
    HomeComponent,
    WorkComponent,
    OrdersTabGroupComponent,
    NNRegressionOrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [GlobalService, WorkService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
