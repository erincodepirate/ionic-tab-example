import { Injectable } from '@angular/core';
import { Item } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  items: Item[] = [];



  constructor() {
    this.items = [{ id: 1, name: 'p1', description: "blah blah", price: 20 },
    { id: 2, name: 'p2', description: "bah bah", price: 15 },
    { id: 3, name: 'p3', description: "aaaa", price: 10 }]
  }

  getItems(): Promise<Item[]> {
    //return this.items;
    return new Promise((resolve,reject) => {
      let itms: Item[] = [];
      itms = this.items.filter(x => x.price <= 15);
      if (itms.length > 0) { 
        resolve (itms)
      } else {
        reject("High price");
      }
    })
  }

  checkTotal(data: Item[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i].price;
      }
      if (sum <= 40) {
        resolve(true);
      } else {
        reject("Can't be listed.");
      }
    })
  }

  getItem(id: number) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
