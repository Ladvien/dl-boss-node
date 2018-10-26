import { Observable } from 'rxjs';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { GlobalService } from '../globals.service';

@Injectable()
export class OrdersService {


    private orders: Order[] = [];

    constructor(public globals: GlobalService, private http: HttpClient) {

    }

    getOrders = new Observable((observer) => {
        this.http.get(this.globals.bossAddress + '/retrieve/order')
        .subscribe((orders) => {
            observer.next(orders);
        });
        return this.getOrders;
    });

}
