import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateJobComponent } from './work/jobs/create-job/create-job.component';
import { FormsModule } from '@angular/forms';

// Custom
import { HeaderComponent } from './header/header.component';
import { ListOrdersComponent } from './work/orders/list-orders/list-orders.component';
import { ListJobsComponent } from './work/jobs/list-jobs/list-jobs.component';
import { GlobalService } from './globals.service';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkService } from './work/work.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkComponent } from './work/work.component';
import { OrderTabGroupComponent } from './work/orders/order-tab-group/order-tab-group.component';
import { OrdersService } from './work/orders/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    HeaderComponent,
    ListOrdersComponent,
    ListJobsComponent,
    HomeComponent,
    WorkComponent,
    OrderTabGroupComponent
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
