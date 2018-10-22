import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateJobComponent } from './jobs/create-job/create-job.component';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { OrdersService } from './orders/orders.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    HeaderComponent,
    ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
