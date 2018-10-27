import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateJobComponent } from './jobs/create-job/create-job.component';
import { FormsModule } from '@angular/forms';

// Custom
import { HeaderComponent } from './header/header.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';
import { GlobalService } from './globals.service';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkerNodeService } from './worker-node.service';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    HeaderComponent,
    ListOrdersComponent,
    ListJobsComponent,
    HomeComponent
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
  providers: [GlobalService, WorkerNodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
