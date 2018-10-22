import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {

    private orders: Order[] = [];
    constructor(private http: HttpClient) {

    }

    public getOrders() {
        this.http.get('http://maddatum.com:3000/retrieve/order')
        .subscribe((orders) => {
            console.log(orders);
        });
        // return [...this.orders];
    }

}
