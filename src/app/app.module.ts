import { NNRegressionOrderFormComponent } from './work/work-type/orders-tab-group/jobs/job-order-forms/nn-regression-order-form/nn-regression-order-form.component';
import { CreateJobComponent } from './work/work-type/orders-tab-group/jobs/create-job-forms/create-job.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig, MatTableModule } from '@angular/material';

// Custom
import { HeaderComponent } from './header/header.component';
import { GlobalService } from './globals.service';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkService } from './work/work.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkComponent } from './work/work.component';


import { WorkTypeComponent } from './work/work-type/work-type.component';
import { OrdersTabGroupComponent } from './work/work-type/orders-tab-group/orders-tab-group.component';

import { ListOrdersComponent } from './work/work-type/orders-tab-group/list-jobs/list-jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    HeaderComponent,
    ListOrdersComponent,
    HomeComponent,
    WorkComponent,
    OrdersTabGroupComponent,
    NNRegressionOrderFormComponent,
    WorkTypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [GlobalService, WorkService, { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
