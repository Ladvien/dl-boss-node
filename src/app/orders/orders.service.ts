import { Observable } from 'rxjs';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class OrdersService {


    private orders: Order[] = [];

    constructor(private http: HttpClient) {

    }

    getOrders = new Observable((observer) => {
        this.http.get('http://maddatum.com:3000/retrieve/order')
        .subscribe((orders) => {
            observer.next(orders);
        });
        return this.getOrders;
    });

}
