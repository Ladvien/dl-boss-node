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
import { ListOrdersComponent } from './work/jobs-completed/completed-jobs.component';
import { NNRegressionOrderFormComponent } from './work/job-order-forms/nn-regression/order-form/nn-regression-order-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOrdersComponent,
    HomeComponent,
    WorkComponent,
    NNRegressionOrderFormComponent
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
